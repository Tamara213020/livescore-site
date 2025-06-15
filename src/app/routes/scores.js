
// export default class ScoresRoute extends Route {
//   async model() {
//     // const today = new Date().toISOString().split('T')[0];  // Get today's date in YYYY-MM-DD format
//     // const response = await fetch(`http://localhost:3000/proxy/https://api.football-data.org/v4/matches?dateFrom=${today}&dateTo=${today}`);
//     // const data = await response.json();
// return [}}
// }

import Route from '@ember/routing/route';

const HARDCODED_MATCHES = [
  {
    team1: 'Arsenal',
    score1: 3,
    team2: 'Tottenham',
    score2: 1,
    competition: 'Premier League',
    status: 'FINISHED'
  },
  {
    team1: 'Inter Milan',
    score1: 2,
    team2: 'AC Milan',
    score2: 0,
    competition: 'Serie A',
    status: 'FINISHED'
  },
  {
    team1: 'Barcelona',
    score1: 4,
    team2: 'Real Madrid',
    score2: 0,
    competition: 'La Liga',
    status: 'FINISHED'
  }
];

export default class ScoresRoute extends Route {
  model() {
    return HARDCODED_MATCHES;
  }
}