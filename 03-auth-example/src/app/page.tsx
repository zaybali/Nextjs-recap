"use client"

import { useState } from "react";
import UserTimeline from "./usertimeline";
import Login from "./login";



export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <>
      {
        isAuthenticated ? (
          <UserTimeline />
        ) : (
          <Login />
        )
      }

    </>
  );
}
