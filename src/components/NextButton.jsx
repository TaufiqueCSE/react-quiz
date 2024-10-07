const NextButton = ({ dispatch, answer, index, numQuestions }) => {
  if (answer === null) return null;

  if (index < numQuestions - 1) {
    return (
      <div>
        <button
          className="btn btn-uis"
          onClick={() => dispatch({ type: "nextQuestion" })}
        >
          Next
        </button>
      </div>
    );
  }

  if (index === numQuestions - 1) {
    return (
      <div>
        <button
          className="btn btn-uis"
          onClick={() => dispatch({ type: "finished" })}
        >
          Finish
        </button>
      </div>
    );
  }

  return null; // Fallback in case none of the conditions match
};

export default NextButton;
