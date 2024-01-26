import "./styles.css";

export default function App() {
  //1. Using spread
  // const food = { beef: '🥩', bacon: '🥓' };

  // const cloneFood = { ...food };

  // console.log(cloneFood);

  //2. Using Object.assign

  // const food = { beef: '🥩', bacon: '🥓' };

  // const cloneFood = Object.assign({}, food);

  // console.log(cloneFood);

  //3. Using JSON
  // const food = { beef: '🥩', bacon: '🥓' };

  // const cloneFood = JSON.parse(JSON.stringify(food));

  // console.log(cloneFood);

  //Swallow copy
  // const originalObject = { nested: { value: 5 } };
  // const modifiedObject = { ...originalObject, nested: { value: 10 } };

  // console.log(originalObject.nested.value);
  // console.log(modifiedObject.nested.value);

  //Deep copy
  const originalObject = { nested: { value: 5 } };
  const modifiedObject = {
    ...originalObject,
    nested: { ...originalObject.nested, value: 10 }
  };

  console.log(originalObject.nested.value);
  console.log(modifiedObject.nested.value);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
