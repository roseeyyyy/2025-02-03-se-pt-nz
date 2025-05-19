import React from "react";
import Hello from "../../Exer1/Hello";
import BigCats from "../../Exer2&Exer4/BigCats";
import Emoji from "../../Exer3/Emoji";
//import Calculator from "../../Exer6/Calculator";
import Calculator from "../../Exer6/Calculator";

function App() {
  
  return (
    <>
    <div>
      <Hello>
      </Hello>
    </div>

    <div className="p-6">
      <h3 className="text-3xl font-bold mb-4">Big Cats List</h3>
      <BigCats />
    </div>

    <div>
      <Emoji></Emoji>
    </div>

    <div>
      <Calculator></Calculator>
    </div>
    </>
  );
}

export default App;
