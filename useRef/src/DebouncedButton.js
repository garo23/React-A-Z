import { useRef } from "react";

export default function DebouncedButton({ onClick, children }) {
  const timeoutRef = useRef(null);
  return (
    <button
      onClick={() => {
        clearTimeout(timeoutRef.corrent);
        timeoutRef.current = setTimeout(() => {
          onClick();
        }, 1000);
      }}
    >
      {children}
    </button>
  );
}
