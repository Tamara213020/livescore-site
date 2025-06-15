// import Service from '@ember/service';
// import fetch from 'fetch';
//
// export default class LiveScoreService extends Service {
//   async getScores() {
//     try {
//       const dateFrom = '2025-01-30'; // Почетен датум (можеш да го прилагодиш)
//       const dateTo = '2025-02-09';   // Краен датум (во рамките на 10 дена)
//
//       const response = await fetch(`http://localhost:3000/proxy/https://api.football-data.org/v4/matches?dateFrom=${dateFrom}&dateTo=${dateTo}`);
//
//       if (!response.ok) {
//         throw new Error('Failed to fetch scores');
//       }
//
//       const data = await response.json();
//       console.log('API Response:', data);
//
//       if (data.matches && data.matches.length > 0) {
//         const scores = data.matches.map(match => ({
//           team1: match.homeTeam.name,
//           score1: match.score.fullTime.home,
//           team2: match.awayTeam.name,
//           score2: match.score.fullTime.away
//         }));
//
//         console.log('Formatted Scores:', scores);
//         return scores;
//       } else {
//         console.log('No matches found for the specified date range');
//         return [];
//       }
//     } catch (error) {
//       console.error('Error fetching scores:', error);
//       return [];
//     }
//   }
// }
import Service from '@ember/service';
import fetch from 'fetch';

export default class LiveScoreService extends Service {
  async getScores() {
    try {
      const today = new Date().toISOString().split('T')[0];  // Get today's date in YYYY-MM-DD format
      const response = await fetch(`http://localhost:3000/proxy/https://api.football-data.org/v4/matches?dateFrom=${today}&dateTo=${today}`);

      if (!response.ok) {
        throw new Error('Failed to fetch scores');
      }

      const data = await response.json();
      console.log('API Response:', data);

      if (data.matches && data.matches.length > 0) {
        // Filter out matches with null scores
        const scores = data.matches
          .filter(match => match.score.fullTime.home !== null && match.score.fullTime.away !== null)
          .map(match => ({
            team1: match.homeTeam.name,
            score1: match.score.fullTime.home,
            team2: match.awayTeam.name,
            score2: match.score.fullTime.away
          }));

        console.log('Formatted Scores:', scores);
        return scores;
      } else {
        console.log('No matches found for the specified date range');
        return [];
      }
    } catch (error) {
      console.error('Error fetching scores:', error);
      return [];
    }
  }

  startPolling(callback) {
    setInterval(async () => {
      const scores = await this.getScores();
      callback(scores);
    }, 30000);  // Update every 30 seconds
  }
}
