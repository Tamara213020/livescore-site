import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ScoresController extends Controller {
  
  // constructor() {
  //   super(...arguments);
  //   this.liveScore.startPolling((newScores) => {
  //     console.log("Updated scores:", newScores);  // Debugging line to check if scores are updated
  //     this.set('scores', newScores);
  //   });
  // }
}
