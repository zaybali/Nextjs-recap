import React from 'react'

// type greeType = {
//   userName?: string
// }

export default function Greet({ userName }: { userName?: string }) {
  return (
    <div className="bg-card rounded-md p-4 shadow">
      <h1 className="text-xl font-semibold">
        Welcome, <span className="text-primary">{userName}</span>!
      </h1>
    </div>
  )
}
