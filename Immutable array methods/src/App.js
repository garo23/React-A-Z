import "./styles.css";

export default function App() {
  const people = ["gosho", "pesho", "ivan"];
  const sortedPeople = people.toSorted();

  console.log("Original", people);
  console.log("Sorted", sortedPeople);

  const reversedPeople = people.toReversed();
  console.log("Reversed", reversedPeople);

  const splicedPeople = people.toSpliced(0, 2, "Dragan");
  console.log("Spliced", splicedPeople);

  return (
    <div className="App">
      <h1>Immutable array methods</h1>
    </div>
  );
}
