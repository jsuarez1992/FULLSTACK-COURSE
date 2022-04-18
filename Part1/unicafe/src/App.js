import { useState } from 'react'

const Header = () => {
  return (
    <h1>Give Feedback</h1>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = (props) => {
  if (props.all === 0){
    return (
      <>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </>
    )  
  }

  return (
    <>
      <h1>statistics</h1>
      <StatisticLine text="good" value={props.good} />
      <StatisticLine text="neutral" value={props.neutral} />
      <StatisticLine text="bad" value={props.bad} />
      <StatisticLine text="all" value={props.all} />
      <StatisticLine text="average" value={props.average} />
      <StatisticLine text="positive" value={props.good / props.all + "%" } />
    </>
  )
}

const StatisticLine = (props) => {
  return (
    <>
    <p>{props.text} {props.value}</p>
    </>
  )
  }


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  let all = good + neutral +bad
  let average= (good*1 + neutral*0 + bad*-1)/all

  return (
    <div>
      <Header />
      <Button handleClick={() => setGood(good+1)} text="good"/>
      <Button handleClick={() => setNeutral(neutral+1)} text="neutral"/>
      <Button handleClick={() => setBad(bad+1)} text="bad"/>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} />
    </div>
  )
}

export default App