var controller;

$(function() {
    controller = new ScrollMagic.Controller();


    /*
    First we create a variable called tween1, in which we store our Tween so we can reference it later
    We Create a new TweenMax.to object. That's how we define our Tween, our transition if you prefer
    '#tween' is the selector that matches the element we want to set a Tween on. It's the "Hi there !" with the black border onr our example page
    Then comes 0.5 that's the duration of our animation, in seconds, so here's it'll play for a second and a half
    Then we define the new styles we want our element to have when the transition ends, here we want the background-color to become red and the text color to become white
    */
    var tween1 = TweenMax.to('#tween', 0.5, {
        backgroundColor: 'red',
        color: 'white'
    });

    /*
    First we create a variable called scene1 to hold our Scene
    There we create a ScrollMagic.Scene object
    triggerElement is the selector that matches a DOM element
    duration option, which is set to 300, means that our Scene now lasts for 300 pixels of scroll. It's going to enable us to have our Pin stop at some point, or it'd just stay fixed forever...
    setPin method, which takes a selector as an element : the selector of the block we want to have fixed.
    setPin properties, which set pushFollowers to false, thus making the pinned element scroll past other elements
    setTween method, which takes a tween as an element
    */

    /*
    var scene1 = new ScrollMagic.Scene({
            triggerElement: '#scene1',
            duration: 300
        })
        .setPin('#pin', {
            pushFollowers: false
        })
        .setTween(tween1)
        .addTo(controller)
  */


    /*
    First we create a variable called tween2, in which we store our Tween so we can reference it later
    We Create a new TweenMax.to object. That's how we define our Tween, our transition if you prefer
    '#pin2' is the selector that matches the element we want to set a Tween on. It's the "Hi there !" with the black border onr our example page
    Then comes 0.5 that's the duration of our animation, in seconds, so here's it'll play for a second and a half
    Then we define the new styles we want our element to have when the transition ends, here we want the background-color to become red and the text color to become white
    */
    var tween2 = TweenMax.to('#pin2', 0.5, {
        backgroundColor: 'red',
        color: 'white'
    });


    /*
    First we create a variable called tween3, in which we store our Tween so we can reference it later
    We Create a new TweenMax.to object. That's how we define our Tween, our transition if you prefer
    '.inside2' is the selector that matches the element we want to set a Tween on. It's the "Hi there !" with the black border onr our example page
    Then comes 0.5 that's the duration of our animation, in seconds, so here's it'll play for a second and a half
    Then we define the new styles we want our element to have when the transition ends, here we want the background-color to become green and the text color to become white
    */

    /*
    var tween3 = TweenMax.to('.inside2', 0.5, {
        backgroundColor: 'green',
        color: 'white'
    });
    */

    var tween3 = TweenMax.to('.inside2', 0.5, {
      transform: 'scale(1.25)',
      ease: Linear.easeNone
    });


    /*
    First we create a variable called scene2 to hold our Scene
    There we create a ScrollMagic.Scene object
    triggerElement is the selector that matches a DOM element
    duration option, which is set to 200, means that our Scene now lasts for 200 pixels of scroll. It's going to enable us to have our Pin stop at some point, or it'd just stay fixed forever...
    setPin method, which takes a selector as an element : the selector of the block we want to have fixed.
    setTween method, which takes a tween as an element
    */
    var scene2 = new ScrollMagic.Scene({
            triggerElement: '#scene2',
            duration: 200
        })
        .setPin('#pin2')
        .setTween(tween3)
        .addTo(controller)

});
