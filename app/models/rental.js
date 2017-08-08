import DS from 'ember-data';

//model file - is a "blueprint" that lists the attributes each rental
//property should contain
export default DS.Model.extend({
   owner: DS.attr(),
   city: DS.attr(),
   type: DS.attr(),
   image: DS.attr(),
   bedrooms: DS.attr()
});

//DS - data store

//Firebase - is a cloud database maintained by Google that store informationin JSON format.

//To communicate Ember Data with Firebase - use EmberFire (add-on)

//Adapter connect our applications to their data store. 
