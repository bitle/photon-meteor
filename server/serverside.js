var demo = new Meteor.DemoLoadBalancing();
demo.start();

demo.onStateChange = function(state) {
	if (state == Meteor.photon.LoadBalancing.LoadBalancingClient.State.JoinedLobby) {
		this.logger.info("Damir2: joined lobby. Connecting to room");
		this.createRoom("room3");
	}
	this.logger.info(state);
	this.logger.info("Damir2: onStateChange");
	//this.joinRoom("room1");
};

demo.onEvent = function(code, content, actorNr) {
	switch(code) {
		case 1:
			this.logger.info("!!!!!!!!!!!!!! YO !!!!");
			break;
		default:
	}
	this.logger.debug("onEvent", code, "content:", content, "actor:", actorNr);
};