import { useState, useContext, createContext } from "react";

const UserContext = createContext();
console.log(UserContext);

const LevelOne = () => {
  const [user, setUser] = useState({
    firstName: "Tony",
    lastName: "Stark",
    age: 20,
    email: "Tony@email.com",
  });

  return (
    <UserContext.Provider value={{user, setUser}}>
      <div>
        <h1>first level</h1>
        <LevelTwo />
      </div>
    </UserContext.Provider>
  );
};

const LevelTwo = () => (
  <div>
    <h2>second level</h2>
    <LevelThree />
  </div>
);
const LevelThree = () => (
  <div>
    <h3>third level</h3>
    <LevelFour />
  </div>
);

const LevelFour = () => (
  <div>
    <h4>fourth level</h4>
    <LevelFive />
  </div>
);

const LevelFive = () => {
  // we need to get that state out of our context so we can 
  // use the variables user and setUser

  return (
    <UserContext.Consumer>
      {
        ({user, setUser}) => (

          <>
            <p>level five rendered</p>
            <h5>{`${user.firstName} ${user.lastName} aged ${user.age}`}</h5>

            <button
              onClick={() => {
                setUser(Object.assign({}, user, { age: user.age + 1 }));
              }}
            >
              Increment
          </button>
          </>
        )
      }
    </UserContext.Consumer>
  );
};




export default LevelOne;
