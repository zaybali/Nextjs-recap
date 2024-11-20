"use client";

import { useState } from "react";
import Usertimeline from "./usertimeline";
import Login from "./login";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<userType | null>(null);
  return (
    <>
      {
        isAuthenticated ? (
          <Usertimeline userData={user} />
        ) : (
          <Login
            changeAuthStatus={setIsAuthenticated}
            setUser={setUser}
          />
        )
      }
    </>
  );
}
