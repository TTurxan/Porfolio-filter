$(document).ready(function(){
  $("#filter-btns li").click(function(){
      $(this).addClass("active").siblings().removeClass("active")
      var li = $(this).attr('data-target');
      if (li == "all") {
        $('.item').show()
      } else {
        $('.item').hide()
        $('.item[data-id=' + li + ']' ).show();
      }
  })
});