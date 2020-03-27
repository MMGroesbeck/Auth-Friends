import React, { useState } from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";

const AddFriend = (props) => {
    const [ newFriend, setNewFriend ] = useState({
        name: "",
        age: "",
        email: ""
    });

    const handleChange = e => {
        setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value
        });
    }

    const postFriend = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('/api/friends', newFriend)
            .then(res => {
                console.log(res);
                props.history.push('/protected');
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
          <form onSubmit={postFriend}>
            <input
              type="text"
              name="name"
              value={newFriend.name}
              onChange={handleChange}
            />
            <input
              type="text"
              name="age"
              value={newFriend.age}
              onChange={handleChange}
            />
            <input
              type="text"
              name="email"
              value={newFriend.email}
              onChange={handleChange}
            />
            <button>Add Friend</button>
          </form>
        </div>
      );
}

export default AddFriend;