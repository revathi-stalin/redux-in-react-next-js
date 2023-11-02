"use client"

import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/Navbar/Navbar'
import styles from './users.module.css'
import Link from 'next/link';
import User from '../components/User/User'
import { removeUser } from '@/redux/slices/userSlice';

function UsersPage() {
  const users = useSelector((state) => state.userInfo.users);
  
  console.log(users);

  const dispatch = useDispatch();
  const deleteUser = (id) => {
       dispatch(removeUser(id));
  }

  return (
    <div>
      <Navbar />
      <div className={styles.users}>
            <h1 className={styles.users__title}>Users</h1>
            <div className={styles.users__container}>
              {
                  users.length === 0 ? 
                  (
                    <div className={styles.users__empty}>
                     <h1>No users found</h1>
                     <Link href={'/add'}>Add User</Link>
                    </div>
                  ) : (
                     users.map((user) => (
                        <User 
                          key={user.id}
                          id={user.id}
                          name={user.name}
                          email={user.email}
                          age={user.age}
                          jobRole={user.jobRole}
                          deleteUser={() => deleteUser(user.id)}
                        />
                     ))

                  )
              }
            </div>
        </div>
    </div>
  )
}

export default UsersPage