function serviceClicked(x){
	for(var i = 1; i < 6; i++){
		if(i == x){
			document.getElementById("servicePic" + i + "").style.display = "block";
			document.getElementById("serviceBar").style.opacity = "0.5";
		}
		else{
			document.getElementById("servicePic" + i + "").style.display = "none";
		}
		document.getElementById("home").style.display = "none";
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
		videoId: 'B8TGkhmQRko',
		playerVars: {'controls': 0, 'disablekb': 1, 'iv_load_policy': 3, 'loop': 1, 'showinfo': 0, "playlist": 'B8TGkhmQRko'},
		events: {
			'onReady': onPlayerReady,
		}
	});
	}

	function onPlayerReady(event) {
		event.target.playVideo();
		event.target.mute();
	}
