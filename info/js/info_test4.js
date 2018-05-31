$(function() {

  var tl = new TimelineLite({delay: 1}),
    firstBg = document.querySelectorAll('.text__first-bg'),
    secBg = document.querySelectorAll('.text__second-bg'),
    word  = document.querySelectorAll('.text__word');

  tl
    .to(firstBg, 0.2, {scaleX:1})
    .to(secBg, 0.2, {scaleX:1})
    .to(word, 0.1, {opacity:1}, "-=0.1")
    .to(firstBg, 0.2, {scaleX:0})
    .to(secBg, 0.2, {scaleX:0});


  // init ScrollMagic Controller
  var controller = new ScrollMagic.Controller();

  var aboutMe = document.querySelectorAll(".text-about-me");
  var compsciDrexel = document.querySelectorAll(".text-compsci-drexel");
  var tracks = document.querySelectorAll(".text-tracks");
  var tracksContent = document.querySelectorAll(".text-tracks-content");
  var minor = document.querySelectorAll(".text-minor");
  var minorContent = document.querySelectorAll(".text-minor-content");

  var outerCompsciDrexel = document.querySelectorAll(".outer-compsci-drexel");
  var innerCompsciDrexel = document.querySelectorAll(".inner-compsci-drexel");
  var outerTracks = document.querySelectorAll(".outer-tracks");
  var innerTracks = document.querySelectorAll(".inner-tracks");
  var outerMinor = document.querySelectorAll(".outer-minor");
  var innerMinor = document.querySelectorAll(".inner-minor");

  var tlAboutMe = new TimelineMax()
  .to(aboutMe, 1, {opacity:1}, "-=0.1")
  .add(TweenMax.to('#large-text-about-me', 0.5, {
      transform: 'scale(2)'
    }))
  .to(outerCompsciDrexel, 1, {opacity:1}, "-=0.1")
  .to(innerCompsciDrexel, 1, {opacity:1}, "-=0.1")
  .to(compsciDrexel, 1, {opacity:1}, "-=0.1")
  .to(outerTracks, 1, {opacity:1}, "-=0.1")
  .to(innerTracks, 1, {opacity:1}, "-=0.1")
  .to(tracks, 1, {opacity:1}, "-=0.1")
  .to(tracksContent, 1, {opacity:1}, "-=0.1")
  .to(outerMinor, 1, {opacity:1}, "-=0.1")
  .to(innerMinor, 1, {opacity:1}, "-=0.1")
  .to(minor, 1, {opacity:1}, "-=0.1")
  .to(minorContent, 1, {opacity:1}, "-=0.1");


  // Scene Handler
  var sceneAboutMe = new ScrollMagic.Scene({
    triggerElement: "#about-me-div", // point of execution
    duration: $(window).height(), // pin element for the window height - 1
    triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
    reverse: true // allows the effect to trigger when scrolled in the reverse direction
  })
  .setPin("#about-me-content")
  .setTween(tlAboutMe)



  var technical = document.querySelectorAll(".text-technical");
  var languages = document.querySelectorAll(".text-languages");
  var languagesProficient = document.querySelectorAll(".text-languages-proficient");
  var languagesProficientContent = document.querySelectorAll(".text-languages-proficient-content");
  var languagesLimited = document.querySelectorAll(".text-languages-limited");
  var languagesLimitedContent = document.querySelectorAll(".text-languages-limited-content");
  var software = document.querySelectorAll(".text-software");
  var softwareContent = document.querySelectorAll(".text-software-content");
  var certifications = document.querySelectorAll(".text-certifications");
  var certificationsContent = document.querySelectorAll(".text-certifications-content");

  var outerLanguages = document.querySelectorAll(".outer-languages");
  var innerLanguages = document.querySelectorAll(".inner-languages");
  var outerSoftware = document.querySelectorAll(".outer-software");
  var innerSoftware = document.querySelectorAll(".inner-software");
  var outerCertifications = document.querySelectorAll(".outer-certifications");
  var innerCertifications = document.querySelectorAll(".inner-certifications");


  var tlTechnical = new TimelineMax()
  .to(technical, 1, {opacity:1}, "-=0.1")
  .add(TweenMax.to('#large-text-technical', 0.5, {
      transform: 'scale(2)'
    }))
  .to(outerLanguages, 1, {opacity:1}, "-=0.1")
  .to(innerLanguages, 1, {opacity:1}, "-=0.1")
  .to(languages, 1, {opacity:1}, "-=0.1")
  .to(languagesProficient, 1, {opacity:1}, "-=0.1")
  .to(languagesProficientContent, 1, {opacity:1}, "-=0.1")
  .to(languagesLimited, 1, {opacity:1}, "-=0.1")
  .to(languagesLimitedContent, 1, {opacity:1}, "-=0.1")
  .to(outerSoftware, 1, {opacity:1}, "-=0.1")
  .to(innerSoftware, 1, {opacity:1}, "-=0.1")
  .to(software, 1, {opacity:1}, "-=0.1")
  .to(softwareContent, 1, {opacity:1}, "-=0.1")
  .to(outerCertifications, 1, {opacity:1}, "-=0.1")
  .to(innerCertifications, 1, {opacity:1}, "-=0.1")
  .to(certifications, 1, {opacity:1}, "-=0.1")
  .to(certificationsContent, 1, {opacity:1}, "-=0.1");

  // Scene Handler
  var sceneTechnical = new ScrollMagic.Scene({
    triggerElement: "#technical-div", // point of execution
    duration: $(window).height(), // pin element for the window height - 1
    triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
    reverse: true // allows the effect to trigger when scrolled in the reverse direction
  })
  .setPin("#technical-content")
  .setTween(tlTechnical)






  var employment = document.querySelectorAll(".text-employment");
  var employmentCurrent = document.querySelectorAll(".text-employment-current");
  var osisoft = document.querySelectorAll(".text-osisoft");
  var osisoftDetails = document.querySelectorAll(".text-osisoft-details");
  var osisoftContent = document.querySelectorAll(".text-osisoft-content");
  var employmentPrevious = document.querySelectorAll(".text-employment-previous");
  var chop = document.querySelectorAll(".text-chop");
  var chopDetails = document.querySelectorAll(".text-chop-details");
  var chopContent = document.querySelectorAll(".text-chop-content");
  var zpub = document.querySelectorAll(".text-zpub");
  var zpubDetails = document.querySelectorAll(".text-zpub-details");
  var zpubContent = document.querySelectorAll(".text-zpub-content");

  var tlEmployment = new TimelineMax()
  .to(employment, 1, {opacity:1}, "-=0.1")
  .add(TweenMax.to('#large-text-employment', 0.5, {
      transform: 'scale(2)'
    }))
  .to(employmentCurrent, 1, {opacity:1}, "-=0.1")
  .to(osisoft, 1, {opacity:1}, "-=0.1")
  .to(osisoftDetails, 1, {opacity:1}, "-=0.1")
  .to(osisoftContent, 1, {opacity:1}, "-=0.1")
  .to(employmentPrevious, 1, {opacity:1}, "-=0.1")
  .to(chop, 1, {opacity:1}, "-=0.1")
  .to(chopDetails, 1, {opacity:1}, "-=0.1")
  .to(chopContent, 1, {opacity:1}, "-=0.1")
  .to(zpub, 1, {opacity:1}, "-=0.1")
  .to(zpubDetails, 1, {opacity:1}, "-=0.1")
  .to(zpubContent, 1, {opacity:1}, "-=0.1");

  // Scene Handler
  var sceneEmployment = new ScrollMagic.Scene({
    triggerElement: "#employment-div", // point of execution
    duration: $(window).height(), // pin element for the window height - 1
    triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
    reverse: true // allows the effect to trigger when scrolled in the reverse direction
  })
  .setPin("#employment-content")
  .setTween(tlEmployment)





  // Add Scenes to ScrollMagic Controller
  controller.addScene([
    sceneAboutMe,
    sceneTechnical,
    sceneEmployment
  ]);

});
