// Write your code here
import './index.css'

const MatchCard = props => {
  const {eachRecentMatch} = props
  const {
    result,
    competingTeam,
    competingTeamLogo,
    matchStatus,
  } = eachRecentMatch
  return (
    <div className="recent-match-container">
      <img
        className="recent-img"
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <h1 className="recent-team">{competingTeam}</h1>
      <p className="recent-match-result">{result}</p>
      <p
        className={`${
          matchStatus === `Won` ? `won` : `lost`
        } recent-match-status`}
      >
        {matchStatus}
      </p>
    </div>
  )
}

export default MatchCard
