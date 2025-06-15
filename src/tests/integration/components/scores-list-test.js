import { module, test } from 'qunit';
import { setupRenderingTest } from 'livescore-site/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | scores-list', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<ScoresList />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <ScoresList>
        template block text
      </ScoresList>
    `);

    assert.dom().hasText('template block text');
  });
});
