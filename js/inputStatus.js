+function () {
	var keysPressed = {};

	function keysStatus(e, status) {
		var code = e.keyCode;
		var key;
		switch(code) {
			case 40:
				key = 'Down';
				break;
			case 37:
				key = 'Left';
				break;
			case 39:
				key = 'Right';
				break;
			case 38:
				key = 'Up';
				break;
			case 32:
				key = 'Backspace';
				break;
		}

		keysPressed[key] = status;
		
	}

	document.addEventListener("keydown",  function(elem) {
		keysStatus(elem, true);
	});

	document.addEventListener("keyup",  function(elem) {
		keysStatus(elem, false);
	});


	window.inputStatus = {
		isPressed: function(key) {
			return keysPressed[key];
		}
	}
}()