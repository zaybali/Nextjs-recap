import React from 'react'

type HobbiesType = {
  userHobbies?: string[]
}

export default function Hobbies({ userHobbies }: HobbiesType) {
  return (
    <>
      <div className='mb-6'>
        <h2 className='text-xl font-semibold text-gray-700'>Your Hobbies:</h2>
        <ul className='list-disc pl-5 mt-2 text-gray-600'>
          {userHobbies?.map((hobby, i) => (
            <li key={i} className='mt-1'>{hobby}</li>
          ))}
        </ul>
      </div>
    </>
  )
}
