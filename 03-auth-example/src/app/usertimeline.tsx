import React from 'react'

type userDataType = {
  userData: (UserType | null)
}

export default function UserTimeline({ userData }: userDataType) {
  console.log(userData)
  return (
    <div>userTimeline</div>
  )
}
