import React, { useState } from 'react'


const users = [
  {
    email: 'zaibali@gmail.com',
    password: 'abc123',
    userName: 'Zaib Ali',
    hobbies: ['football', 'Movies'],
    posts: [
      {
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident corporis obcaecati odit in suscipit enim architecto ipsa pariatur voluptas earum reprehenderit excepturi natus, quaerat nostrum aperiam perspiciatis molestiae a quibusdam?',
        likes: 10
      },
      {
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptatum minus, dolores expedita quod laboriosam minima sapiente, illo tempora fugiat delectus. Eos ex soluta atque obcaecati quaerat sed, veritatis blanditiis!',
        likes: 15
      }
    ]
  },
  {
    email: 'zaib@gmail.com',
    password: '123abc',
    userName: 'Zaib Ali',
    hobbies: ['WWE', 'Shows'],
    posts: [
      {
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident corporis obcaecati odit in suscipit enim architecto ipsa pariatur voluptas earum reprehenderit excepturi natus, quaerat nostrum aperiam perspiciatis molestiae a quibusdam?',
        likes: 10
      },
      {
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptatum minus, dolores expedita quod laboriosam minima sapiente, illo tempora fugiat delectus. Eos ex soluta atque obcaecati quaerat sed, veritatis blanditiis!',
        likes: 15
      }
    ]
  }
];

type loginType = {
  changeAuthStatus: (status: boolean) => void;
  setUser: (user: userType) => void
}

export default function Login({ changeAuthStatus, setUser }: loginType) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const loginHandler = () => {
    let [userFound] = users.filter((user) => (
      user.email === email && user.password === password
    ))
    if (userFound) {
      changeAuthStatus(true);
      setUser(userFound);
    }
    console.log(userFound, 'userFound');
    console.log('loginHandler')
  }

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
        <h1>Login here</h1>
        <input
          type="text"
          value={email}
          onChange={(ev) => {
            setEmail(ev.target.value);
          }}
          style={{ border: '1px solid black', padding: '4px' }}
        />
        <br />
        <input
          type="password"
          value={password}
          onChange={(ev) => {
            setPassword(ev.target.value);
          }}
          style={{ border: '1px solid black', padding: '4px' }}
        />
        <br />
        <input type="submit" value="Login" onClick={loginHandler}

          style={{ border: '1px solid black', padding: '4px' }}
        />
      </div>
    </>
  )
}
