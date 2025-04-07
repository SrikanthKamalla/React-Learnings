import React, { createContext, useContext } from "react";

const Product = () => {
  const theme = useContext(Themecontex);
  return (
    <div style={{ border: "2px solid black", padding: "10px" }}>
      <p>Product Component</p>

      <button
        style={{
          border: theme === "light" ? "2px solid red" : "2px solid green",
        }}
      >
        Button
      </button>
    </div>
  );
};
const Catagories = () => {
  return (
    <div style={{ border: "2px solid black", padding: "10px", margin: "10px" }}>
      <p>Catagories Component</p>
      <Product />
    </div>
  );
};
const NavBar = () => {
  return (
    <div style={{ border: "2px solid black", padding: "10px" }}>
      <p>NavBar Component</p>
    </div>
  );
};

const Themecontex = createContext();
const Home = () => {
  const theme = "light";
  return (
    <div style={{ border: "2px solid black", padding: "10px" }}>
      <p>Home Component</p>
      <NavBar />
      <Themecontex.Provider value={theme}>
        <Catagories />
      </Themecontex.Provider>
    </div>
  );
};

export default Home;
