// $("#main_menu").mouseover(function() {
//   $(this)
//     .children("#sub_menu")
//     .stop()
//     .slideDown();
//   $("#main_menu")
//     .not(this)
//     .children("#sub_menu")
//     .stop()
//     .slideUp();
// });

$(document).ready(function() {
  $(".main_menu").hover(function() {
    $(this)
      .find(".sub_menu")
      .stop()
      .slideToggle();
  });
});
