function FinishedScreen({ points, maxPossiblePoints,highscore,dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;

  return (
    <>
      <p className="result">
        your scored <strong>{points}</strong> out of {maxPossiblePoints} (
        {Math.ceil(percentage)}%)
      </p>
      <p className="highscore">{`Highscore: ${highscore} points`}</p>
      <button className="btn btn-uis" onClick={()=>dispatch({type:'reset'})}>Restart quiz</button>
    </>
  );
}

export default FinishedScreen;
