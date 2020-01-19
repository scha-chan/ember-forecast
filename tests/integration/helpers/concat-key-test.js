import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | concat-key', function(hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('it renders', async function(assert) {
    this.set('inputValue1', 'Super');
    this.set('inputValue2', 'Forecast');

    await render(hbs`{{concat-key inputValue1 inputValue2}}`);

    assert.equal(this.element.textContent.trim(), 'Super-Forecast');
  });
});
