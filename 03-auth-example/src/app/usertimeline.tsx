import React from 'react'
import Greet from './greet'
import Hobbies from './hobbies'
import Posts from './posts'

type userDataType = {
  userData: (UserType | null)
}

export default function UserTimeline({ userData }: userDataType) {
  console.log(userData)
  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="max-w-md w-full p-6 bg-white border border-gray-300 rounded-lg shadow-lg">
          <Greet userName={userData?.userName} />

          <Hobbies userHobbies={userData?.hobbies} />

          <Posts userPosts={userData?.posts} />
        </div>
      </div>
    </>
  )
}
