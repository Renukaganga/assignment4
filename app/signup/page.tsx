'use client';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import './signup.css';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const SignupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [address, setAddress] = useState('');
  const [course, setCourse] = useState('');

  const handleChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (e: ChangeEvent<HTMLInputElement>) => {
    setter(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('api/register', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name, email, phonenumber, address, course
        })
      });
      if (response.ok) {
        alert('Signup successful');
      } else {
        alert('Error during signup');
      }
    } catch (error) {
      console.error('Signup error:', error);
      alert('Error during signup');
    }
  };

  return (
    <div className="signup-container">
      <Card className="signup-card">
        <CardHeader>
          <CardTitle className='h1'>Signup</CardTitle>
          <CardDescription>Fill in the details to create an account.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input className="input-large" type="text" id="name" value={name} onChange={handleChange(setName)} required />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input className="input-large" type="email" id="email" value={email} onChange={handleChange(setEmail)} required />
            </div>
            <div>
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input className="input-large" type="tel" id="phoneNumber" value={phonenumber} onChange={handleChange(setPhonenumber)} required />
            </div>
            <div>
              <Label htmlFor="address">Address</Label>
              <Input className="input-large" type="text" id="address" value={address} onChange={handleChange(setAddress)} required />
            </div>
            <div>
              <Label htmlFor="course">Course</Label>
              <Input className="input-large" type="text" id="course" value={course} onChange={handleChange(setCourse)} required />
            </div>
            <CardFooter>
              <Button className="btn" type="submit">Signup</Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignupForm;
