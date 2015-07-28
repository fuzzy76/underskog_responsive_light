(function($) {
  var winwidth;
  winwidth = $( window ).width();
  if (winwidth < 1020) {
    $('head').append('<meta name="viewport" content="width=device-width, initial-scale=1"/>');
    // Change fontsize
    $("body").css("font-size", "18px");
    $("div.sidebar").css("font-size", "14px");
    //  Header resize
    $("body .wrapper").width("100%");
    // Top menu fix
    $("div#menu ul#user_menu").css("float", "left");
    $("div#menu ul:not(#user_menu)").css("clear", "left");
    $("body #menu ul li").css("font-size", "14px");
    // Right sidebar
    $("div.sidebar").prependTo("div#maincontent");
    $("div#messenger_container").css("float", "none");
    $("div.sidebar ul.actions").remove();
    $("div.sidebar div:empty").remove();
    // Remove fixed widths
    $("body #maincontent.frontpage_maincontent").width("100%");
    $("body #maincontent.frontpage_maincontent #post_stream_block .post_list").width("100%");
    $("body #centreColumn").width("100%");
  }
})(jQuery);
