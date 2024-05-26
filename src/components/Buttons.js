
import { useDispatch, useSelector } from "react-redux";
import { startTimer, pauseTimer, resetTimer } from "../redux/actions/timerActions";

export const Buttons = () => {
  const { isRunning } = useSelector((state) => state);// Get the timer state from Redux store
  const dispatch = useDispatch();//useDispatch gets the dispatch function to dispatch actions to the store

  return (
    <div className="actions">
      {/* The buttons dispatch corresponding actions to start, pause, and reset the timer.
       The start button is disabled when the timer is running, 
       and the pause button is disabled when the timer is not running. */}
      <button disabled={isRunning} onClick={() => dispatch(startTimer())}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/7709/7709039.png"
          alt="start"
        />
      </button>
      <button disabled={!isRunning} onClick={() => dispatch(pauseTimer())}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/2404/2404385.png"
          alt="pause"
        />
      </button>
      <button onClick={() => dispatch(resetTimer())}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/9923/9923627.png"
          alt="reset"
        />
      </button>
    </div>
  );
};
