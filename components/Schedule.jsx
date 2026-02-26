
import MatchTable from "./table";

function Schedule(props) {

    var matches = []
    var datesArray=[]
    var date = new Date(2026, 3, 12) // Starting date: April 14, 2026


const round=(lst)=>{
    var secondTeam=String(lst.splice(1,1))
    lst.push(secondTeam)
    return lst    
}

const match=(lst)=>{
    var teams = lst.length
    var j = teams-1
    for(let i = 0;i<teams;i++){
        if(j>i){
            matches.push(`${lst[i]} vs ${lst[j]}`)
            datesArray.push(date.toDateString())
            date.setDate(date.getDate() + 1) // Increment the date by 1 day for the next match
            j--;
        }
    }
}

var lst = props.teams
console.log(lst)



for(let r = 0;r<lst.length-1;r++){
    match(lst)
    round(lst)
}

  return (
    
    <MatchTable Schedule={matches} dates={datesArray}/>
  );
}

export default Schedule;