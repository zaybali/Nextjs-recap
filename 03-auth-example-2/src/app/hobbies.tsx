import React from 'react'

// type hobbiesType = {
//   Hobbies?: string[];
// }

export default function Hobbies({ Hobbies }: { Hobbies?: string[] }) {
  return (
    <div className="bg-card rounded-md p-4 shadow">
      <h2 className="text-lg font-medium">Hobbies:</h2>
      <ul className="list-disc list-inside mt-2 space-y-1">
        {Hobbies?.map((hobby, i) => (
          <li key={i} className="text-muted-foreground">
            {hobby}
          </li>
        ))}
      </ul>
    </div>

  )
}
