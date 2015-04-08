export function initialize(container, application) {
  application.inject('route', 'videosService', 'service:videos');
}

export default {
  name: 'videos-service',
  initialize: initialize
};
