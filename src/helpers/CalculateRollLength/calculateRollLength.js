 const calculateRollLength = (outerDiameter,innerDiameter,thickness,unitSize) => {
    const radiusOuter = outerDiameter / 2;
    const radiusInner = innerDiameter / 2;

    const rollLength = (Math.PI * (Math.pow(radiusOuter, 2) - Math.pow(radiusInner, 2)) * thickness) / unitSize; // переводимо у метри
   console.log(unitSize)
   console.log(outerDiameter)
   console.log(innerDiameter)
   console.log(thickness)
   console.log(rollLength)
    return rollLength
  };


  export default calculateRollLength