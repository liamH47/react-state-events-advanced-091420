import React from "react";
import "./App.css";
import Favorites from './Containers/Favorites'
import BeyContainer from './Containers/BeyContainer'

const App = () => {

  return (
    <div className="container" >
      <BeyContainer />
      <Favorites />
    </div>
  );
};

export default App;
