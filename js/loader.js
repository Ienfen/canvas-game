
/**************load resourse***************/
+function (){
	function loadImg(urlOrArr) {
		if(urlOrArr instanceof Array) {
			urlOrArr.forEach(function(url){
				//console.log(urlOrArr)
				load(url);
			});
		} else {
				load(urlOrArr)
		}
	}

	var imageArray = [];
	var callbackIfImgLoad;


	function load(url) {
		if(url === '' || url == undefined) {
			console.log('load image Array have error url')
			return
		}
		var img = new Image();
		imageArray[url] = false;
		img.src = url;

		img.onload = function() {
			imageArray[url] = img;
			if(isAllLoad()) {
				callbackIfImgLoad();
			}
		}


	}

	function isAllLoad() {
		var ready = true;
		for(var k in imageArray){
			
			if(!imageArray[k] && imageArray.hasOwnProperty(k)) {
				ready = false;
			}
		}
		return ready;
	}

	function setOnLoadCallback(callback) {
		callbackIfImgLoad = callback;
	}

	function getImg(url) {
		return imageArray[url];
	}

	window.loader = {

		loadImg: loadImg,
		setOnLoadCallback: setOnLoadCallback,
		getImg: getImg

	}

}();