import Ember from 'ember';

export default Ember.Component.extend({
    _zoom: Ember.computed('zoom', function () {
        return this.get('zoom') || 10;
    }),

    _center: Ember.computed('center', function () {
        const center = this.get('center');
        return (
            Ember.isArray(center) &&
            !Ember.isBlank(center) &&
            !Ember.isBlank(center[0]) &&
            center || [59.3687594, 18.0533395]
        );
    }),

    actions: {
        updateBounds (event) {
            const map = event.target;
            const bounds = map.getBounds();

            if (this.attrs.boundsUpdate) {
                this.attrs.boundsUpdate([
                    bounds.getNorth(), bounds.getEast(),
                    bounds.getSouth(), bounds.getWest()
                ])
            }
        }
    }
});