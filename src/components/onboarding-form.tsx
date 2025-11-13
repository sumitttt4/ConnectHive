"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { PageHeading } from "@/components/page-heading";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  twitterHandle: z
    .string()
    .min(1, {
      message: "Twitter handle is required.",
    })
    .regex(/^[a-zA-Z0-9_]+$/, {
      message: "Invalid handle. Use only letters, numbers, and underscores.",
    }),
  followerCount: z.string().min(1, {
    message: "Follower count is required.",
  }),
  niche: z.string().min(1, {
    message: "Please select a niche.",
  }),
  tags: z.string().min(1, {
    message: "Please add at least one tag.",
  }),
  bio: z
    .string()
    .min(10, {
      message: "Bio must be at least 10 characters.",
    })
    .max(150, {
      message: "Bio must not exceed 150 characters.",
    }),
});

const niches = [
  "Design",
  "Dev",
  "Marketing",
  "AI",
  "Product",
  "Writing",
];

export function OnboardingForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      twitterHandle: "",
      followerCount: "",
      niche: "",
      tags: "",
      bio: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Form submitted:", values);
    console.log("Tags array:", values.tags.split(",").map((tag) => tag.trim()));
  }

  return (
    <div className="mx-auto mt-10 max-w-lg">
      <Card className="rounded-2xl border border-slate-200 shadow-card-sm">
        <CardContent className="p-6">
          <PageHeading
            title="Create your ConnectX profile"
            subtitle="Tell us about yourself to get matched"
          />

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6 space-y-6" role="form" aria-label="Profile creation form">
              {/* Name */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-slate-900">Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} className="rounded-xl" aria-label="Your full name" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Twitter Handle */}
              <FormField
                control={form.control}
                name="twitterHandle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-slate-900">Twitter Handle</FormLabel>
                    <FormControl>
                      <Input placeholder="johndoe (no @ symbol)" {...field} className="rounded-xl" aria-label="Your Twitter handle" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Follower Count */}
              <FormField
                control={form.control}
                name="followerCount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-slate-900">Follower Count</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="10000"
                        {...field}
                        className="rounded-xl"
                        aria-label="Your follower count"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Niche */}
              <FormField
                control={form.control}
                name="niche"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-slate-900">Niche</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="rounded-xl" aria-label="Select your niche">
                          <SelectValue placeholder="Select your niche" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {niches.map((niche) => (
                          <SelectItem key={niche} value={niche}>
                            {niche}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Tags */}
              <FormField
                control={form.control}
                name="tags"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tags</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="React, TypeScript, Next.js"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Bio */}
              <FormField
                control={form.control}
                name="bio"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bio</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us about yourself..."
                        className="resize-none"
                        rows={4}
                        maxLength={150}
                        {...field}
                      />
                    </FormControl>
                    <p className="text-xs text-slate-500">
                      {field.value.length}/150 characters
                    </p>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full" aria-label="Create your ConnectX profile">
                Create Profile
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
