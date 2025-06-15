import Model, { attr } from '@ember-data/model';

export default class ScoreModel extends Model {
  @attr('string') team1;
  @attr('string') team2;
  @attr('number') score1;
  @attr('number') score2;
}
