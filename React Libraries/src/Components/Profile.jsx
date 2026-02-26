import { useState } from "react";

const Profile = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    age: 12,
    location: "Las Vegas",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };
  return (
    <>
      <h1>User Profile</h1>
      <h2>Name: {user.name}</h2>
      <h2>Age: {user.age}</h2>
      <h2>Location: {user.location}</h2>
      <br />

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        Name:{" "}
        <input
          value={user.name}
          type="text"
          name="name"
          id="name"
          onChange={handleChange}
        />
        <br />
        Age:{" "}
        <input
          value={user.age}
          type="number"
          name="age"
          id="age"
          onChange={handleChange}
        />
        <br />
        Location:{" "}
        <input
          value={user.location}
          type="text"
          name="location"
          id="location"
          onChange={handleChange}
        />
      </form>
    </>
  );
};

export default Profile;
