"use client"

import { useState } from "react";
import UserTimeline from "./usertimeline";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  return (
    <>
      {
        isAuthenticated ? (
          <UserTimeline />
        ) : (
          <h2>Not Auth run</h2>
        )
      }


    </>
  );
}
