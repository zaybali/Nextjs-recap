import React from 'react'
import Greet from './greet';
import Hobbies from './hobbies';
import Posts from './posts';

// type userDataType = {
//   userData: (userType | null)
// }

export default function Usertimeline({ userData }: { userData: userType | null }) {

  console.log(userData);
  return (
    <>
      <h1>UserTimeline</h1>

      <Greet userName={userData?.userName} />

      <Hobbies Hobbies={userData?.hobbies} />

      <Posts Posts={userData?.posts} />
    </>
  )
}
