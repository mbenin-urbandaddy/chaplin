
define(['chaplin/lib/create_mediator', 'chaplin/lib/support'], function(createMediator, support) {
  'use strict';
  var mediator;
  mediator = createMediator({
    createUserProperty: true
  });
  if (support.propertyDescriptors && Object.seal) Object.seal(mediator);
  return mediator;
});
