
type postType = {
  content: string,
  likes: number
}

type userType = {
  email: string,
  password: string,
  userName: string,
  hobbies: string[],
  posts: postType[]
}