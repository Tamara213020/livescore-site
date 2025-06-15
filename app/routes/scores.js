// // app/routes/scores.js
// import Route from '@ember/routing/route';
//
// export default class ScoresRoute extends Route {
//   async model() {
//     const response = await fetch('http://localhost:3000/proxy/https://api.football-data.org/v4/matches?dateFrom=2025-01-30&dateTo=2025-02-09');
//     const data = await response.json();
//     return data.matches;  // Returning the 'matches' array directly.
//   }
// }
import Route from '@ember/routing/route';

export default class ScoresRoute extends Route {
  async model() {
    const today = new Date().toISOString().split('T')[0];  // Get today's date in YYYY-MM-DD format
    const response = await fetch(`http://localhost:3000/proxy/https://api.football-data.org/v4/matches?dateFrom=${today}&dateTo=${today}`);
    const data = await response.json();
    return data.matches;
  }
}
