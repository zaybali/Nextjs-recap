import React from 'react'

type GreetType = {
  userName?: string
}

export default function Greet({ userName }: GreetType) {
  return (
    <div className="mb-6 text-center">
      <h1 className="text-2xl font-bold text-gray-800">Welcome, {userName}!</h1>
    </div>
  )
}
