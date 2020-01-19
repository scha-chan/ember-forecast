import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | Forecasts', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
    assert.dom('h2').hasText('Welcome to your forecast page!');
  });  

  // test('visiting /forecasts/200-1485914400', async function(assert) {
  //   await visit('/forecasts/200-1485914400');
  //   assert.equal(currentURL(), '/forecasts/200-1485914400');
  //   assert.dom('h2').containsText('Weather in Tawarano, JP');   
  // });
});
