import DS from 'ember-data';

export default DS.Model.extend({
    collectionName: DS.attr('string'),
    code: DS.attr('string'),
    diciplinID: DS.attr('number'),
    timestampCreated: DS.attr('number'),
    collectionType: DS.attr('string'),
    description: DS.attr('string'),
    agent: DS.belongsTo('agent', {async: true}),
    institutionType: DS.belongsTo('institution', {async: true}),
    disciplineID: DS.belongsTo('discipline', {async: true}),
});