import Route from '@ember/routing/route';

const generateMatches = () => {
  const today = new Date();
  const matches = [];
  
  // Generate live matches (4 examples)
  for (let i = 0; i < 4; i++) {
    matches.push({
      id: `live-${i}`,
      status: 'IN_PLAY',
      homeTeam: { name: ['Arsenal', 'Liverpool', 'Man City', 'Chelsea'][i] },
      awayTeam: { name: ['Tottenham', 'Everton', 'Man Utd', 'Leicester'][i] },
      score: { fullTime: { homeTeam: 1 + i, awayTeam: i } },
      competition: { name: 'Premier League' },
      startTime: new Date(today.getTime() - (30 * i * 60 * 1000)),
      viewers: Math.floor(Math.random() * 1000000) + 50000
    });
  }

  // Generate finished matches (10 examples)
  for (let i = 0; i < 10; i++) {
    const matchDate = new Date(today);
    matchDate.setDate(matchDate.getDate() - Math.floor(i/3));
    
    matches.push({
      id: `finished-${i}`,
      status: 'FINISHED',
      homeTeam: { name: ['Barcelona', 'PSG', 'Bayern', 'Juventus', 'Dortmund'][i % 5] },
      awayTeam: { name: ['Real Madrid', 'Lyon', 'Leipzig', 'Milan', 'Schalke'][i % 5] },
      score: { fullTime: { homeTeam: i % 4, awayTeam: (i + 1) % 3 } },
      competition: { name: ['La Liga', 'Ligue 1', 'Bundesliga', 'Serie A'][i % 4] },
      startTime: new Date(matchDate.setHours(12 + (i % 3) * 3))
    });
  }

  // Generate scheduled matches (10 examples)
  for (let i = 0; i < 10; i++) {
    const matchDate = new Date(today);
    matchDate.setDate(matchDate.getDate() + 1 + Math.floor(i/3));
    
    matches.push({
      id: `scheduled-${i}`,
      status: 'SCHEDULED',
      homeTeam: { name: ['Atletico', 'Lille', 'Leipzig', 'Inter'][i % 4] },
      awayTeam: { name: ['Sevilla', 'Monaco', 'Wolfsburg', 'Napoli'][i % 4] },
      competition: { name: ['La Liga', 'Ligue 1', 'Bundesliga', 'Serie A'][i % 4] },
      startTime: new Date(matchDate.setHours(14 + (i % 3) * 2))
    });
  }

  return matches;
};

export default class IndexRoute extends Route {
  queryParams = {
    tab: { refreshModel: true },
    date: { refreshModel: true }
  };

  model(params) {
    const allMatches = generateMatches();
    const filterDate = params.date;

    let matches = allMatches.filter(match => {
      const matchDate = match.startTime.toISOString().split('T')[0];
      const matchesSelectedDate = filterDate ? matchDate === filterDate : true;
      
      switch(params.tab) {
        case 'live': return match.status === 'IN_PLAY' && matchesSelectedDate;
        case 'finished': return match.status === 'FINISHED' && matchesSelectedDate;
        case 'scheduled': return match.status === 'SCHEDULED' && matchesSelectedDate;
        default: return matchesSelectedDate; // 'all' tab
      }
    });

    // Sort by time when filtered
    if (filterDate) {
      matches = matches.sort((a, b) => a.startTime - b.startTime);
    }

    return {
      tab: params.tab || 'all',
      date: filterDate,
      matches: matches
    };
  }
}