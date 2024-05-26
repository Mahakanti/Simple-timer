//This component displays and updates the elapsed time when the timer is running.
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementTimer } from "../redux/actions/timerActions";

export const Timer = () => {
  const { isRunning,elapsedTime } = useSelector((state) => state);// Get timer state from Redux store
  const dispatch = useDispatch(); // Get the dispatch function to send actions

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        dispatch(incrementTimer()); // Dispatch action to increment timer every second
      }, 1000);
    }
    return () => {
      clearInterval(interval);// Clear interval when component unmounts or isRunning changes
    };
  }, [isRunning, dispatch]);

  return <b>{elapsedTime}</b>; // Display the elapsed time
};

