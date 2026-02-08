import code from "../img/code.svg";
import { useState } from "react";

const Code = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    age: "",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const fullName =
    user.firstName || user.lastName
      ? `${user.firstName} ${user.lastName}`.trim()
      : "Enter your name";

  return (
    <div className="container flex flex-row h-screen">
      <div className="left">
        <div className="mx-2 -my-3.5">
          <img src={code} alt="Code Uni" width="175" />

          <div className="m-56">
            <h1>What's your name</h1>

            <div className="2xl:w-2/5 mt-6">
              <p>
                Please provide your first and last name so we can address you
                properly throughout your application process.
              </p>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-4 flex flex-col"
            >
              <div className="flex flex-row mt-0">
                <div className="flex flex-col">
                  <label htmlFor="firstName">FIRST NAME</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={user.firstName}
                    onChange={handleChange}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="lastName">LAST NAME</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={user.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="flex flex-row">
                <div className="flex flex-col">
                  <label htmlFor="age">AGE</label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    value={user.age}
                    onChange={handleChange}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="location">LOCATION</label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={user.location}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <button type="submit">Continue</button>
            </form>
          </div>
        </div>
      </div>

      <div className="right 2xl:w-2/5" style={{backgroundColor: "#F1F5F9"}}>
        <div className="flex flex-row items-center">
          <img src={code} alt="Code Uni" style={{ width: 150 }} />
          <div>
            <p>
              CURIOSITY-DRIVEN EDUCATION <br />
              <span>UNIVERSITY OF APPLIED SCIENCES</span> BERLIN
            </p>
          </div>
        </div>

        <div>
          <p>
            <strong>STUDENT ID </strong> STUDIERENDENAUSWEIS
          </p>
          <p>
            <strong>NAME </strong>
            {fullName}
          </p>
          <p>
            <strong>AGE </strong>
            {user.age}
          </p>
          <p>
            <strong>LOCATION </strong>
            {user.location}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Code;
