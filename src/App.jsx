import { useState } from "react";
import "./App.css";

import calculateRollLength from "./helpers/CalculateRollLength/calculateRollLength";
import Form from "./component/Form/Form";

function App() {
  const [outerDiameter, setOuterDiameter] = useState(0);
  const [innerDiameter, setInnerDiameter] = useState(0);
  const [thickness, setThickness] = useState(0);
  const [rollLength, setRollLength] = useState(0);

  const calculate = (unitItemSize) => {
    setRollLength(
      calculateRollLength(
        outerDiameter,
        innerDiameter,
        thickness,
        unitItemSize
      ).toFixed(2)
    );
  };

  return (
    <>
      <Form
        calculate={calculate}
        outerDiameter={outerDiameter}
        setOuterDiameter={setOuterDiameter}
        innerDiameter={innerDiameter}
        setInnerDiameter={setInnerDiameter}
        thickness={thickness}
        setThickness={setThickness}
        rollLength={rollLength}
      />
    </>
  );
}

export default App;
