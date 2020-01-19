import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | forecast/detailed', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.setProperties({
      forecast: {
        "city":{"geoname_id":1907296,"name":"Tawarano","lat":35.0164,"lon":139.0077,"country":"JP","iso2":"JP","type":"","population":0},"cnt":10,
        "list":{"dt":1485741600,"temp":{"day":285.51,"min":285.51,"max":285.51,"night":285.51,"eve":285.51,"morn":285.51},"pressure":1013.75,"humidity":100,"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01n"}],"speed":5.52,"deg":311,"clouds":0}
      }
    });
  }); 

  test('it renders detailed information about a forecast property', async function(assert) {
    await render(hbs`<Forecast::Detailed @forecast={{this.forecast}} />`);

    assert.dom('article').hasClass('forecast-details');
    assert.dom('article h2').containsText('Weather in Tawarano, JP');
  });
});
