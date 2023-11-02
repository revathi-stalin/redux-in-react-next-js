"use client"

import React, { useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import { useDispatch } from 'react-redux'
import { setUser } from '@/redux/slices/userSlice'

function Home({users}) {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setUser(users));
    }, [users])

    return (
        <div>
            <Navbar />
            <h1>Welcome</h1>
        </div>
    )
}

export default Home