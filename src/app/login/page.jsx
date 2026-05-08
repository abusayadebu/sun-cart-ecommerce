"use client";

import React from "react";
import {Check} from "@gravity-ui/icons";
import {Button, Card, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { FaArrowRightLong } from "react-icons/fa6";

const LoginPage = () => {
    const onSubmit = async(e) =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password);

        const {data, error} = await authClient.signIn.email({
          email, 
          password,
          callbackURL: "/",
        })

    // condition based HeroUI toast
    
        console.log(data, error);

    } 

  return (
    <Card className="border mx-auto w-125 py-10 mb-20 mt-25">
          <div className="mb-3">
            {/* badge */}
              <span
                className="
                  inline-flex
                  items-center
                  gap-2
                  bg-yellow-400
                  text-black
                  text-xs
                  font-semibold
                  px-4
                  py-2
                  rounded-full
                  uppercase
                "
              >
                <FaArrowRightLong className="text-sm" />
              LET’S GET YOU IN
              </span>
            </div>
    
          <h1 className="text-center text-2xl font-bold mb-4">Login Here</h1>
    
          <Form className="flex w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>
            <TextField
              isRequired
              name="email"
              type="email"
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return "Please enter a valid email address";
                }
    
                return null;
              }}
            >
              <Label className="text-lg">Email</Label>
              <Input placeholder="john@example.com" />
              <FieldError />
            </TextField>
    
            <TextField
              isRequired
              minLength={8}
              name="password"
              type="password"
              validate={(value) => {
                if (value.length < 8) {
                  return "Password must be at least 8 characters";
                }
                if (!/[A-Z]/.test(value)) {
                  return "Password must contain at least one uppercase letter";
                }
                if (!/[0-9]/.test(value)) {
                  return "Password must contain at least one number";
                }
    
                return null;
              }}
            >
              <Label className="text-lg">Password</Label>
              <Input placeholder="Enter your password" />
              <Description>
                Must be at least 8 characters with 1 uppercase and 1 number
              </Description>
              <FieldError />
            </TextField>
    
            <div className="w-full">
              <Button className="bg-orange-500 text-lg mt-5" fullWidth type="submit">
                <Check />
                Login
              </Button>
            </div>
          </Form>
    
    
        </Card>
  );
};

export default LoginPage;