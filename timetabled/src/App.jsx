import './App.css';
import Calendar from './components/Calendar';
const App = () => {

  return (
    <div className="App">
      <h1>Itinerary for 7 Days in Japan 🌃</h1>
      <h2>One week of amazing food, beautiful cherry blossoms and historic temples (not to mention introvert friendly restaurants)</h2>
      <Calendar />
    </div>
  )
}

export default App