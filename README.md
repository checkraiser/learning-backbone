learning-backbone
=================

Perform the following steps to handle object events:

1. Define a new object
    object1 = {};
    
2. Mix Backbone.Events to your object
    _.extend(object1, Backbone.Events);

3. Define a callback function:
    var hello = function(msg){
      alert('Hello ' + msg);
    }

4. Bind the callback and trigger event:
    object1.on('handshake', hello);
    
    object1.trigger('handshake', 'world');
