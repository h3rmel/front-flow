'use client';

// #region Imports

import { ChangeEvent } from 'react';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { useLanguage } from '@/ui/components/language/language-provider';
import { Card, CardContent } from '@/ui/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/ui/components/ui/form';
import { Input } from '@/ui/components/ui/input';

import { PX_REM_LANGUAGES } from '@/_languages';

// #endregion

const formSchema = z.object({
  px: z.number().positive({ message: 'O valor deve ser positivo' }),
  rem: z.number().positive({ message: 'O valor deve ser positivo' }),
  base_value: z.number().positive({ message: 'O valor deve ser positivo' }),
});

/**
 * Generate a card form with inputs for PX, REM, and base value. Handles conversion between the values.
 *
 * @return {JSX.Element}
 */
export function CardForm(): JSX.Element {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      px: 16,
      rem: 1,
      base_value: 16,
    },
  });

  const { translate } = useLanguage();

  /**
   * Handles the change event for input elements.
   *
   * @param {ChangeEvent<HTMLInputElement>} event - the change event object
   * @return {void}
   */
  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    const { name, value } = event.target;

    if (name === 'px') {
      form.setValue('rem', Number(value) / form.getValues().base_value);
    } else if (name === 'rem') {
      form.setValue('px', Number(value) * form.getValues().base_value);
    } else if (name === 'base_value') {
      form.setValue('px', Number(value));
      form.setValue('rem', Number(value) / form.getValues().px);
    }
  }

  return (
    <Card>
      <CardContent className="py-6">
        <Form {...form}>
          <form className="flex flex-col gap-8">
            <div className="flex items-center justify-between gap-4">
              <FormField
                control={form.control}
                name="px"
                render={() => (
                  <FormItem className="flex items-center gap-2 flex-row-reverse">
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
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="rem"
                render={() => (
                  <FormItem className="flex items-center gap-2 flex-row-reverse">
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
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="base_value"
              render={() => (
                <FormItem className="flex items-center gap-2 flex-row-reverse">
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
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
