import { useEffect } from "react";

function Timer({ dispatch, secondsRemaining }) {
  const mins = Math.ceil(secondsRemaining / 60);
  const secs = Math.ceil(secondsRemaining % 60);
  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);

      return () => clearInterval(id); //cleaner function
    },
    [dispatch]
  );
  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins} :{secs < 10 && "0"}
      {secs}
    </div>
  );
}

export default Timer;
