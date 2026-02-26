import { useState } from 'react'
import './App.css'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';
import MatchTable from '../components/table';
import Schedule from '../components/schedule';

function App() {
  // teams ="csk","mi","dc","rcb","srh","pbks","rr","kkr"
  const [teams, setTeams] = useState([])
  const [inputValue, setInputValue] = useState('')

  const addTeam = () => {
    if (inputValue.trim()) {
      setTeams([...teams, inputValue.trim()])
      setInputValue('')
      setSchedulePrepared(false)
    }
  }

  const removeTeam = (teamToRemove) => {
    setTeams(teams.filter(team => team !== teamToRemove))
    setSchedulePrepared(false)
  }

  function keyClicked(e) {
    if (e.key === 'Enter') {
      addTeam();
    }
  }
  const [schedulePrepared, setSchedulePrepared] = useState(false);


  const prepareSchedule = () => {
     if(teams.length < 4) {
      alert('At least 4 teams are required to prepare the schedule');
      setSchedulePrepared(false);
     }
     else if(teams.length % 2 !== 0) {
      alert('Number of teams should be even to prepare the schedule, so add or remove a team');
      setSchedulePrepared(false);
     }
     else {
      // Logic to prepare the schedule goes here
      alert('Schedule prepared successfully! \n click ok to view the schedule');
      setSchedulePrepared(true);
      
     }
  }


  return (

    <div className = 'searchBar'>
      <div><h1 className='title'>IPL Schedule Generator</h1></div>
      <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg">Add teams</InputGroup.Text>
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          placeholder='Enter team name'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={keyClicked}
        />
        <Button variant="primary" onClick={addTeam}>Submit</Button>
      </InputGroup>
      {
        teams.map(team=>(
          <>
            <h4 className='capsule'>{team}
              <CloseButton  className='remove' onClick={() => removeTeam(team)}/>
            </h4>
          </>
        ))
      }
      <br />
      <button onClick={()=>prepareSchedule()}>Prepare Schedule</button>
      <br />
      
      {schedulePrepared === true && <Schedule teams={teams}/>}
      {schedulePrepared === true && <Button variant="primary" onClick={()=>window.print()}>Download</Button>}
    
      
    </div>
  )
}

export default App
