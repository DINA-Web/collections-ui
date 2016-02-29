/* global moment */

import Ember from 'ember';

import { translationMacro as t } from 'ember-i18n';

export default Ember.Controller.extend({

    i18n: Ember.inject.service(),

    _displayErrors: false,

    validationError: Ember.computed('model.validations.messages', '_displayErrors', function () {
        return this.get('_displayErrors') && this.model.get('validations.messages.length');
    }),

    entityType: t('definitions.zoological'),

    groups: [
        'dwcm-basic-data',
        'dwcm-taxonomy',
        'dwcm-preparation',
        'dwcm-collecting-event'
    ],

    transitionToCollectionObject (collectionObject) {
        this.transitionToRoute(
            'collectionobject.view', collectionObject
        );
    },

    actions: {
        navigationClick(fieldGroupId) {
            Ember.$('html, body').animate({
                scrollTop: Ember.$('#field-group-' + fieldGroupId).offset().top - 10
            }, 300);
        },
        submitForm () {
            let controller = this;

            this.model.validate({}, true).then(({model, validations}) => {
                controller.set('_displayErrors', !validations.get('isValid'));

                if (validations.get('isValid')) {
                    this.model.set('timestampCreated', moment().unix());

                    this.store.findRecord('agent', 3).then((agent) => {
                        this.model.set('agent', agent);
                        this.model.save().then((record) => {
                            controller.transitionToCollectionObject(record);
                        });
                    });
                }
            });
        }
    }
});
