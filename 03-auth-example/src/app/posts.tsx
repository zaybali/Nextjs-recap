import React from 'react'

type postsType = {
  userPosts?: postType[]
}

export default function Posts({ userPosts = [] }: postsType) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-700">Articles:</h2>
      {userPosts?.length > 0 ? (
        userPosts?.map(({ content, likes }, index) => (
          <div key={index} className="bg-gray-50 p-4 rounded-lg shadow mt-4">
            <p className="text-gray-800"><strong>Content:</strong> {content}</p>
            <p className="text-gray-600"><strong>Likes:</strong> {likes}</p>
          </div>
        ))
      ) : (
        <p className="mt-2 text-gray-500">No posts available.</p>
      )}
    </div>
  )
}
