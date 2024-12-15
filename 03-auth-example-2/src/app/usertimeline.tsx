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
    // <>
    //   <h1>UserTimeline</h1>

    //   <Greet userName={userData?.userName} />

    //   <Hobbies Hobbies={userData?.hobbies} />

    //   <Posts Posts={userData?.posts} />
    // </>
    <>
      <div className="container mx-auto p-6 bg-background rounded-md shadow">
        <h1 className="text-2xl font-bold mb-4">User Timeline</h1>

        <div className="space-y-6">
          <Greet userName={userData?.userName} />
          <Hobbies Hobbies={userData?.hobbies} />
          <Posts Posts={userData?.posts} />
        </div>
      </div>
    </>
  )
}
