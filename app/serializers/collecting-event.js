import Ember from 'ember';
import DS from 'ember-data';

export default DS.JSONSerializer.extend(DS.EmbeddedRecordsMixin, {
    session: Ember.inject.service('session'),
    primaryKey: 'collectingEventID',
    attrs: {
        locality: {
            key: 'localityID',
            serialize: 'records'
        },
        givenName: 'text1',
        description: 'text2',
        agent: 'createdByAgentID',
        collectors: {
            key: 'collectorList',
            serialize: 'records'
        },
        attachments: {
            key: 'collectingeventattachmentList',
            serialize: 'records'
        }
    },
});
