import React from "react";
import { AiTwotoneDelete } from "react-icons/ai";

const User = ({ data, removeUser }) => {
  const removeUserHandler = () => removeUser(data.id);
  return (
    <div className="card w-35 px-5 my-3 mx-3">
      <div className="py-3 d-flex flex-column align-items-center gap-2">
        <img
          src={data.picture}
          alt=""
          width={"50px"}
          height={"50px"}
          className="rounded-circle"
        />
        <h5>{data.name}</h5>
        <p>Phone number: {data.phone}</p>
        <AiTwotoneDelete
          className="text-danger"
          style={{ fontSize: "30px" }}
          onClick={removeUserHandler}
        />
      </div>
    </div>
  );
};

export default User;
