import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
  @tracked currentTime = new Date().toLocaleString();
  @tracked filterDate = null;
  @tracked activeTab = 'all';

  @action
  updateTime() {
    this.currentTime = new Date().toLocaleString();
  }

  @action
  updateFilterDate(event) {
    this.filterDate = event.target.value || null;
    this.send('refreshModel');
  }

  @action
  clearFilter() {
    this.filterDate = null;
    this.send('refreshModel');
  }

  constructor() {
    super(...arguments);
    setInterval(this.updateTime, 1000);
  }
}