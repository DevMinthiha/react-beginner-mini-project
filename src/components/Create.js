import React, { useState } from "react";

const Create = ({addUser}) => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState("");

  const idChangeHandler = e => setId(e.target.value);
  const nameChangeHandler = e => setName(e.target.value);
  const emailChangeHandler = e => setEmail(e.target.value);
  const phoneChangeHandler = e => setPhone(e.target.value);
  const imageChangeHandler = e => setImage(e.target.value);
  const onSubmitHandler = e => {
      e.preventDefault();
      const user = { id, image, name, email, phone };
      addUser(user);
  }

  return (
    <form onSubmit={onSubmitHandler} className="w-50 card shadow-sm p-4">
      <div className="form-group mb-4">
        <label htmlFor="id">ID</label>
        <input type="text" className="form-control" value={id} onChange={idChangeHandler} />
      </div>
      <div className="form-group mb-4">
        <label htmlFor="image">Image</label>
        <input type="text" className="form-control" value={image} onChange={imageChangeHandler} />
      </div>
      <div className="form-group mb-4">
        <label htmlFor="name">Name</label>
        <input type="text" className="form-control" value={name} onChange={nameChangeHandler} />
      </div>
      <div className="form-group mb-4">
        <label htmlFor="email">Email Address</label>
        <input type="text" className="form-control" value={email} onChange={emailChangeHandler} />
      </div>
      <div className="form-group mb-4">
        <label htmlFor="phone">Phone Number</label>
        <input type="text" className="form-control" value={phone} onChange={phoneChangeHandler} />
      </div>
      <button type="submit" className="btn btn-primary">Create</button>
    </form>
  );
};

export default Create;
