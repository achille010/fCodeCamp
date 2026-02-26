import code from "../img/code.svg";
import { useState } from "react";

export const NameReserve = () => {
  return <span style={{ color: "rgb(148, 163, 184)" }}>Enter your name</span>;
};

export const AgeReserve = () => {
  return <span style={{ color: "rgb(148, 163, 184)" }}>Enter your age</span>;
};

export const LocationReserve = () => {
  return (
    <span style={{ color: "rgb(148, 163, 184" }}>Enter your location</span>
  );
};

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
    user.firstName || user.lastName ? (
      `${user.firstName} ${user.lastName}`.trim()
    ) : (
      <NameReserve />
    );

  const age = user.age ? `${user.age}` : <AgeReserve />;

  const location = user.location ? (
    `${user.location}`.trim()
  ) : (
    <LocationReserve />
  );

  return (
    <>
      <div
        style={{ fontFamily: "Quicksand" }}
        className="container flex flex-row h-screen"
      >
        <div className="left">
          <div className="mx-8 my-8 ">
            <img src={code} alt="Code Uni" width="120" />

            <div className="m-40">
              <div className="flex flex-col items-center">
                <h1 className="text-xl">What's your name?</h1>
                <div className="2xl:w-4/5 mt-8 mb-12">
                  <p
                    style={{ color: "rgb(148, 163, 184)" }}
                    className="sm:text-sm"
                  >
                    Please provide your first and last name so we can address
                    you properly throughout your application process.
                  </p>
                </div>
              </div>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="mt-4 flex flex-col gap-4"
              >
                <div className="flex flex-col align-center items-center gap-8 px-0">
                  <div>
                    <div className="flex flex-row mt-0 gap-4">
                      <div className="flex flex-col">
                        <label htmlFor="firstName" className="sm:text-sm">
                          FIRST NAME
                        </label>
                        <input
                          style={{
                            border: "1px solid rgb(228,228,231)",
                            borderRadius: "5px",
                          }}
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={user.firstName}
                          onChange={handleChange}
                          required
                          className="h-8 2xl:w-52"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label htmlFor="lastName" className="sm:text-sm">
                          LAST NAME
                        </label>
                        <input
                          style={{
                            border: "1px solid rgb(228,228,231)",
                            borderRadius: "5px",
                          }}
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={user.lastName}
                          onChange={handleChange}
                          required
                          className="h-8 2xl:w-52"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <div className="flex flex-col">
                        <label htmlFor="age" className="sm:text-sm">
                          AGE
                        </label>
                        <input
                          style={{
                            border: "1px solid rgb(228,228,231)",
                            borderRadius: "5px",
                          }}
                          type="number"
                          id="age"
                          name="age"
                          value={user.age}
                          onChange={handleChange}
                          className="h-8 2xl:w-52"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label htmlFor="location" className="sm:text-sm">
                          LOCATION
                        </label>
                        <input
                          style={{
                            border: "1px solid rgb(228,228,231)",
                            borderRadius: "5px",
                          }}
                          type="text"
                          id="location"
                          name="location"
                          value={user.location}
                          onChange={handleChange}
                          className="h-8 2xl:w-52"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-[430px] rounded-[7px] bg-[#18181B] py-[10px] text-center text-white transition-all duration-150 ease-in-out hover:bg-gray-800"
                    >
                      Continue
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div
          className="right 2xl:w-2/5 flex items-bottom justify-center flex-col "
          style={{ backgroundColor: "#F1F5F9" }}
        >
          <div 
            className="
              bg-white
              m-[50px]
              mb-5
              p-5
              h-fit
              text-left
              border-[0.1px]
              border-[rgb(86,86,86)]
              rounded-[10px]
              sticky
              top-[30px]
              shadow-[30px_30px_30px_rgb(203,206,217)]
              [transform:rotateX(-30deg)_rotateZ(20deg)_scale(0.9)]
            "
          >
            <div className="relative mb-16 flex items-center justify-left gap-4">
              <div>
                <img src={code} alt="Code Uni" style={{ width: 120 }} />
              </div>
              <div className="leading-tight" style={{ fontSize: 9 }}>
                <p>
                  CURIOSITY-DRIVEN EDUCATION <br />
                  <strong>UNIVERSITY OF APPLIED SCIENCES</strong> <br /> BERLIN
                </p>
              </div>
            </div>
            <div className="relative -mt-12 flex flex-col gap-4">
              <p>
                <strong>STUDENT ID </strong> |{" "}
                <span style={{ color: "rgb(148, 163, 184)" }}>
                  STUDIERENDENAUSWEIS
                </span>
              </p>
              <p>
                <strong>NAME </strong> |{" "}
                <span style={{ color: "rgb(148, 163, 184)" }}>DERNAME</span>{" "}
                <br />
                {fullName}
              </p>
              <p>
                <strong>AGE </strong> |{" "}
                <span style={{ color: "rgb(148, 163, 184)" }}>DASALTER</span>{" "}
                <br />
                {age}
              </p>
              <p>
                <strong>LOCATION </strong> |{" "}
                <span style={{ color: "rgb(148, 163, 184)" }}> STANDORT</span>{" "}
                <br />
                {location}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Code;
