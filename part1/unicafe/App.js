
import { useState } from "react"
const Header = (props) => <h1>{props.name}</h1>

const Statistic = ({text, value}) => {
  if (text == "positive") {
    return (
      <tr><td>{text} {value} %</td></tr>
    )
  }
  //above is for the positive percentage, below is for the rest
  return (
    <tr><td>{text} {value}</td></tr>
  )
}

const Statistics = ({clicks}) => {
    const total = clicks.good + clicks.neutral + clicks.bad
    const average = (clicks.good * 1 + clicks.bad * -1) / total
    const positive = clicks.good * (100/total)

    if (total === 0) {
      return (
        <div>
          No feedback given
        </div>
      )
    }

    return (
      <div>
        <table>
          <tbody>
            <Statistic text="good" value={clicks.good} />
            <Statistic text="neutral" value={clicks.neutral} />
            <Statistic text="bad" value={clicks.bad} />
            <Statistic text="all" value={total} />
            <Statistic text="average" value={average} />
            <Statistic text="positive" value={positive} />
          </tbody>
        </table>
      </div>
    )
}


const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = () => {
  // save clicks of each button to own state
  const [clicks, setClicks] = useState({
    good: 0, neutral: 0, bad: 0
  })

  const Good = () =>
    setClicks({...clicks, good: clicks.good + 1})

  const Neutral = () =>
    setClicks({...clicks, neutral: clicks.neutral + 1})

  const Bad = () =>
    setClicks({...clicks, bad: clicks.bad + 1})


  return (
    <div>
      <Header name = "give feedback" />
      <Button onClick = {Good} text = "good" />
      <Button onClick = {Neutral} text = "neutral" />
      <Button onClick = {Bad} text = "bad" />
      <Header name = "statistics" />
      <Statistics clicks = {clicks} />
    </div>
  )
}
export default App