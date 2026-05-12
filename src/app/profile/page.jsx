"use client";

import { authClient } from '@/lib/auth-client';
import { Avatar, Card } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import { BiEditAlt } from 'react-icons/bi';

const ProfilePage = () => {
    // catch the user
      const userData = authClient.useSession();
      const user = userData.data?.user;
    console.log(user);

    return (
        <div className="max-w-7xl mx-auto my-20">
            <Card className='mx-auto flex flex-col items-center border mt-5 py-20'>
                <Avatar className='h-25 w-25'>
                        <Avatar.Image alt={user?.name} src={user?.image} 
                        referrerPolicy='no-referrer'
                        />
                        <Avatar.Fallback className="font-bold">{user?.name[0]}</Avatar.Fallback>
                      </Avatar>

                <h2 className="text-2xl font-bold">{user?.name}</h2>
                <p className='text-gray-400'>{user?.email}</p>
                <Link className='flex items-center gap-2 px-6 py-2 rounded-full bg-orange-500 text-white w-fit' href={"/update-profile"}>
                <BiEditAlt></BiEditAlt>
                Update your profile</Link>
            </Card>
        </div>
    );
};

export default ProfilePage;