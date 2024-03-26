'use client';

import { ReactNode, createContext, useContext } from 'react';

interface ColorConverterProviderProps {
  children: ReactNode;
}

interface ColorConverterState {
  hexToRgb: (hex: string) => IRGB;
  hexToHsl: (hex: string) => IHSL;
  rgbToHex: (r: number, g: number, b: number) => string;
  rgbToHsl: (r: number, g: number, b: number) => IHSL;
  hslToHex: (h: number, s: number, l: number) => string;
  hslToRgb: (h: number, s: number, l: number) => IRGB;
}

const initialState: ColorConverterState = {
  hexToRgb: () => ({ r: 0, g: 0, b: 0 }),
  hexToHsl: () => ({ h: 0, s: 0, l: 0 }),
  rgbToHex: () => '',
  rgbToHsl: () => ({ h: 0, s: 0, l: 0 }),
  hslToHex: () => '',
  hslToRgb: () => ({ r: 0, g: 0, b: 0 }),
};

const ColorConverterContext = createContext<ColorConverterState>(initialState);

/**
 * Provides a context for converting colors between different formats.
 *
 * @param {ReactNode} children - The children components.
 * @returns {JSX.Element} The color converter provider component.
 */
export function ColorConverterProvider({ children }: ColorConverterProviderProps): JSX.Element {
  /**
   * Converts a hexadecimal color code to RGB color values.
   *
   * @param {string} hex - The hexadecimal color code.
   * @returns {IRGB} An object containing the RGB color values.
   * @throws {Error} If the hexadecimal color code is invalid.
   */
  function hexToRgb(hex: string): IRGB {
    const regex = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    if (!regex.test(hex)) throw new Error('Invalid hexadecimal color code');

    let color = hex.replace('#', '');
    if (color.length === 3) {
      color = color
        .split('')
        .map((char) => char + char)
        .join('');
    }

    const r = parseInt(color.substr(0, 2), 16);
    const g = parseInt(color.substr(2, 2), 16);
    const b = parseInt(color.substr(4, 2), 16);

    return { r, g, b };
  }

  /**
   * Converts a hexadecimal color code to HSL (Hue, Saturation, Lightness) format.
   *
   * @param {string} hex - The hexadecimal color code to convert.
   * @returns {IHSL} An object representing the HSL values.
   */
  function hexToHsl(hex: string): IHSL {
    const { r, g, b } = hexToRgb(hex);
    return rgbToHsl(r, g, b);
  }

  /**
   * Converts RGB values to a hexadecimal color code.
   *
   * @param {number} r - The red value (0-255).
   * @param {number} g - The green value (0-255).
   * @param {number} b - The blue value (0-255).
   * @returns {string} The hexadecimal color code.
   * @throws {Error} If any of the RGB values are invalid.
   */
  function rgbToHex(r: number, g: number, b: number): string {
    if (r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255) throw new Error('Invalid RGB values');

    const red = r.toString(16).padStart(2, '0');
    const green = g.toString(16).padStart(2, '0');
    const blue = b.toString(16).padStart(2, '0');

    return `#${red}${green}${blue}`;
  }

  /**
   * Converts RGB color values to HSL color values.
   *
   * @param {number} r - The red color value (0-255).
   * @param {number} g - The green color value (0-255).
   * @param {number} b - The blue color value (0-255).
   * @returns {IHSL} An object containing the HSL color values.
   * @throws {Error} If the RGB values are invalid.
   */
  function rgbToHsl(r: number, g: number, b: number): IHSL {
    if (r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255) throw new Error('Invalid RGB values');

    r /= 255;
    g /= 255;
    b /= 255;

    // Find greatest and smallest channel values
    const cmin = Math.min(r, g, b);
    const cmax = Math.max(r, g, b);
    const delta = cmax - cmin;

    let h = 0;
    let s = 0;
    let l = 0;

    if (delta == 0) h = 0;
    // Red is max
    else if (cmax == r) h = ((g - b) / delta) % 6;
    // Green is max
    else if (cmax == g) h = (b - r) / delta + 2;
    // Blue is max
    else h = (r - g) / delta + 4;

    h = Math.round(h * 60);

    // Make negative hues positive behind 360°
    if (h < 0) h += 360;

    // Calculate lightness
    l = (cmax + cmin) / 2;

    // Calculate saturation
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

    // Multiply l and s by 100
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    return { h, s, l };
  }

  /**
   * Converts HSL color values to a hexadecimal color code.
   *
   * @param {number} h - The hue value (0-360).
   * @param {number} s - The saturation value (0-100).
   * @param {number} l - The lightness value (0-100).
   * @returns {string} The hexadecimal color code.
   */
  function hslToHex(h: number, s: number, l: number): string {
    const { r, g, b } = hslToRgb(h, s, l);

    return rgbToHex(r, g, b);
  }

  /**
   * Converts HSL (Hue, Saturation, Lightness) color values to RGB (Red, Green, Blue) color values.
   *
   * @param h - The hue value (0-360).
   * @param s - The saturation value (0-100).
   * @param l - The lightness value (0-100).
   * @returns {IRGB} An object containing the RGB color values.
   * @throws {Error} If the HSL values are invalid.
   */
  function hslToRgb(h: number, s: number, l: number): IRGB {
    if (h < 0 || h > 360 || s < 0 || s > 100 || l < 0 || l > 100) throw new Error('Invalid HSL values');

    s /= 100;
    l /= 100;

    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    const m = l - c / 2;

    let r = 0;
    let g = 0;
    let b = 0;

    if (0 <= h && h < 60) {
      r = c;
      g = x;
      b = 0;
    } else if (60 <= h && h < 120) {
      r = x;
      g = c;
      b = 0;
    } else if (120 <= h && h < 180) {
      r = 0;
      g = c;
      b = x;
    } else if (180 <= h && h < 240) {
      r = 0;
      g = x;
      b = c;
    } else if (240 <= h && h < 300) {
      r = x;
      g = 0;
      b = c;
    } else if (300 <= h && h < 360) {
      r = c;
      g = 0;
      b = x;
    }

    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);

    return { r, g, b };
  }

  const value: ColorConverterState = {
    hexToRgb,
    hexToHsl,
    rgbToHex,
    rgbToHsl,
    hslToHex,
    hslToRgb,
  };

  return <ColorConverterContext.Provider value={value}>{children}</ColorConverterContext.Provider>;
}

/**
 * Custom hook that provides access to the ColorConverterState from the ColorConverterContext.
 * Throws an error if used outside of a ColorConverterProvider.
 *
 * @returns {ColorConverterState} The ColorConverterState object from the ColorConverterContext.
 * @throws {Error} If used outside of a ColorConverterProvider.
 */
export const useColorsConverter = (): ColorConverterState => {
  const context = useContext(ColorConverterContext);

  if (!context) {
    throw new Error('useColorsConverter must be used within a ColorConverterProvider');
  }

  return context;
};
