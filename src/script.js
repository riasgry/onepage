$(function () {
    $(document).scroll(function () {
      let $nav = $(".navbar");
      let $offset = $(".container-1st")
      $nav.toggleClass('scrolled', $(this).scrollTop() > $offset.height());
    });
  });

  
  document.addEventListener('DOMContentLoaded', (e) => {
    let mql = window.matchMedia('(max-width: 800px)');
    e.preventDefault()
    mql.onchange = (e) => {
      if (e.matches) {
      console.log('This is a narrow screen — less than 600px wide.')
    } else {
      /* the viewport is more than 600 pixels wide */
      console.log('This is a wide screen — more than 600px wide.')
    }
  }
});