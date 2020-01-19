import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | convert-celsius', function(hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('it renders', async function(assert) {
    this.set('inputValue', '283.15');

    await render(hbs`{{convert-celsius inputValue}}`);

    assert.equal(this.element.textContent.trim(), '10');
  });
});
