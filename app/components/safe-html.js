import Ember from 'ember';

export default Ember.Component.extend({
  contenido: function() {
    return new Ember.Handlebars.SafeString(this.get('value'));
  }.property()
});
