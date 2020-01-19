import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | format-date', function(hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('it renders', async function(assert) {
    this.set('inputDate', 1485741600);
    this.set('inputFormat', 'dddd');

    await render(hbs`{{format-date inputValue inputFormat}}`);

    assert.equal(this.element.textContent.trim(), 'Monday');
  });
});
