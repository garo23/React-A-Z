export default function ChildComponent(props) {
  const { value, onChange } = props;
  console.log("Child' s value " + value);
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
