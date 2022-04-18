import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState({buenClick:0})
  const [neutral, setNeutral] = useState({newtralClick:0})
  const [bad, setBad] = useState({maloClick:0})

  let suma = good.buenClick + neutral.newtralClick+bad.maloClick
  let promedio= (good.buenClick*1 + neutral.newtralClick*0 +bad.maloClick*-1)/suma

  const goodClick = () => {
    const newClicks = { 
      buenClick: good.buenClick + 1, 
    }
    setGood(newClicks)
  }
  const neutralClick = () => {
    const newClicks = { 
      newtralClick: neutral.newtralClick + 1, 
    }
    setNeutral(newClicks)
  }
  const badClick = () => {
    const newClicks = { 
      maloClick: bad.maloClick + 1, 
    }
    setBad(newClicks)
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={goodClick}>Good</button>
      <button onClick={neutralClick}>Neutral</button>
      <button onClick={badClick}>Bad</button>
      <h1>Statistics</h1>
      <p>good {good.buenClick}</p>
      <p>neutral {neutral.newtralClick}</p>
      <p>bad {bad.maloClick}</p>
      <p>all {suma}</p>
      <p>average {promedio}</p>
      <p>positive {good.buenClick/suma}%</p>
    </div>
  )
}

export default App