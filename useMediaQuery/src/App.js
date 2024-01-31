import { useEffect, useState } from "react";

function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    //represents the media query and allows you to check
    //whether it matches the current screen size

    // Initial check
    setMatches(mediaQueryList.matches);

    // Update matches when the media query status changes
    const handleChange = (event) => {
      setMatches(event.matches);
    };

    mediaQueryList.addEventListener("change", handleChange);

    // Clean up event listener when the component unmounts
    return () => {
      mediaQueryList.removeEventListener("change", handleChange);
    };
  }, [query]);

  return matches;
}
