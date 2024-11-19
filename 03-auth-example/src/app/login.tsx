import React from 'react';

// React Hook Form to imports
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  email: z.string().email().min(2).max(50),
  password: z.string()
    .min(8) // Minimum length
    .max(100) // Maximum length
    .regex(/[a-z]/, 'Must contain at least one lowercase letter') // Lowercase letter
    .regex(/[A-Z]/, 'Must contain at least one uppercase letter') // Uppercase letter
    .regex(/[0-9]/, 'Must contain at least one number') // Number
    .regex(/[\W_]/, 'Must contain at least one special character'), // Special character
});

// Dummy API
const users = [
  {
    email: "zaibali@gmail.com",
    password: "zayb123",
    userName: "Zaib Ali",
    hobbies: ["swimming", "football"],
    posts: [
      {
        "content": "Captured some stunning sunset photos during my trip to the mountains. Nature is incredible!",
        "likes": 25
      },
      {
        "content": "Just returned from an amazing vacation in Japan! The culture and food were unforgettable.",
        "likes": 18
      }
    ]
  },
  {
    "email": "zayb@live.com",
    "password": "zayb123",
    "userName": "Zayb Aly",
    "hobbies": ["reading", "cycling"],
    "posts": [
      {
        "content": "Just finished reading an amazing book! Can't wait to share my thoughts.",
        "likes": 15
      },
      {
        "content": "Had a great bike ride through the park today. The weather was perfect!",
        "likes": 8
      }
    ]
  },
  {
    "email": "Zaybali@yahoo.com",
    "password": "zayb123",
    "userName": "Zayb Ali",
    "hobbies": ["gaming", "cooking"],
    "posts": [
      {
        "content": "Just beat the final boss in my favorite game! What a challenge!",
        "likes": 20
      },
      {
        "content": "Tried a new recipe for dinner tonight. It turned out amazing!",
        "likes": 12
      }
    ]
  }
];


type loginType = {
  changeAuthStatus: (status: boolean) => void,
  setUser: (user: UserType) => void;
}

export default function Login({ changeAuthStatus, setUser }: loginType) {
  // 1. Define your form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    console.log(values);
  }

  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="max-w-md w-full p-6 border rounded-lg shadow-md">
          <h2 className="text-center mb-4">Login to continue</h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Email"
                        {...field}
                        type="text"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Password"
                        {...field}
                        type="password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
}
