import Component from '@glimmer/component';

export default class ScoresListComponent extends Component {
  get matches() {
    return this.args.matches;
  }
}
