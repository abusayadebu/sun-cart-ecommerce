"use client";
import { authClient } from '@/lib/auth-client';
import { Avatar, Button, Card, Description, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import { BiEdit } from 'react-icons/bi';
import { FaArrowRightLong } from 'react-icons/fa6';
import { GrUpdate } from 'react-icons/gr';

const UpdateProfilePage = () => {

     // catch the user
          const userData = authClient.useSession();
          const user = userData.data?.user;
        console.log(user);


    const onSubmit = async(e) =>{
            e.preventDefault();
            const name = e.target.name.value;
            const image = e.target.image.value;

            await authClient.updateUser({
                name,
                image,
            })
    
            console.log(name, image);
        } 
    


    return (
        <div className="max-w-7xl mx-auto my-20">
            <div className="max-w-7xl mx-auto mb-30">
                        <div className='max-w-96 mx-auto flex flex-col items-center mt-8'>
                            <Avatar size="lg">
                                    <Avatar.Image alt={user?.name} src={user?.image} 
                                    referrerPolicy='no-referrer'
                                    />
                                    <Avatar.Fallback className="font-bold">{user?.name[0]}</Avatar.Fallback>
                                  </Avatar>
            
                            <h2 className="text-2xl font-bold">{user?.name}</h2>
                            <p className='text-gray-400'>{user?.email}</p>
                        </div>
                        </div>

            <Card className="border mx-auto w-125 py-10 mb-20 mt-8">
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
                      Update Credentials
                      </span>
                    </div>
            
                    <h1 className="text-center text-2xl font-bold mb-4 flex items-center justify-center gap-5">
                        <BiEdit className='text-2xl'></BiEdit>
                        Update Your Profile</h1>
            
                  <Form className="flex w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>
                    <TextField isRequired name="name" type="text">
                      <Label className="text-lg">Name</Label>
                      <Input placeholder="Enter your name" />
                      <FieldError />
                    </TextField>
            
                    <TextField isRequired name="image" type="url">
                      <Label className="text-lg">Image URL</Label>
                      <Input placeholder="Image URL" />
                      <FieldError />
                    </TextField>
            
                    <div className="w-full flex justify-center">
                      <Button className="bg-orange-500 text-lg mt-5" type="submit">
                        <GrUpdate></GrUpdate>
                        Update
                      </Button>
                    </div>
                  </Form>
            
            
                </Card>
        </div>
    );
};

export default UpdateProfilePage;