import { moduleFor, test } from 'ember-qunit';

moduleFor('route:collection/view', 'Unit | Route | collection/view', {
    needs: [
        'service:metrics',
        'ember-metrics@metrics-adapter:piwik',
    ],
});

test('it exists', function(assert) {
    let route = this.subject();
    assert.ok(route);
});
