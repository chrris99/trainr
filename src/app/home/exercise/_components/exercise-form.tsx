"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { createSupabaseClient } from "@/supabase/client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { revalidatePath } from "next/cache";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters."
  }),
  primaryMuscle: z.enum(["Chest", "Biceps"]),
  description: z.string().optional()
});

export const ExerciseForm = () => {
  const supabase = createSupabaseClient();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: ""
    }
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const { data: exerciseData, error } = await supabase
      .from("exercise")
      .insert([
        {
          name: data.name,
          description: data.description,
          primary_muscle: data.primaryMuscle
        }
      ])
      .select();

    console.log(exerciseData);
    if (error) {
      console.error(error);
      toast("Error while creating exercise", {
        description: "Sunday, December 03, 2023 at 9:00 AM",
        action: {
          label: "Undo",
          onClick: () => console.log("Undo")
        }
      });
    }

    if (exerciseData) {
      toast("Exercise has been successfully created", {
        description: `Created ${exerciseData[0].name}`,
        action: {
          label: "Close",
          onClick: () => console.log("Close")
        }
      });
    }

    revalidatePath("/home/exercise");
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Bench press" {...field} />
              </FormControl>
              <FormDescription>Exercise name</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormDescription>Exercise description</FormDescription>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="primaryMuscle"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Primary Muscle</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a muscle group" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Chest">Chest</SelectItem>
                  <SelectItem value="Biceps">Biceps</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};
