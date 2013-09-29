object1 = {};
_.extend(object1, Backbone.Events);

var hello = function(msg){
	$("#t1").html("Hello " + msg);
}

object1.on("handshake", hello);

object1.trigger("handshake", "world");