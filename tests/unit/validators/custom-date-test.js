import { moduleFor, test } from 'ember-qunit';

moduleFor('validator:custom-date', 'Unit | Validator | custom-date', {
  needs: ['validator:messages']
});

test('it works', function(assert) {
  var validator = this.subject();
  assert.ok(validator);
});
