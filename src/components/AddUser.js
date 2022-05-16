import React, { useState } from "react";

const AddUser = ({addUser}) => {
  const [id, setId] = useState("");
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const idChangeHandler = (event) => setId(event.target.value);
  const imageChangeHandler = (event) => setImage(event.target.value);
  const nameChangeHandler = (event) => setName(event.target.value);
  const phoneChangeHandler = (event) => setPhone(event.target.value);
  const onSubmitHandler = event => {
    event.preventDefault();
    const user = {
      id: id,
      picture: image,
      name: name,
      phone: phone
    }
    addUser(user);
    
  }

  return (
    <form onSubmit={onSubmitHandler} className="w-50 card shadow-sm border-3 mb-4 p-4 rounded">
      <div className="form-group">
        <label htmlFor="id">Id</label>
        <input
          type="text"
          name="id"
          className="form-control mb-3"
          onChange={idChangeHandler}
          value={id}
        />
      </div>
      <div className="form-group">
        <label htmlFor="img">Image</label>
        <input
          type="text"
          name="img"
          className="form-control mb-3"
          onChange={imageChangeHandler}
          value={image}
        />
      </div>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          className="form-control mb-3"
          onChange={nameChangeHandler}
          value={name}
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          name="phone"
          className="form-control mb-3"
          onChange={phoneChangeHandler}
          value={phone}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Create
      </button>
    </form>
  );
};

export default AddUser;
