import axios from "axios";
import React, { useEffect, useState } from "react";
import Create from "./components/Create";
import Show from "./components/Show";

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get("https://randomuser.me/api/?results=10");
      const rawData = data.results;
      const filteredUser = rawData.map((user) => ({
        id: user.login.uuid,
        image: user.picture.thumbnail,
        name: `${user.name.title}. ${user.name.first} ${user.name.last}`,
        email: user.email,
        phone: user.phone,
      }));
      setUsers(filteredUser);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const removeUser = id => {
    const remainUsers = users.filter( user => user.id !== id );
    setUsers(remainUsers);
  }

  const addUser = (user) => {
    const newUsers = [user, ...users];
    setUsers(newUsers);
    setShowForm(false);
  }

  const showFormHandler = () => setShowForm(!showForm);

  return (
    <div className="container d-flex flex-column align-items-center">
      <h1 className="fw-bold text-primary my-4">User List</h1>
      <button
        className={`btn my-4 ${showForm ? "btn-danger" : "btn-primary"}`}
        onClick={showFormHandler}
      >
        {showForm ? "Cancel" : "Create New User"}
      </button>
      {showForm && <Create addUser={addUser} />}
      <div className="container d-flex flex-wrap gap-5 justify-content-center">
        {users.map((user) => (
          <Show key={user.id} user={user} removeUser={removeUser} />
        ))}
      </div>
    </div>
  );
};

export default App;

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import AddUser from "./components/AddUser";
// import User from "./components/User";

// const App = () => {
//   let [users, setUsers] = useState([]);
//   const [showForm, setShowForm] = useState(false);

//   useEffect(() => {
//     fetch("https://randomuser.me/api/?results=12")
//       .then((res) => res.json())
//       .then((data) => {
//         let rawUsers = data.results;
//         let filteredUser = rawUsers.map((user) => ({
//           id: user.login.uuid,
//           name: `${user.name.title}.${user.name.first} ${user.name.last}`,
//           phone: user.phone,
//           picture: user.picture.thumbnail,
//         }));
//         setUsers(filteredUser);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   const addUser = (user) => {
//     let newUser = [user, ...users];
//     setUsers(newUser);
//     setShowForm(false);
//   };

//   const removeUser = (id) => {
//     let remainUsers = users.filter((user) => user.id !== id);
//     setUsers(remainUsers);
//   };

//   const showFormHandler = () => setShowForm(!showForm);

//   return (
//     <div className="container d-flex flex-column justify-content-center align-items-center">
//       <h1 className="text-center mt-3">Users</h1>
//       <button
//         type="submit"
//         className={`btn my-3 ${showForm ? "btn-danger" : "btn-primary"}`}
//         onClick={showFormHandler}
//       >
//         {showForm ? "Cancle" : "Add User"}
//       </button>
//       {showForm && <AddUser addUser={addUser} />}
//       <div className="d-flex justify-content-center flex-wrap">
//         {users?.map((user) => (
//           <User data={user} key={user.id} removeUser={removeUser} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;

// const fetchData = async () => {
//   const res = await fetch("https://randomuser.me/api/?results=12");
//   const data = await res.json();
//   const raw = data.results;
//   const filteredUser = raw?.map((user) => ({
//     id: user.login.uuid,
//     name: `${user.name.title}.${user.name.first} ${user.name.last}`,
//     phone: user.phone,
//     picture: user.picture.thumbnail,
//   }));
//   setUsers(filteredUser);
// };
// useEffect(() => {
//   fetchData();
// }, []);

// const fetchData = async () => {
//   try {
//     const { data } = await axios.get("https://randomuser.me/api/?results=12");
//     const raw = data.results;
//     const filteredUser = raw?.map((user) => ({
//       id: user.login.uuid,
//       name: `${user.name.title}.${user.name.first} ${user.name.last}`,
//       phone: user.phone,
//       picture: user.picture.thumbnail,
//     }));
//     setUsers(filteredUser);
//   } catch (err) {
//     console.log(err);
//   }
// };
// useEffect(() => {
//   fetchData();
// }, []);
