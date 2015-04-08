import Ember from 'ember';

export default Ember.Controller.extend({

  photosEjemplos: function() {
    return window.photos_ejemplos.feed.entry;
  }.property(),
  photosEquipos: function() {
    return window.photos_equipos.feed.entry;
  }.property(),
  photosEventos: function() {
    return window.photos_eventos.feed.entry;
  }.property(),
  photosSistemas: function() {
    return window.photos_sistemas.feed.entry;
  }.property(),

});
