$(function () {
    $(document).scroll(function () {
      let $nav = $(".navbar");
      let $offset = $(".container-1st")
      $nav.toggleClass('scrolled', $(this).scrollTop() > $offset.height());
    });
  });