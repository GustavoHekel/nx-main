import {User} from "@nx-demo/contracts";
import React from "react";

export const Profile: React.FC<User> = ({age, name}) => {
  return <div>
    <h4>{name}</h4>
    <h6>{age}</h6>
  </div>
}
