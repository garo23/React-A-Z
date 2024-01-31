import { useEffect, useReducer } from "react";

// Define action types for the reducer
const actionTypes = {
  LOADING: "LOADING",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
};

// Define the reducer function to manage state transitions
// Actions are javascript objects that must have :
// Type - property that indicates the type of action to be carried out
// Payload - object that contains the information that should be used to change the state
const fetchReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.LOADING:
      return { ...state, loading: true, error: null };
    case actionTypes.SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case actionTypes.ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      throw new Error("Unknown action");
  }
};

type Props = {
  url: string;
  enabledFlag?: boolean;
};

// dispatch function sends acton to the store (executes action)
export function useFetch({ url, enabledFlag = true }: Props) {
  const [state, dispatch] = useReducer(fetchReducer, {
    loading: false,
    data: null,
    error: null,
  });

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      dispatch({ type: actionTypes.LOADING });

      if (!url) return;

      try {
        //The AbortController is created to handle the potential case
        //where the component is unmounted or the request needs to be canceled before it completes.
        //The signal is obtained from the controller,
        //and this signal can be passed to the fetch API's signal option.
        //This allows the fetch operation to be aborted by calling controller.abort() if needed.
        const controller = new AbortController();
        const signal = controller.signal;

        const response = await fetch(url, { signal });
        const data = await response.json();

        if (isMounted) {
          dispatch({ type: actionTypes.SUCCESS, payload: data });
        }
      } catch (error) {
        if (isMounted) {
          dispatch({ type: actionTypes.ERROR, payload: error.message });
        }
      }
    };

    if (enabledFlag) {
      fetchData();
    }
    //In the cleanup function of the useEffect in the useFetch hook,
    //isMounted is used to check whether the component is still mounted before calling isMounted.abort().
    //If the component is unmounted,
    //it prevents potential memory leaks by not attempting to perform operations on a component that no longer exists.
    return () => {
      isMounted = false;
    };
  }, [url, enabledFlag]);

  return state;
}

//Reducers are pure functions. First they take the current state of an application.
//Second they perform an action. Third they return the new updated state
