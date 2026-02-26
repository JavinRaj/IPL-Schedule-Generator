import Table from 'react-bootstrap/Table';

function MatchTable(props) {

  const venues = {
    "csk": "Chepauk",
    "mi": "Wankhede",
    "dc": "Arun Jaitley Stadium",
    "rcb": "M Chinnaswamy Stadium",
    "srh": "Rajiv Gandhi International Cricket Stadium",
    "pbks": "Punjab Cricket Association IS Bindra Stadium",
    "rr": "Sawai Mansingh Stadium",
    "kkr": "Eden Gardens"
  }

  const dates = props.dates;
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Match No.</th>
          <th>Date</th>
          <th>Match</th>
          <th>Venue</th>
        </tr>
      </thead>
      <tbody>
        {props.Schedule.map((match, index)=>(
        <tr>
          <td>{index+1}</td>
          <td>{dates[index]}</td>
          <td>{match}</td>
          
          <td>{venues[match.split(" vs ")[0]] || venues[match.split(" vs ")[1]]}</td>
        </tr>
        ))}
       
      </tbody>
    </Table>
  );
}

export default MatchTable;