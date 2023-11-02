import React from 'react'
import styles from './User.module.css'

function User({id, name, email, age , jobRole, deleteUser }) {
    console.log(id);

  return (
    <div className={styles.user}>
        <h2>
            Id: <span>{id}</span>
        </h2>
        <h3>
            Name: <span>{name}</span>
        </h3>
        <h3>
            Email: <span>{email}</span>
        </h3>
        <h3>
            Age: <span>{age}</span>
        </h3>
        <h3>
            jobRole: <span>{jobRole}</span>
        </h3>
        <div className={styles.user__bottom}>
            <button className={styles.user__delete} onClick={deleteUser}>Delete User</button>
        </div>
    </div>
  )
}

export default User