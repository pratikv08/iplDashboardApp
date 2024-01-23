// Write your code here
import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {eachTeam} = props
  const {name, teamImageUrl, id} = eachTeam
  return (
    <Link to={`/teams-matches/${id}`} className="team-link">
      <li className="each-team">
        <img className="team-img" src={teamImageUrl} alt={name} />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
