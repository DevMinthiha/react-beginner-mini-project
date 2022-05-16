import React from "react";

const Show = ({user, removeUser}) => {

    const removeUserHandler = () => removeUser(user.id);

  return (
    <div className="card w-25 rounded-3 p-3 text-center">
      <img
        src={user.image}
        className="rounded-circle mx-auto"
        width={"100px"}
        height={"100px"}
        alt=""
      />
      <p>Name - {user.name}</p>
      <p>Email - {user.email}</p>
      <p>Phone - {user.phone}</p>
      <button className="btn btn-danger btn-sm" onClick={removeUserHandler}>Delete</button>
    </div>
  );
};

export default Show;
