const flavors = ['lavender', 'pistachio', 'lemon sorbet', 'lilikoi', 'mango'];

$(document).ready(function() {
  $("#icecream").click(function() {
  
  flavors.forEach(function(flavor) {
    flavor = flavor.charAt(0).toUpperCase() + flavor.substr(1);
    flavors.sort();
    $("#ul").append("<li>" + flavor + "</li>");
    });
 

  });
});

// $("#ul").text(flavors);
//"<li>" + flavor + "</li>"


