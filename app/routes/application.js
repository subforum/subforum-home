import Ember from 'ember';

export default Ember.Route.extend({

	activate: function() {
		let self = this;

		document.onkeydown = checkKey;

		function checkKey(e) {

		    e = e || window.event;

		    if (e.keyCode === '37') {
		       self.transitionTo('distraction');
		    }
		    else if (e.keyCode === '39') {
		       self.transitionTo('press');
		    }

		}

		/*
	    Ember.run.later((function() {
			  function displaywheel(e){
			    var evt=window.event || e //equalize event object
			    var delta=evt.detail? evt.detail*(-120) : evt.wheelDelta //check for detail first so Opera uses that instead of wheelDelta
			    if (delta < 0) {
			    	self.transitionTo('distraction');
			    } 
			    if (delta > 0) {
			    	self.transitionTo('press');
			    }
			  }
			 
				var mousewheelevt=(/Firefox/i.test(navigator.userAgent))? "DOMMouseScroll" : "mousewheel" //FF doesn't recognize mousewheel as of FF3.x
				

				if (document.attachEvent) //if IE (and Opera depending on user setting)
				    document.attachEvent("on"+mousewheelevt, displaywheel)
				else if (document.addEventListener) //WC3 browsers
				    document.addEventListener(mousewheelevt, displaywheel, false)
			}), 1000);
			*/
	}
});
