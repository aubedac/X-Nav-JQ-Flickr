var url1 = "http://api.flickr.com/services/feeds/photos_public.gne?tags=";
var url2 = "&tagmode=any&format=json&jsoncallback=?";

$("h1 #clicker").click(function() {
  var url = url1 + "fuenlabrada" + url2;
  find(url);
});

function find(webSite){
  var test = $('#display img').remove();
  $.getJSON(webSite, {
    format : "json",
    dataType: "jsonp"
  }).done(function(data) {
    var src = "";
    for(var i = 0; i < data.items.length; i++) {
      //console.log(data.items[i].media['m']);
      src = data.items[i].media['m'];
      var img = document.createElement('img');
      img.src = src;
      document.getElementById('display').appendChild(img);
    }
  });
}

$("h2 button").click(function() {
  var tag = $('h2 input').val();
    var url = url1 + tag + url2;
    find(url);
});
