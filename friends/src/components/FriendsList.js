import React, { useState, useEffect } from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";

const FriendsList = () => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    axiosWithAuth()
      .get("/api/friends")
      .then(res => {
        console.log(res);
        setFriends(res.data);
      });
  }, []);
  return (
    <div>
      {friends.map(friend => {
        return (
          <div>
            <h2>{friend.name}</h2>
            <p>Age:{` ${friend.age}`}</p>
            <p>{friend.email}</p>
          </div>
        );
      })}
    </div>
  );
};

export default FriendsList;