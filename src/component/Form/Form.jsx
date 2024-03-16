import { useState } from "react";

import css from "./Form.module.css";

const Form = (prop) => {
  const [unitItem, setUnitItem] = useState(true);

  const hendleChengeUnit = () => {
    console.log(unitItem);
    return setUnitItem(!unitItem);
  };

  const unitItemSize = () => {
    return unitItem ? 1000 : 12;
  };

  const {
    calculate,
    setOuterDiameter,
    setInnerDiameter,
    setThickness,
    outerDiameter,
    innerDiameter,
    thickness,
    rollLength,
  } = prop;

  //   useEffect();

  return (
    <div>
      <h2>Roll Length Calculator</h2>
      <button
        onClick={() => hendleChengeUnit()}
        className={unitItem ? css.unitbtn : css.unit}
      >
        unit: {unitItem ? "(mm)" : "(in)"}
      </button>{" "}
      <br />
      <label>Outer Diameter {unitItem ? "(mm)" : "(in)"}:</label>
      <input
        type="number"
        value={outerDiameter}
        onChange={(e) => setOuterDiameter(e.target.value)}
      />
      <br />
      <label>Inner Diameter {unitItem ? "(mm)" : "(in)"}:</label>
      <input
        type="number"
        value={innerDiameter}
        onChange={(e) => setInnerDiameter(e.target.value)}
      />
      <br />
      <label>Thickness {unitItem ? "(mm)" : "(in)"}:</label>
      <input
        type="number"
        value={thickness}
        onChange={(e) => setThickness(e.target.value)}
      />
      <br />
      <button onClick={() => calculate(unitItemSize())}>
        Calculate Roll Length
      </button>
      <p>
        Roll Length: {rollLength} {unitItem ? "(meters)" : "(feet)"}
      </p>
    </div>
  );
};

export default Form;
