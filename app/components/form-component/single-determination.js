import Ember from 'ember';

export default Ember.Component.extend({

    classNames: ['dwcm-single-determination'],

    /** Required determination model. */
    model: null,
    
    /** Inject services. */
    formConfiguration: Ember.inject.service('form-configuration'),
    configuration: Ember.computed.alias('formConfiguration.component.determination'),
    
    /** Display destroy modal dialog. */
    displayConfirmDialog: false,

    actions: {

        /** Set *taxon* for current model. */
        setTaxonomy (taxon) {
            this.model.set('taxon', taxon);
        },

        /** Call external `remove` method with current model. */
        remove () {
            this.get('remove')(this.model);
        },

        /** Set *agent* as determiner. */
        setDeterminer (agent) {
            this.model.set('determiner', agent);
        },
        
        /** Set date and precision based on *field*, *date* and *precision*. */
        setDateWithPrecision(field, date, precision) {
            this.set(`model.${field}`, date);
            this.set(`model.${field}Precision`, precision);
        },
        
        /** Toggle destroy dialog. */
        toggleDestroy() {
            this.toggleProperty('displayConfirmDialog');
        }
    }
});
