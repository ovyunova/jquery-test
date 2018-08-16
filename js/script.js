$(document).ready(function(){

  $('.video-wrap__item').fancyboxPlus();
  $('.vidoe-wrap').slick();
  $('.custom-select').selectize();




  function calculateCartPrice() {
    var price = 0;
    $('#cart tr').each(function(){
      var priceItem = $(this).find('.price').text() * $(this).find('input').val();
      price = price + priceItem;
    });
    $('#price').text(price);
  }

  calculateCartPrice();

  $('#cart input').on('change', function(){
    calculateCartPrice();
  });

});
