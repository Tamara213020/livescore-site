import { setupTest } from 'livescore-site/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Model | score', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('score', {});
    assert.ok(model, 'model exists');
  });
});
