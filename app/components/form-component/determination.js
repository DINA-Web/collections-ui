/* global moment */

import Ember from 'ember';

export default Ember.Component.extend({

    classNames: ['dwcm-taxonomy'],

    /** Inject services. */
    store: Ember.inject.service('store'),

    /** Initialise component. */
    init () {
        let result = this._super(...arguments);

        // Add a single determination as start value.
        Ember.run.schedule('actions', this, function () {
            this.send('addDetermination');  
        });

        return result;
    },

    actions: {

        /** Add new determination. */
        addDetermination () {
            let determination = this.get('store').createRecord('determination', {
                timestampCreated: moment().unix()
            });
            this.model.get('determinations').pushObject(determination);
        },

        /** Remove single *determination*. */
        removeDetermination (determination) {
            this.model.get('determinations').removeObject(determination);
        }
    }
});
