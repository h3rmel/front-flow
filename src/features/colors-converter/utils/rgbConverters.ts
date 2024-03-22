/**
 * Converts a hexadecimal color code to its RGB representation.
 *
 * @param {string} hexcode - The hexadecimal color code to convert, in the format #RRGGBB, where RR, GG, and BB are hexadecimal digits.
 * @throws {Error} If the given hexcode is not a valid 6-digit hexadecimal code.
 * @returns {IRGB} An object containing the red, green, and blue values of the RGB representation of the given hexcode.
 */
export function hexToRgb(hexcode: string): IRGB {
  // Entry validation
  if (!/^#[0-9a-f]{6}$/i.test(hexcode)) throw new Error('Invalid hexcode');

  // Hexcode extraction
  const r = parseInt(hexcode.slice(1, 3), 16);
  const g = parseInt(hexcode.slice(3, 5), 16);
  const b = parseInt(hexcode.slice(5, 7), 16);

  return { r, g, b };
}

/**
 * Converts HSL (Hue, Saturation, Lightness) color values to RGB (Red, Green, Blue) color values.
 *
 * @param {number} h - The hue value (0 to 360).
 * @param {number} s - The saturation value (0 to 100).
 * @param {number} l - The lightness value (0 to 100).
 * @return {IRGB} The object containing the red, green, and blue color values.
 */
export function hslToRgb(h: number, s: number, l: number): IRGB {
  // Entry validation
  if (h < 0 || h >= 360 || s < 0 || s > 100 || l < 0 || l > 100) {
    throw new Error('Invalid HSL values');
  }

  // Values normalization
  h /= 360;
  s /= 100;
  l /= 100;

  // Color fraction
  const c = (1 - Math.abs(2 * l - 1)) * s;

  // Color wheel position calc
  const x = h * 6;
  const i = Math.floor(x);
  const f = x - i;

  // Colors calc
  let r = 0;
  let g = 0;
  let b = 0;

  switch (i) {
    case 0:
      r = c;
      g = 0;
      b = 0;
      break;
    case 1:
      r = c * f;
      g = c;
      b = 0;
      break;
    case 2:
      r = 0;
      g = c;
      b = c * f;
      break;
    case 3:
      r = 0;
      g = c;
      b = c;
      break;
    case 4:
      r = c * f;
      g = 0;
      b = c;
      break;
    case 5:
      r = c;
      g = 0;
      b = c * f;
      break;
  }

  // Color correction
  r = Math.round(r * 255);
  g = Math.round(g * 255 + 1);
  b = Math.round(b * 255 + 1);

  return { r, g, b };
}
