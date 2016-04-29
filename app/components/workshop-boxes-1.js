import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'canvas',
  width: 100,
  height: 100,
  attributeBindings: ['width','height'],
  click: function() {
    let self = this;
    if (event.pageX > (self.get('width')/2)+80 && event.pageX < (self.get('width')/2)+180) {
      if (event.pageY > 440 && event.pageY < 550) {
        window.location.href = 'https://www.eventbrite.com/e/redesign-your-workday-tickets-24936204860';
      }
    }
  },
  didInsertElement: function() {
    let self = this;
    this.set('ctx', this.get('element').getContext('2d'));
    
    
    Ember.$(window).on('resize', function() {
      //this.respondCanvas()
      self.respondCanvas();
      Ember.run.later((function() {
        self.draw();
      }), 250);
    });

    //Initial call
    Ember.$(document).ready(function() {
      self.respondCanvas();

      Ember.run.later((function() {
        self.draw();
      }), 250);
         
    });

    Ember.$(document).on( "mousemove", function( event ) {
      if (event.pageX > (self.get('width')/2)+80 && event.pageX < (self.get('width')/2)+180) {
        if (event.pageY > 440 && event.pageY < 550) {
          Ember.$('html body').css('cursor','pointer');
        } else {
          Ember.$('html body').css('cursor','auto');
        }
      } else {
        Ember.$('html body').css('cursor','auto');
      }
    });
    
  },
  respondCanvas: function() {
    this.set('width', Ember.$('#main').width() );
    this.set('height', Ember.$('#main').height() );

    this.set('ctx', this.get('element').getContext('2d'));

    
  },
  draw: function() {
    let ctx = this.get('ctx');

    let line1x = (this.get('width'))/2;
    let text1 = "Redesigning Your Workday";
    let text2 = "Join Subforum for an all-day experience that will engage a highly curated group from across industries. We'll work together to gain a better understanding of focus, constant learning and growth, and team interactions. Sign up now to reserve a spot.";

    // Line 1
    ctx.beginPath();
    ctx.moveTo(line1x,0);
    ctx.lineTo(line1x,155);
    ctx.stroke();

    // Line 2
    ctx.beginPath();
    ctx.moveTo(line1x,155);
    ctx.lineTo(290,155);
    ctx.stroke();

    ctx.rect(100,125,190,75);
    ctx.stroke();

    // Line 3
    ctx.beginPath();
    ctx.moveTo(195,200);
    ctx.lineTo(195,300);
    ctx.stroke();

    ctx.rect(100,300,400,210);
    ctx.stroke();

    

    // Line 4
    ctx.beginPath();
    ctx.moveTo(500,430);
    ctx.lineTo(line1x,430);
    ctx.stroke();

    // Line 5
    ctx.beginPath();
    ctx.moveTo(line1x,this.get('height'));
    ctx.lineTo(line1x,250);
    ctx.stroke();

    // Line 5
    ctx.beginPath();
    ctx.moveTo(line1x,250);
    ctx.lineTo((line1x+40),250);
    ctx.stroke();

    // Line 6
    ctx.beginPath();
    ctx.moveTo(line1x,350);
    ctx.lineTo((line1x+40),350);
    ctx.stroke();

    ctx.rect((line1x+40),225,140,50);
    ctx.stroke();

    ctx.rect((line1x+40),325,310,50);
    ctx.stroke();



    ctx.beginPath();
    ctx.arc((line1x+140),500,50,0,2*Math.PI);
    ctx.fillStyle = "yellow";
    ctx.fill();

    ctx.font = "18px Avenir";
    ctx.fillStyle = "black";
    ctx.textAlign="center"; 
    this.wrapText(ctx,"Get Involved",(line1x+143), 487, 50, 30);

    this.wrapText(ctx,"June 10, 2016",(line1x+110), 255, 380, 30);

    this.wrapText(ctx,"The Hotel Commonwealth, Boston",(line1x+200), 355, 380, 30);

    ctx.textAlign="left"; 
    this.wrapText(ctx,text2,120, 330, 380, 30);

    ctx.font = "24px Avenir";
    this.wrapText(ctx,text1,120, 155, 180, 30);

  },

  wrapText: function(context, text, x, y, maxWidth, lineHeight) {
    var words = text.split(' ');
    var line = '';

    for(var n = 0; n < words.length; n++) {
      var testLine = line + words[n] + ' ';
      var metrics = context.measureText(testLine);
      var testWidth = metrics.width;
      if (testWidth > maxWidth && n > 0) {
        context.fillText(line, x, y);
        line = words[n] + ' ';
        y += lineHeight;
      }
      else {
        line = testLine;
      }
    }
    context.fillText(line, x, y);
  }
});
