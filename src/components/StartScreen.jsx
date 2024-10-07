const StartScreen = ({numQuestions,dispatch}) => {
  return (
    <div className="">
        <h2>Welcome to the React Quiz</h2>
        <h3>{numQuestions} question to test react knwoledge</h3>
        <button className="btn btn-ui" onClick={()=>dispatch({type:'start'})}>Let&apos;s start</button>
    </div>
  )
}

export default StartScreen