import "./styles.css";

function GrandchildComponent(props) {
  return <div>{props.value}</div>;
}

// ChildComponent
function ChildComponent(props) {
  return <GrandchildComponent value={props.value} />;
}

// ParentComponent
function ParentComponent(props) {
  return <ChildComponent value={props.value} />;
}

export default function App() {
  const value = "Hello, Prop Drilling!";
  return <ParentComponent value={value} />;
}
