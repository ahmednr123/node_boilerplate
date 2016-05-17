(function(){
	var cache = {};

	//===================================PREPROCESSORS

	var $id = function(_element){						//ecmaScript
		return document.getElementById(_element);		// let $id = (_elm) => document.getElementById(_elm)
	}

	var $class = function(_element, _pointer){								//ecmaScript
		return document.getElementByClassName(_element)[_pointer || 0];		// let $id = (_elm) => document.getElementByClassName(_element)[_pointer || 0]
	}

	//===================================FUNCTIONS

	var xhrRequest = function(_url, _onReady, _xhr){
		var xhr = _xhr || new XMLHttpRequest();
		xhr.onreadystatechange = function(){
			if(xhr.readyState == 4 && xhr.status == 200){
				_onReady(xhr.responseText, _xhr);
			}
		}
		xhr.open("GET", _url, true);
		xhr.send();
	}

	var xhrPost = function(_url, _onReady, _data, _xhr){
		var xhr = _xhr || new XMLHttpRequest();
		xhr.onreadystatechange = function(){
			if(xhr.readyState == 4 && xhr.status == 200){
				_onReady(xhr.responseText, _xhr);
			}
		}
		xhr.open("GET", _url, true);
		xhr.send();
	}

	//=================================CODE

	console.log("Hello World!");

	//=================================END
})();