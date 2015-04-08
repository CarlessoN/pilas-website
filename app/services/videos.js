import Ember from 'ember';

var videos = [
  {id: 7, titulo: 'Pilas en tv pública', tipo: 'youtube', url: 'http://www.youtube.com/embed/4KpLctdBrf8'},
  {id: 8, titulo: 'Pilas en WISIT 2014 (Argentina)', tipo: 'youtube', url: 'http://www.youtube.com/embed/l2nh3YYW29k'},
  {id: 1, titulo: "Pilas en PyCon España 2013 (Madrid, España)", tipo: 'youtube', url: 'http://www.youtube.com/embed/bjlWZjTZLmQ'},
  {id: 2, titulo: "Pilas en PyCon Argentina 2013 (Rosario, Argentina)", tipo: 'youtube', url: 'http://www.youtube.com/embed/tXA2BgzrvzA'},
  {id: 3, titulo: "Pilas en PyCon Argentina 2012", tipo: 'youtube', url: 'http://www.youtube.com/embed/sQhxjLoJlZs'},
  {id: 4, titulo: "Presentación de pilas en betabeers Bs. As. Marzo 2012", tipo: 'youtube', url: 'http://www.youtube.com/embed/-Z6Qi_B9QSA'},
  {id: 5, titulo: "Haciendo videojuegos con pilas (pyday 2011)", tipo: 'vimeo', url: 'http://player.vimeo.com/video/23735704?title=0&amp;byline=0&amp;portrait=0'},
  {id: 6, titulo: "Presentación Conurbania 2010", tipo: 'vimeo', url: 'http://player.vimeo.com/video/17273297'},
];

export default Ember.Object.extend({
  getVideobyIndex: function(id) {
    var record = null;

    videos.forEach(function(e) {
      if (e.id === id) {
        record = e;
      }
    });

    return record;
  },
  getVideos: function() {
    return videos;
  }
});
