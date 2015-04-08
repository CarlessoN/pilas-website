import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    visualizar: function(url) {

      $.magnificPopup.open({
        items: {
          src: url,
        },
        type: 'image'
      });
    }

  }
});
