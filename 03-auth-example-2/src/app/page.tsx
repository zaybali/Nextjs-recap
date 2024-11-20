import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
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
