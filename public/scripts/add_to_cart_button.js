$(document).ready(function() {

  let basket = JSON.parse(localStorage.getItem('basket') || "{}");

  $(".add_item_button").click(function(event){
    let id = $(this).data("productid");
    if(basket[id]){
      basket[id] += 1;
    }
    else {
      basket[id] = 1;
    }
    localStorage.setItem('basket', JSON.stringify(basket));
  });
});

