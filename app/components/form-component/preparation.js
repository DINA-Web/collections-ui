import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({

    classNames: ['dwcm-preparation'],

    /** Inject services. */
    store: Ember.inject.service('store'),
    configuration: Ember.inject.service('form-configuration'),
    
    partialType: Ember.computed('configuration.type', function () {
        return `partial/preparation/${this.get('configuration.type')}`;
    }),
    
    init() {
        this._super(...arguments);
        Ember.run.schedule('actions', this, function() {
            this.send('addPreparation');
        });
    },
    
    /** Default options for sex field. */
    sexOptions: [{
            value: 'unknown',
            displayName: 'definitions.unknown'
        }, {
            value: 'female',
            displayName: 'definitions.female'
        }, {
            value: 'male',
            displayName: 'definitions.male'
    }],

    actions: {

        /** Add new preparation. */
        addPreparation () {
            let preparation = this.get('store').createRecord('preparation', {
                timestampCreated: moment().unix(),
                countAmt: 0
            });
            this.model.get('preparations').pushObject(preparation);
        },

        /** Remove single *preparation*. */
        removePreparation (preparation) {
            this.model.get('preparations').removeObject(preparation);
        }
    }
});
