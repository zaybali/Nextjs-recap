import React from 'react'

// type postsType = {
//   Posts?: postType[]
// }

export default function Posts({ Posts = [] }: { Posts?: postType[] }) {
  return (
    <div className="bg-card rounded-md p-4 shadow">
      <h2 className="text-lg font-medium mb-4">
        <strong>Posts</strong>
      </h2>

      {Posts?.length > 0 ? (
        <ul className="space-y-4">
          {Posts?.map(({ content, likes }, i) => (
            <li
              key={i}
              className="bg-muted rounded-lg p-4 shadow-sm flex flex-col space-y-2"
            >
              <div>
                <strong className="text-muted-foreground">Content:</strong>
                <span className="ml-2">{content}</span>
              </div>
              <div>
                <strong className="text-muted-foreground">Likes:</strong>
                <span className="ml-2">{likes}</span>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-muted-foreground">No Posts Available</div>
      )}
    </div>

  )
}
