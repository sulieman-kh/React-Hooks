import { useState, useContext, createContext } from "react";

const LevelFive = () => {

  return (
    <div>
      <p>level five rendered</p>
      <h5>{`${user.firstName} ${user.lastName}, aged ${user.age}`}</h5>
      {/* <SomeConsumer /> */}
      <button
        onClick={() => {
          setUser(Object.assign({}, user, { age: user.age + 1 }));
        }}
      >
        Increment
      </button>
    </div>
  );
};

const LevelFour = () => (
  <div>
    <h4>fourth level</h4>
    <LevelFive />
  </div>
);

const LevelThree = () => (
  <div>
    <h3>third level</h3>
    <LevelFour />
  </div>
);

const LevelTwo = () => (
  <div>
    <h2>second level</h2>
    <LevelThree />
  </div>
);

const LevelOne = () => {
  const user = useState({
    firstName: "Tony",
    lastName: "Stark",
    age: 19,
    email: "Tony@email.com",
  });

  return (
    <div>
      <h1>first level</h1>
      <LevelTwo />
    </div>
  );
};


export default LevelOne;
