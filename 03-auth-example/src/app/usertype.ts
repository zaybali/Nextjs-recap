
type postType = {
  content: string,
  likes: number
}

type UserType = {
  email: string,
  password: string,
  userName: string,
  hobbies: string[],
  posts: postType[],
}