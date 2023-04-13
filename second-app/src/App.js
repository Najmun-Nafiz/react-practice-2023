import React from "react";
import Card from "./components/Card";
import Props from "./components/Props";
import Destructer from "./components/Destructer";
import Json from "./components/Json";
import DataJson from "./data.json";
import Nested from "./components/Nested";


function App() {
  //Json data useing with loop & maping...
  let items = [];
  // for (let x = 0; x < DataJson.length; x++){
  //   items.push(<Json cardTitleText={DataJson[x].title} cardDescText={DataJson[x].description} /> );
  // }
  // items = DataJson.map((singleItem, index) => <Json key={index} cardTitleText={singleItem.title} cardDescText={singleItem.description} />);

  return (
    <div>
      {/* <Card /> */}
      {/* <Props cardTitleText="Practice Card For Props" cardDescText="Props card desc 1"/> */}
      {/* <Destructer cardTitleText="Practice Card For Destructer" cardDescText="Destructer card desc 1"/> */}
      {/* {items} */}
      <Nested />
    </div>
  );
}

export default App;
