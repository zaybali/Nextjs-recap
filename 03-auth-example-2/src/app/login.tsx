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
      {/* Main Container */}
      <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-50 to-blue-100">
        {/* App Title */}
        <h1 className="text-4xl font-bold text-primary mb-8">
          Next.js Authentication App
        </h1>

        {/* Login Form */}
        <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
          <h2 className="text-2xl font-semibold text-center mb-6">Login Here</h2>
          <form className="space-y-4">
            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-muted-foreground"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(ev) => setEmail(ev.target.value)}
                className="w-full mt-1 px-4 py-2 border border-muted rounded-md focus:ring focus:ring-primary focus:outline-none"
                placeholder="Enter your email"
              />
            </div>

            {/* Password Input */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-muted-foreground"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(ev) => setPassword(ev.target.value)}
                className="w-full mt-1 px-4 py-2 border border-muted rounded-md focus:ring focus:ring-primary focus:outline-none"
                placeholder="Enter your password"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                onClick={loginHandler}
                className="w-full py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                Login
              </button>

            </div>
          </form>
        </div>
      </div>
    </>
  )
}
