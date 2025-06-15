// import Controller from '@ember/controller';
//
// export default class ScoresController extends Controller {
//   get scores() {
//     return this.model; // Access scores from the route's model
//   }
// }
//za startanje node proxy-server/proxy-server.js i ember serve
import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class ScoresController extends Controller {
  @service liveScore;

  scores = [];

  constructor() {
    super(...arguments);
    this.liveScore.startPolling((newScores) => {
      console.log("Updated scores:", newScores);  // Debugging line to check if scores are updated
      this.set('scores', newScores);
    });
  }
}
