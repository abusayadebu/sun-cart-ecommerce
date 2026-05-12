"use client";

import React from "react";
import {Check} from "@gravity-ui/icons";
import {Button, Card, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";

const RegisterPage = () => {
    const router = useRouter()

    const onSubmit = async(e) =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const image = e.target.image.value;
        const password = e.target.password.value;

        console.log(name, email, image, password);

        const {data, error} = await authClient.signUp.email({
          name, 
          email, 
          image,
          password,
        })

     // condition based toast
            if (error) {
            toast.error(error.message || "Login failed");
            return;
          }
    
          toast.success("Login successful");

        console.log(data, error);

    } 

  return (
    
      <Card className="border mx-auto w-125 py-10 mb-20 mt-25 animate__animated animate__fadeIn animate__slower">
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
          JOIN US TODAY
          </span>
        </div>

      <h1 className="text-center text-2xl font-bold mb-4">Register Now</h1>

      <Form className="flex w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>
        <TextField isRequired name="name" type="text">
          <Label className="text-lg">Name</Label>
          <Input placeholder="Enter your name" />
          <FieldError />
        </TextField>

        <TextField isRequired name="image" type="text">
          <Label className="text-lg">Image URL</Label>
          <Input placeholder="Image URL" />
          <FieldError />
        </TextField>

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
            Register Now
          </Button>
        </div>

        {/* if not account */}
              <div className="flex items-center gap-4 justify-center mt-2">
                <p className="text-gray-500">Already have an Account?</p>
                <Link href={"/login"} className="text-orange-400 font-semibold">
                Login
              </Link>
              </div>
      </Form>

        <ToastContainer position="top-center"></ToastContainer>
    </Card>
  );
};

export default RegisterPage;