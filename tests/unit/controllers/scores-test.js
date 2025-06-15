import { module, test } from 'qunit';
import { setupTest } from 'livescore-site/tests/helpers';

module('Unit | Controller | scores', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:scores');
    assert.ok(controller);
  });
});
