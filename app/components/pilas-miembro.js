import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames:  ['col-lg-2', 'miembro-contenedor'],
  href_github: function() {
    return "https://github.com/" + this.get('github');
  }.property('href_github')
});
