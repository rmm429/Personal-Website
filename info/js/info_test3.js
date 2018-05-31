$(function() {

  /*
  var tl = new TimelineMax()
    .add(TweenMax.to('#largeText', 2, {
        transform: 'scale(1.05)',
      }));

  var scene = new ScrollMagic.Scene({
            triggerElement: '#scene',
            duration: 500
        })
        .setPin('#pin')
        .setTween(tl)
        .addTo(controller)
        .addIndicators();

  var tl2 = new TimelineMax()
    .add(TweenMax.to('#largeText2', 2, {
        transform: 'scale(1.05)',
      }));

  var scene2 = new ScrollMagic.Scene({
            triggerElement: '#scene2',
            duration: 500
        })
        .setPin('#pin2')
        .setTween(tl2)
        .addTo(controller)
        .addIndicators();
        */



  // Scene Handler
var scene = new ScrollMagic.Scene({
  triggerElement: "#pinned-trigger1", // point of execution
  duration: $(window).height() - 100, // pin element for the window height - 1
  triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
  reverse: true // allows the effect to trigger when scrolled in the reverse direction
})
.setPin("#pinned-element1"); // the element we want to pin

  controller.addScene([
    scene-about-me,
    scene
  ]);

});
