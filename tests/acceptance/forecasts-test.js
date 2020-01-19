import { module, test } from 'qunit';
import { click, find, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | super forecasts', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
    assert.dom('nav').exists();
    assert.dom('h1').hasText('Superforecasts');
    assert.dom('h2').hasText('Welcome to Super forecasts!');

    assert.dom('.jumbo a.button').hasText('About Us');
    await click('.jumbo a.button');

    assert.equal(currentURL(), '/about');
  });

  test('viewing the details of a forecast property', async function(assert) {
    await visit('/');
    assert.dom('.forecast').exists({ count: 3 });

    await click('.forecast:first-of-type a');
    assert.equal(currentURL(), '/forecasts/grand-old-mansion');
  });

  test('visiting /forecasts/grand-old-mansion', async function(assert) {
    await visit('/forecasts/grand-old-mansion');

    assert.equal(currentURL(), '/forecasts/grand-old-mansion');
    assert.dom('nav').exists();
    assert.dom('h1').containsText('Superforecasts');
    assert.dom('h2').containsText('Grand Old Mansion');
    assert.dom('.forecast.detailed').exists();
    assert.dom('.share.button').hasText('Share on Twitter');

    let button = find('.share.button');

    let tweetURL = new URL(button.href);
    assert.equal(tweetURL.host, 'twitter.com');

    assert.equal(
      tweetURL.searchParams.get('url'),
      `${window.location.origin}/forecasts/grand-old-mansion`
    );
  });

  test('visiting /about', async function(assert) {
    await visit('/about');

    assert.equal(currentURL(), '/about');
    assert.dom('nav').exists();
    assert.dom('h1').hasText('Superforecasts');
    assert.dom('h2').hasText('About Super forecasts');

    assert.dom('.jumbo a.button').hasText('Contact Us');
    await click('.jumbo a.button');

    assert.equal(currentURL(), '/getting-in-touch');
  });

  test('visiting /getting-in-touch', async function(assert) {
    await visit('/getting-in-touch');

    assert.equal(currentURL(), '/getting-in-touch');
    assert.dom('nav').exists();
    assert.dom('h1').hasText('Superforecasts');
    assert.dom('h2').hasText('Contact Us');

    assert.dom('a.button').hasText('About');
    await click('.jumbo a.button');

    assert.equal(currentURL(), '/about');
  });  
});
