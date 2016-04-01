
var not = '<div class="result"><h1> Error !!</h1></div>'


$(document).ready(function() {
  $('input').keypress(function(e) {
    if (e.keyCode == 13) {
      var val = document.getElementById('search').value;
      document.getElementById('result-c').innerHTML = "";
      $('#message').addClass('animated bounceOut');
      
      var playListURL = 'http://en.wikipedia.org//w/api.php?action=opensearch&format=json&search=' +encodeURI(val)+ '&limit=20&callback=?';

      jQuery.getJSON(playListURL, function(data) {
        var title = data[1];
      var description = data[2];
      var link = data[3];
        
               for (var i = 0; i<data[1].length; i++) {
        $('#mat').append('<div class="result"><h1>Results</h1></div>') 
             
        var newCard = $("<div class='result'></div>").appendTo('#result-c');
        $("<h1></h1>").text(title[i]).appendTo(newCard);
        $("<p></p>").text(description[i]).appendTo(newCard);
        $("<a target='_blank' href='" + link[i] + "'></a>").text("Find Out More...").appendTo(newCard);
        $('.result').addClass('animated fadeInUp');
                 $('.random').html('<h1>Results</h1><center><a href="http://en.wikipedia.org/wiki/Special:Random" target="_blank"><h1 class="btn btn-primary">RANDOM ARTICLE</h1></a><h1 class="btn btn-primary" onclick="tweetIt()">TWEET ME</h1></center></div></center></div>');

        
      }
      });
      var rand = '<div class="result random"><center><h1>Search something or read random article...</h1><a href="http://en.wikipedia.org/wiki/Special:Random" target="_blank"><h1 class="btn btn-primary">RANDOM ARTICLE</h1></a><h1 class="btn btn-primary" onclick="tweetIt()">TWEET ME</h1></center></div>';

      if( $('#result-c').is(':empty') ) {
        $('#result-c').append(rand);
      }
      
    }
  });
});

var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 1000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
  document.getElementById("message").style.display = "none";
  $('.well').addClass('animated zoomIn');
  $('#random').addClass('animated fadeInUp')
}
function tweetIt () {
  var a = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
  
  var phrase = "Check WikiR awesome wikipedia search client!! by rishabh -";
  var tweetUrl = 'https://twitter.com/share?text=' +
    encodeURIComponent(phrase) +
    '.' +
    '&url=' +
    'http://codepen.io/rishabh3112/pen/wGqKmb/';
    
  window.open(tweetUrl);
}
