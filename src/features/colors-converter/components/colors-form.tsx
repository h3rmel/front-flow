'use client';

// #region Imports

import { ChangeEvent, useState } from 'react';
import { useForm } from 'react-hook-form';

import { getFormError } from '@/utils/get-form-error';
import { zodResolver } from '@hookform/resolvers/zod';
import { useDebouncedCallback } from 'use-debounce';
import { ZodError, z } from 'zod';

import { useColorsConverter } from '@/features/colors-converter';

import { useLanguage } from '@/ui/components/language/language-provider';
import { Card } from '@/ui/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/ui/components/ui/form';
import { Input } from '@/ui/components/ui/input';

import { COLORS_CONVERTER_LANGUAGES } from '@/_languages';

// #endregion

const formSchema = z.object({
  hexcode: z.string().length(7, { message: 'must_have_7_characters' }).trim(),
  rgb: z.object({
    r: z
      .number({ invalid_type_error: 'invalid_type' })
      .nonnegative({ message: 'value_nonnegative_message' })
      .max(255, { message: 'value_max_255' }),
    g: z
      .number({ invalid_type_error: 'invalid_type' })
      .nonnegative({ message: 'value_nonnegative_message' })
      .max(255, { message: 'value_max_255' }),
    b: z
      .number({ invalid_type_error: 'invalid_type' })
      .nonnegative({ message: 'value_nonnegative_message' })
      .max(255, { message: 'value_max_255' }),
  }),
  hsl: z.object({
    h: z
      .number({ invalid_type_error: 'invalid_type' })
      .nonnegative({ message: 'value_nonnegative_message' })
      .max(360, { message: 'value_max_360' }),
    s: z
      .number({ invalid_type_error: 'invalid_type' })
      .nonnegative({ message: 'value_nonnegative_message' })
      .max(100, { message: 'value_max_100' }),
    l: z
      .number({ invalid_type_error: 'invalid_type' })
      .nonnegative({ message: 'value_nonnegative_message' })
      .max(100, { message: 'value_max_100' }),
  }),
});

/**
 * Renders a form for converting colors between different formats.
 *
 * @returns {JSX.Element} The JSX element representing the colors form.
 */
