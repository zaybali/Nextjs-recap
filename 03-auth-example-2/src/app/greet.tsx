import React from 'react'

// type greeType = {
//   userName?: string
// }

export default function Greet({ userName }: { userName?: string }) {
  return (
    <h1>Weclome {userName}</h1>
  )
}
