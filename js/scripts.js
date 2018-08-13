$(document).ready(function() {
  $("form button").click(function(event){
    $("form").hide();

    var items = [$("input#item1").val(), $("input#item2").val(), $("input#item3").val()];

    var itemsWithValue = []
    items.forEach(function(item) {
      if (item != "") {
        itemsWithValue.push(item);
      }
    });

    var upperCase = itemsWithValue.map(function(item){
      return item.toUpperCase();
    });

    var sorts = upperCase.sort();

    sorts.forEach(function(sort){
      $("ul").append("<li>" + sort + "</li>");
    });

    event.preventDefault();
  });
});
