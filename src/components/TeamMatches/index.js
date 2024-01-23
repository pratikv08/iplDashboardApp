// Write your code here
import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {
    originalList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getLatestMatchesList()
  }

  convertIntoCamelCase = data => ({
    umpires: data.umpires,
    result: data.result,
    manOfTheMatch: data.man_of_the_match,
    id: data.id,
    date: data.date,
    venue: data.venue,
    competingTeam: data.competing_team,
    competingTeamLogo: data.competing_team_logo,
    firstInnings: data.first_innings,
    secondInnings: data.second_innings,
    matchStatus: data.match_status,
  })

  getLatestMatchesList = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const fetchedData = await response.json()
    const updatedOriginalList = {
      teamBannerUrl: fetchedData.team_banner_url,
      latestMatchList: this.convertIntoCamelCase(
        fetchedData.latest_match_details,
      ),
      recentMatchesList: fetchedData.recent_matches.map(eachMatch =>
        this.convertIntoCamelCase(eachMatch),
      ),
    }

    this.setState({
      originalList: updatedOriginalList,
      isLoading: false,
    })
    return ''
  }

  getBackgroundClassName = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    if (id === 'CSK') {
      return 'csk'
    }
    if (id === 'MI') {
      return 'mi'
    }
    if (id === 'KKR') {
      return 'kkr'
    }
    if (id === 'RCB') {
      return 'rcb'
    }
    if (id === 'SH') {
      return 'sh'
    }
    if (id === 'RR') {
      return 'rr'
    }
    if (id === 'KXP') {
      return 'kxp'
    }
    if (id === 'DC') {
      return 'dc'
    }
    return ''
  }

  render() {
    const {originalList, isLoading} = this.state
    const {latestMatchList, recentMatchesList, teamBannerUrl} = originalList
    const bgClassName = `team-match-container ${this.getBackgroundClassName()}`
    return (
      <div className={bgClassName}>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div>
            <img
              src={teamBannerUrl}
              className="team-banner"
              alt="team banner"
            />
            <p className="latest-match-text">Latest Matches</p>
            <LatestMatch latestMatchList={latestMatchList} />
            <ul className="match-card-container">
              {recentMatchesList.map(eachRecentMatch => (
                <MatchCard
                  eachRecentMatch={eachRecentMatch}
                  key={eachRecentMatch.id}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
