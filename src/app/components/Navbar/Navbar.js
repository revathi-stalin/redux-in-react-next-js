import React from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'

function Navbar() {
  return (
    <nav className={styles.nav}>
        <Link href={'/'}>
            <h1>Home</h1>
        </Link>
        <ul className={styles.list}>
            <Link href="/add">Add User</Link>
            <Link href="/users">Users</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
        </ul>
    </nav>
        
  )
}

export default Navbar