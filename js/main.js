//the nested service pages within a category. Variables used for hiding and displaying, 1.1 and 1.2 used for first load
var servicePage1 = 1.1;
var servicePage2 = 1.2;

function serviceClicked(x){
	for(var i = 1; i < 6; i++){
		// change the page to the service clicked
		if(i == x){
			document.getElementById("servicePic" + i + "").style.display = "block";
			document.getElementById("serviceBar").style.opacity = "0.8";
			document.getElementById("service" + i + "").style.backgroundColor = "#0B2343";
			document.getElementById("service" + i + "").style.color = "white";
		}
		// hide the other services
		else{
			document.getElementById("servicePic" + i + "").style.display = "none";
			document.getElementById("service" + i + "").style.backgroundColor = "transparent";
			document.getElementById("service" + i + "").style.color = "black";
		}
		// hide the video 
		document.getElementById("video").style.display = "none";
		document.getElementById("homeText").style.display = "none";

		// Change the nav underline bar to yellow when service clicked
		document.getElementById("services").style.borderBottom = "4px solid #ECCB5E";
		document.getElementById("home").style.borderBottom = "0 solid #ECCB5E";

		//hide the nested service pages
		document.getElementById("service" + servicePage1 +  "").style.display = "block";
		document.getElementById("service" + servicePage2 +  "").style.display = "none";
	}
}

function learnMore(x, y){
	servicePage1 = x;
	servicePage2 = y;
	document.getElementById("service" + x +  "").style.display = "none";
	document.getElementById("service" + y +  "").style.display = "block";
}

 	var tag = document.createElement('script');
	tag.src = "http://www.youtube.com/iframe_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

	var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('video', {
        height: '100%',
        width: '100%',
        videoId: 'N6Wh-2TgBqQ',
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
    });
}
function onPlayerReady(event) {
        event.target.playVideo();
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.ENDED) {
          event.target.playVideo();

        }
      }
      function stopVideo() {
        player.stopVideo();
      }

//     var player;
// 	function onYouTubeIframeAPIReady() {
// 		player = new YT.Player('video', {
// 			height: "100%",
// 			width: '100%',
// 			videoId: 'N6Wh-2TgBqQ',
// 		// 	// playerVars: {'controls': 0, 'disablekb': 1, 'iv_load_policy': 3, 'loop': 1, 'showinfo': 0, "playlist": '6OLz5qSGk8A, N6Wh-2TgBqQ'},
// 			playerVars: {'controls': 0, 'disablekb': 1, 'iv_load_policy': 3, 'loop': 1, 'showinfo': 0},
// 			events: {
// 				'onReady': onPlayerReady,
// 				'onStateChange': onPlayerStateChange
// 			}
// 		});
// 	}

// 	function onPlayerReady(event) {
// 		event.target.playVideo();
// 		event.target.mute();
// 	}
// function onPlayerStateChange(event) {
// 	if (event.data == YT.PlayerState.ENDED) {
// 	  event.target.playVideo();

// 	}
// }
