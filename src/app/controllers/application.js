import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ApplicationController extends Controller {
  @service router;

  @tracked currentTime = new Date().toLocaleString();
  @tracked filterDate = null;
  @tracked activeTab = 'all';

  constructor() {
    super(...arguments);
    setInterval(this.updateTime, 1000);

    this.router.on('routeDidChange', (transition) => {
      const toTab = transition.to.queryParams.tab;
      const fromTab = transition.from?.queryParams?.tab;

      if (toTab !== fromTab) {
        this.filterDate = null;
      }
    });
  }

  @action
  updateTime() {
    this.currentTime = new Date().toLocaleString();
  }

  @action
  updateFilterDate(event) {
    this.filterDate = event.target.value || null;

    this.router.transitionTo({
      queryParams: {
        date: this.filterDate
      }
    });
  }

  @action
  clearFilter() {
    this.filterDate = null;

    this.router.transitionTo({
      queryParams: {
        date: null
      }
    });
  }
}
