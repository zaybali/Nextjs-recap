import React from 'react'

// type postsType = {
//   Posts?: postType[]
// }

export default function Posts({ Posts = [] }: { Posts?: postType[] }) {
  return (
    <div>
      <h2><strong>Posts</strong></h2>
      <ul>
        {
          Posts?.length > 0 ?
            (
              Posts?.map(({ content, likes }, i) => (
                <li key={i} style={{ listStyleType: 'none', marginBottom: '15px' }}>
                  <div>
                    <strong>Content:</strong>
                    <span>{content}</span>
                  </div>
                  <div>
                    <strong>Likes:</strong>
                    <span>{likes}</span>
                  </div>
                </li>
              ))
            ) :
            (
              <li>No Posts Available</li>
            )
        }
      </ul>
    </div>
  )
}
