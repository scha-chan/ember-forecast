import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | forecast', function(hooks) {
  setupTest(hooks);

  test('it has the right type', function(assert) {
    let store = this.owner.lookup('service:store');
    let forecast = store.createRecord('forecast', {
      id: 'grand-old-mansion',
      title: 'Grand Old Mansion',
      owner: 'Veruca Salt',
      city: 'San Francisco',
      location: {
        lat: 37.7749,
        lng: -122.4194,
      },
      category: 'Estate',
      bedrooms: 15,
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
      description: 'This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.',
    });

    assert.equal(forecast.type, 'Standalone');

    forecast.category = 'Condo';
    assert.equal(forecast.type, 'Community');

    forecast.category = 'Townhouse';
    assert.equal(forecast.type, 'Community');

    forecast.category = 'Apartment';
    assert.equal(forecast.type, 'Community');

    forecast.category = 'Estate';
    assert.equal(forecast.type, 'Standalone');
  });
});
