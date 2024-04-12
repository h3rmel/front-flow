'use client';

// #region Imports

import { ChangeEvent, useState } from 'react';
import { useForm } from 'react-hook-form';

import { getFormError } from '@/utils/get-form-error';
import { zodResolver } from '@hookform/resolvers/zod';
import { useDebouncedCallback } from 'use-debounce';
import { ZodError, z } from 'zod';

import { useLanguage } from '@/ui/components/language/language-provider';
import { Card } from '@/ui/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/ui/components/ui/form';
import { Input } from '@/ui/components/ui/input';

import { PX_REM_LANGUAGES } from '../languages/px-rem.lng';

// #endregion

type TypeFormSchema = z.infer<typeof formSchema>;

const formSchema = z.object({
  px: z.number({ invalid_type_error: 'invalid_type' }).positive({ message: 'form_schema_be_positive' }),
  rem: z.number({ invalid_type_error: 'invalid_type' }).positive({ message: 'form_schema_be_positive' }),
  base_value: z.number({ invalid_type_error: 'invalid_type' }).positive({ message: 'form_schema_be_positive' }),
});

/**
 * Generate a card form with inputs for PX, REM, and base value. Handles conversion between the values.
 *
 * @return {JSX.Element}
 */
export function PxRemForm(): JSX.Element {
  const [formErrors, setFormErrors] = useState<IFormError[]>([] as IFormError[]);

  // Hooks
  const form = useForm<TypeFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      px: 16,
      rem: 1,
      base_value: 16,
    },
  });

  const { translate } = useLanguage();

  /**
   * Handles the change event of the input fields in the PX-REM form.
   *
   * @param {ChangeEvent<HTMLInputElement>} event - The change event object.
   */
  const handleChange = useDebouncedCallback((event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;

    setFormErrors([] as IFormError[]);

    try {
      formSchema.parse(form.getValues());

      if (name === 'px') {
        form.setValue('rem', Number(value) / form.getValues().base_value);
      } else if (name === 'rem') {
        form.setValue('px', Number(value) * form.getValues().base_value);
      } else if (name === 'base_value') {
        form.setValue('px', Number(value));
        form.setValue('rem', Number(value) / form.getValues().px);
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
    <Card className="p-8">
      <Form {...form}>
        <form className="flex flex-col gap-8">
          <div className="flex items-center justify-between gap-4">
            {/* Pixel */}
            <FormField
              control={form.control}
              name="px"
              render={() => (
                <FormItem className="flex flex-col items-center gap-2 h-full">
                  <FormLabel>PX</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="16..."
                      {...form.register('px', {
                        valueAsNumber: true,
                        onChange(event: ChangeEvent<HTMLInputElement>) {
                          handleChange(event);
                        },
                      })}
                    />
                  </FormControl>
                  <FormMessage>{translate(getFormError(formErrors, 'px')?.message, PX_REM_LANGUAGES)}</FormMessage>
                </FormItem>
              )}
            />
            {/* REM */}
            <FormField
              control={form.control}
              name="rem"
              render={() => (
                <FormItem className="flex flex-col items-center justify-start gap-2">
                  <FormLabel>REM</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="16..."
                      {...form.register('rem', {
                        valueAsNumber: true,
                        onChange(event: ChangeEvent<HTMLInputElement>) {
                          handleChange(event);
                        },
                      })}
                    />
                  </FormControl>
                  <FormMessage>{translate(getFormError(formErrors, 'rem')?.message, PX_REM_LANGUAGES)}</FormMessage>
                </FormItem>
              )}
            />
          </div>
          {/* Base Value */}
          <FormField
            control={form.control}
            name="base_value"
            render={() => (
              <FormItem className="flex flex-col items-center gap-2">
                <FormLabel className="text-nowrap">{translate('base_value', PX_REM_LANGUAGES)}</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="16..."
                    {...form.register('base_value', {
                      valueAsNumber: true,
                      onChange(event: ChangeEvent<HTMLInputElement>) {
                        handleChange(event);
                      },
                    })}
                  />
                </FormControl>
                <FormMessage>
                  {translate(getFormError(formErrors, 'base_value')?.message, PX_REM_LANGUAGES)}
                </FormMessage>
              </FormItem>
            )}
          />
        </form>
      </Form>
    </Card>
  );
}
