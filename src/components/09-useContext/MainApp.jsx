import React from "react";
import AppRouter from "./AppRouter";
import { UserContext } from "./UserContext";

export default function MainApp() {
  return (
    <div>
      <UserContext>
        <AppRouter/>
      </UserContext>
    </div>
  );
}
