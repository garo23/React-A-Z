import React, { useRef, useEffect } from "react";

const DOMInteractionFunctional = () => {
  const myRef = useRef(null);

  useEffect(() => {
    if (myRef.current) {
      myRef.current.style.backgroundColor = "blue";
    }
  }, []);

  console.log(myRef);

  return <div ref={myRef}>This is a DOM node in a functional component.</div>;
};

export default DOMInteractionFunctional;