export function ColorsForm(): JSX.Element {
  const [formErrors, setFormErrors] = useState<IFormError[]>([] as IFormError[]);

  // #region Hooks

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      hexcode: '#000000',
      rgb: {
        r: 0,
        g: 0,
        b: 0,
      },
      hsl: {
        h: 0,
        s: 0,
        l: 0,
      },
    },
  });

  const { hexToHsl, hexToRgb, rgbToHex, rgbToHsl, hslToHex, hslToRgb } = useColorsConverter();

  const { translate } = useLanguage();

  // #endregion

  /**
   * Handles the change event of the input fields in the colors form.
   * Updates the form values based on the input changes and performs validation.
   *
   * @param {ChangeEvent<HTMLInputElement>} event - The change event object.
   */
  const handleChange = useDebouncedCallback((event: ChangeEvent<HTMLInputElement>): void => {
    const { name } = event.target;

    setFormErrors([] as IFormError[]);

    try {
      formSchema.parse(form.getValues());

      if (name === 'hexcode') {
        const rgbValue: IRGB = hexToRgb(form.getValues('hexcode'));
        const hslValue: IHSL = hexToHsl(form.getValues('hexcode'));

        // RGB
        form.setValue('rgb.r', rgbValue.r);
        form.setValue('rgb.g', rgbValue.g);
        form.setValue('rgb.b', rgbValue.b);
        // HSL
        form.setValue('hsl.h', hslValue.h);
        form.setValue('hsl.s', hslValue.s);
        form.setValue('hsl.l', hslValue.l);
      } else if (name === 'rgb.r' || name === 'rgb.g' || name === 'rgb.b') {
        const hexValue: string = rgbToHex(form.getValues('rgb.r'), form.getValues('rgb.g'), form.getValues('rgb.b'));
        const hslValue: IHSL = rgbToHsl(form.getValues('rgb.r'), form.getValues('rgb.g'), form.getValues('rgb.b'));

        form.setValue('hexcode', hexValue);
        // HSL
        form.setValue('hsl.h', hslValue.h);
        form.setValue('hsl.s', hslValue.s);
        form.setValue('hsl.l', hslValue.l);
      } else if (name === 'hsl.h' || name === 'hsl.s' || name === 'hsl.l') {
        const hexValue: string = hslToHex(form.getValues('hsl.h'), form.getValues('hsl.s'), form.getValues('hsl.l'));
        const rgbValue: IRGB = hslToRgb(form.getValues('hsl.h'), form.getValues('hsl.s'), form.getValues('hsl.l'));

        form.setValue('hexcode', hexValue);
        // RGB
        form.setValue('rgb.r', rgbValue.r);
        form.setValue('rgb.g', rgbValue.g);
        form.setValue('rgb.b', rgbValue.b);
      }
    } catch (error) {
      if (error instanceof ZodError) {
        const errors: IFormError[] = error.errors.map(
          (error): IFormError => ({ path: String(error.path[0]), message: error.message }),
        );

        setFormErrors(errors);
      }
    }
  }, 200);

  return (
    <Card className="p-8 md:max-w-[900px]">
      <Form {...form}>
        <form className="flex items-center justify-center gap-4">
          {/* Color Block */}
          <div className="w-32 lg:w-64 h-32 lg:h-64 rounded-lg" style={{ backgroundColor: form.watch('hexcode') }} />
          {/* Form */}
          <div className="w-[480px] flex flex-col gap-4">
            {/* Hexcode */}
            <FormField
              control={form.control}
              name="hexcode"
              render={() => (
                <FormItem className="flex flex-col items-center gap-1 h-full">
                  <FormLabel>Hexcode</FormLabel>
                  <FormControl>
                    <Input
                      className="w-[180px]"
                      type="string"
                      placeholder="#00c896..."
                      {...form.register('hexcode', {
                        onChange(event: ChangeEvent<HTMLInputElement>) {
                          handleChange(event);
                        },
                      })}
                    />
                  </FormControl>
                  <FormMessage>
                    {translate(getFormError(formErrors, 'hexcode')?.message, COLORS_CONVERTER_LANGUAGES)}
                  </FormMessage>
                </FormItem>
              )}
            />
            {/* RGB */}
            <div className="flex flex-col items-center gap-2 h-full">
              <FormField
                control={form.control}
                name="rgb"
                render={() => (
                  <>
                    <div className="flex items-center justify-center">
                      {/* R - Red */}
                      <FormItem className="flex basis-32 flex-col items-center gap-1 text-center">
                        <FormLabel>R</FormLabel>
                        <FormControl>
                          <Input
                            className="w-2/3"
                            type="number"
                            placeholder="0..."
                            {...form.register('rgb.r', {
                              valueAsNumber: true,
                              onChange(event: ChangeEvent<HTMLInputElement>) {
                                handleChange(event);
                              },
                            })}
                          />
                        </FormControl>
                      </FormItem>
                      {/* G - Green */}
                      <FormItem className="flex basis-32 flex-col items-center gap-1 text-center">
                        <FormLabel>G</FormLabel>
                        <FormControl>
                          <Input
                            className="w-2/3"
                            type="number"
                            placeholder="200..."
                            {...form.register('rgb.g', {
                              valueAsNumber: true,
                              onChange(event: ChangeEvent<HTMLInputElement>) {
                                handleChange(event);
                              },
                            })}
                          />
                        </FormControl>
                      </FormItem>
                      {/* B - Blue */}
                      <FormItem className="flex basis-32 flex-col items-center gap-1 text-center">
                        <FormLabel>B</FormLabel>
                        <FormControl>
                          <Input
                            className="w-2/3"
                            type="number"
                            placeholder="150..."
                            {...form.register('rgb.b', {
                              valueAsNumber: true,
                              onChange(event: ChangeEvent<HTMLInputElement>) {
                                handleChange(event);
                              },
                            })}
                          />
                        </FormControl>
                      </FormItem>
                    </div>
                    <FormMessage>
                      {translate(getFormError(formErrors, 'rgb')?.message, COLORS_CONVERTER_LANGUAGES)}
                    </FormMessage>
                  </>
                )}
              />
            </div>
            {/* HSL */}
            <div className="flex flex-col items-center gap-2 h-full">
              <FormField
                control={form.control}
                name="hsl"
                render={() => (
                  <>
                    <div className="flex items-center justify-center">
                      {/* H - Hue */}
                      <FormItem className="flex basis-32 flex-col items-center gap-1 text-center">
                        <FormLabel>H</FormLabel>
                        <FormControl>
                          <Input
                            className="w-2/3"
                            type="number"
                            placeholder="165..."
                            {...form.register('hsl.h', {
                              valueAsNumber: true,
                              onChange(event: ChangeEvent<HTMLInputElement>) {
                                handleChange(event);
                              },
                            })}
                          />
                        </FormControl>
                      </FormItem>
                      {/* S - Saturation */}
                      <FormItem className="flex basis-32 flex-col items-center gap-1 text-center">
                        <FormLabel>S</FormLabel>
                        <FormControl>
                          <Input
                            className="w-2/3"
                            type="number"
                            placeholder="100..."
                            {...form.register('hsl.s', {
                              valueAsNumber: true,
                              onChange(event: ChangeEvent<HTMLInputElement>) {
                                handleChange(event);
                              },
                            })}
                          />
                        </FormControl>
                      </FormItem>
                      {/* L - Lightness */}
                      <FormItem className="flex basis-32 flex-col items-center gap-1 text-center">
                        <FormLabel>L</FormLabel>
                        <FormControl>
                          <Input
                            className="w-2/3"
                            type="number"
                            placeholder="39.2..."
                            {...form.register('hsl.l', {
                              valueAsNumber: true,
                              onChange(event: ChangeEvent<HTMLInputElement>) {
                                handleChange(event);
                              },
                            })}
                          />
                        </FormControl>
                      </FormItem>
                    </div>
                    <FormMessage>
                      {translate(getFormError(formErrors, 'hsl')?.message, COLORS_CONVERTER_LANGUAGES)}
                    </FormMessage>
                  </>
                )}
              />
            </div>
          </div>
        </form>
      </Form>
    </Card>
  );
}
