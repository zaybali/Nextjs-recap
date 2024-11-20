import React from 'react'

// type hobbiesType = {
//   Hobbies?: string[];
// }

export default function Hobbies({ Hobbies }: { Hobbies?: string[] }) {
  return (
    <div>
      <h2>Hobbies:</h2>
      <ul>
        {Hobbies?.map((hobby, i) => (
          <li key={i}>{hobby}</li>
        ))}
      </ul>
    </div>
  )
}
