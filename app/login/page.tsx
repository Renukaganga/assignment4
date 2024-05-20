"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import './login.css'

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
import UserCard from './usercard/page';


const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

const LoginForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleLogin = async (data: { username: string; password: string }) => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const usersData = await response.json();

      const loggedInUser = usersData.find((user: { username: string; email: string }) => user.username === data.username && user.email === data.password);

      if (loggedInUser) {
        console.log('login successful');
        setSuccess(true);
        setError(false);
        setUserData(usersData);
      } else {
        setError(true);
        setSuccess(false);
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError(true);
      setSuccess(false);
    }
  };

  return (
    <div>
    <div className="login-container">
      <div className="login-form-container">
        <h2 className="login-heading">Login</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleLogin)} className="space-y-6">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="form-item">
                  <FormLabel className="form-label">Username</FormLabel>
                  <FormControl>
                    <Input className="form-control" placeholder="Enter your username" {...field} />
                  </FormControl>
                  <FormMessage className="form-message" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="form-item">
                  <FormLabel className="form-label">Password</FormLabel>
                  <FormControl>
                    <Input type="password" className="form-control" placeholder="Enter your password" {...field} />
                  </FormControl>
                  <FormMessage className="form-message" />
                </FormItem>
              )}
            />
            <div >
              <Button className="submit-button" type="submit">Login</Button>
            </div>
            {error && <FormMessage className="error-message">Invalid username or password</FormMessage>}
          </form>
          <div>
           
          </div>
        </Form>
        
      </div>
    </div>
    <div>
        {success && <UserCard />}
        </div>
    </div>
  );
};

export default LoginForm;


