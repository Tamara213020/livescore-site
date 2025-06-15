// import Service from '@ember/service';
// import fetch from 'fetch';
// import { tracked } from '@glimmer/tracking';

// export default class LiveScoreService extends Service {
//   @tracked lastUpdated = null;

//   fallbackScores = [
//     {
//       team1: 'FC Barcelona',
//       score1: 2,
//       team2: 'Real Madrid',
//       score2: 1,
//       competition: 'La Liga',
//       status: 'FINISHED'
//     },
//     {
//       team1: 'Manchester United',
//       score1: 3,
//       team2: 'Chelsea FC',
//       score2: 2,
//       competition: 'Premier League',
//       status: 'FINISHED'
//     },
//     {
//       team1: 'Bayern Munich',
//       score1: 1,
//       team2: 'Borussia Dortmund',
//       score2: 1,
//       competition: 'Bundesliga',
//       status: 'FINISHED'
//     }
//   ];

//   async getScores() {
//     try {
//       const today = new Date().toISOString().split('T')[0];
//       const response = await fetch(`http://localhost:3000/proxy/https://api.football-data.org/v4/matches?dateFrom=${today}&dateTo=${today}`);

//       if (!response.ok) throw new Error('Failed to fetch scores');

//       const data = await response.json();
//       this.lastUpdated = new Date();
      
//       const scores = data.matches
//         ?.filter(match => match.score?.fullTime?.home !== null && 
//                          match.score?.fullTime?.away !== null)
//         ?.map(match => ({
//           team1: match.homeTeam?.name || 'Home Team',
//           score1: match.score.fullTime.home,
//           team2: match.awayTeam?.name || 'Away Team',
//           score2: match.score.fullTime.away,
//           competition: match.competition?.name || 'Unknown Competition',
//           status: match.status || 'UNKNOWN'
//         })) || [];

//       return scores.length ? scores : this.fallbackScores;
//     } catch (err) {
//       console.error('Error fetching scores, using fallback', err);
//       this.lastUpdated = new Date();
//       return this.fallbackScores;
//     }
//   }

//   startPolling(callback) {
//     // Initial load
//     this.getScores().then(callback);
    
//     // Set up polling
//     const interval = setInterval(async () => {
//       const scores = await this.getScores();
//       callback(scores);
//     }, 30000);

//     // Return cleanup function
//     return () => clearInterval(interval);
//   }
// }
