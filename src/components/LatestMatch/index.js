// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchList} = props
  const {
    umpires,
    result,
    date,
    venue,
    manOfTheMatch,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatchList
  return (
    <div className="latest-match-container">
      <div className="first-section">
        <div>
          <h1 className="latest-team-heading">{competingTeam}</h1>
          <p className="latest-date">{date}</p>
          <p className="venue">{venue}</p>
          <p className="venue">{result}</p>
        </div>
        <img
          className="latest-team-img"
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
        />
      </div>
      <div className="last-section">
        <p className="venue">First Innings</p>
        <p className="venue">{firstInnings}</p>
        <p className="venue">Second Innings</p>
        <p className="venue">{secondInnings}</p>
        <p className="venue">Man Of The Match</p>
        <p className="venue">{manOfTheMatch}</p>
        <p className="venue">Umpires</p>
        <p className="venue">{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
