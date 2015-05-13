function serviceClicked(x){
	for(var i = 1; i < 6; i++){
		if(i == x){
			document.getElementById("servicePic" + i + "").style.display = "block";
			document.getElementById("serviceBar").style.opacity = "0.8";
			document.getElementById("service" + i + "").style.backgroundColor = "#0B2343";
			document.getElementById("service" + i + "").style.color = "white";
		}
		else{
			document.getElementById("servicePic" + i + "").style.display = "none";
			document.getElementById("service" + i + "").style.backgroundColor = "transparent";
			document.getElementById("service" + i + "").style.color = "black";
		}
		document.getElementById("home").style.display = "none";
		document.getElementById("homeText").style.display = "none";

	}
}

 var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
	function onYouTubeIframeAPIReady() {
	player = new YT.Player('home', {
		height: "100%",
		width: '100%',
		videoId: 'eIzCAA98J9w',
		playerVars: {'controls': 0, 'disablekb': 1, 'iv_load_policy': 3, 'loop': 1, 'showinfo': 0, "playlist": 'eIzCAA98J9w'},
		events: {
			'onReady': onPlayerReady,
		}
	});
	}

	function onPlayerReady(event) {
		event.target.playVideo();
		event.target.mute();
	}
