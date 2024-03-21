import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Card, CardContent } from "@/ui/components/ui/card";
import { ArrowsHorizontal } from "@phosphor-icons/react";

import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/ui/components/ui/form";
import { Input } from "@/ui/components/ui/input";

const formSchema = z.object({
  px: z.number().positive({ message: "O valor deve ser positivo" }),
  rem: z.number().positive({ message: "O valor deve ser positivo" }),
  base_value: z.number().positive({ message: "O valor deve ser positivo" }),
});

export function PxRemInterface() {
  // const { watch, register, handleSubmit, control, ...form } = useForm<
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      px: 16,
      rem: 1,
      base_value: 16,
    },
  });

  const formValues = form.watch();
  console.log(formValues);

  function handleChange(value: any) {
    console.log(value);
  }

  return (
    <section className="relative container flex flex-col items-center justify-center gap-8 p-16">
      <h1 className="inline-flex items-center gap-2 text-2xl">
        PX <ArrowsHorizontal size={28} /> REM
      </h1>
      <Card>
        <CardContent className="py-6">
          <Form {...form}>
            <form className="flex flex-col gap-8">
              <div className="flex items-center justify-between">
                <FormField
                  control={form.control}
                  name="px"
                  render={() => (
                    <FormItem>
                      <FormLabel>PX</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="16..."
                          {...form.register("px", {
                            valueAsNumber: true,
                            onChange(event) {
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
                    <FormItem>
                      <FormLabel>REM</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="16..."
                          {...form.register("rem", { valueAsNumber: true })}
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
                  <FormItem>
                    <FormLabel>Valor base</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="16..."
                        {...form.register("base_value", {
                          valueAsNumber: true,
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
    </section>
  );
}
