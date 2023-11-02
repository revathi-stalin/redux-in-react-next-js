"use client";

import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import styles from './add.module.css'
import { v4 as uuid } from "uuid"
import { useDispatch } from 'react-redux';
import { addUser } from '@/redux/slices/userSlice'

const AddUser = () => {
  const dispatch = useDispatch();

  const [userInfo, setUserInfo] = useState({
    id: "",
    name: "",
    email: "",
    age: "",
    jobRole: "",
  });

  useEffect(() => {
    setUserInfo((currentInfo) => {
       return {
          ...currentInfo,
          id: uuid(),
       };
    });
  }, []);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    setUserInfo((currentInfo) => {
      return {
         ...currentInfo,
         [name]: value,
      };
   });
  }

  const handleAdd = () => {
      dispatch(addUser(userInfo));
      console.log(userInfo);
      
      setUserInfo({
        id: uuid(),
        name: "",
        email: "",
        age: "",
        jobRole: "",
      });
  }
  
  return (
    <div>
      <Navbar />
      <div className={styles.home}>
          <div className={styles.home__container}>
            <div className={styles.home__formContainer}>
                <h1 className={styles.home__title}>Add User Information</h1>
                <input type="text" 
                    name="id" 
                    value={userInfo.id} disabled
                />
                <input type="text" 
                    name="name" 
                    placeholder="Enter Name" 
                    value={userInfo.name} 
                    onChange={handleChange} 
                />
                <input type="text" 
                    name="email" 
                    placeholder="Enter Email" 
                    value={userInfo.email}
                    onChange={handleChange}
                />
                <input type="text" 
                    name="age" 
                    placeholder="Enter Age" 
                    value={userInfo.age}
                    onChange={handleChange}
                />
                <input type="text" 
                    name="jobRole" 
                    placeholder="Enter job role" 
                    value={userInfo.jobRole}
                    onChange={handleChange}
                />
                <button onClick={handleAdd}>Add User</button>

            </div>
          </div>
      </div>
    </div>
  )
}

export default AddUser