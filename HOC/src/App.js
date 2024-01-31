import React from "react";

const withUpperCase = (WrappedComponent) => {
  return (props) => {
    const { name, ...restProps } = props;
    const upperCaseName = name.toUpperCase();

    return <WrappedComponent name={upperCaseName} {...restProps} />;
  };
};

// Original Component
const MyComponent = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

// Enhanced Component using HOC
const EnhancedComponent = withUpperCase(MyComponent);
console.log(EnhancedComponent);

const App = () => {
  return (
    <div>
      <h2>Original Component:</h2>
      <MyComponent name="John" />

      <h2>Enhanced Component with HOC:</h2>
      <EnhancedComponent name="Tony" />
    </div>
  );
};

export default App;
