import { module, test } from 'qunit';
import { setupTest } from 'livescore-site/tests/helpers';

module('Unit | Service | live-score', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:live-score');
    assert.ok(service);
  });
});
