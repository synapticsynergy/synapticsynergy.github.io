$(function() {
  $(".portfolio-box .portfolio-box-caption").swipe( {
    //Generic swipe handler for all directions
    swipe: swipe1,
    allowPageScroll: "horizontal"
  });

  function swipe1(event, direction, distance, duration, fingerCount, fingerData) {
      console.log($(this).addClass('.fadeInClass'));
      // $(this).text("You swiped " + direction );
      //remove styling from all portfolio boxes
      //add styling to this portfolio box.




    }

  //Set some options later
  // $("#test").swipe( {fingers:2} );
});