var internalArray = [];

var ArrayList = {
	add : function(o) {
		internalArray.push(o);
	},
	get : function(i) {
		return internalArray[i];
	},
	isEmpty : function() {
		if (internalArray.length == 0) {
			return true;
		} else {
			return false;
		}
	},
	size : function() {
		return internalArray.length;
	},
	clear : function() {
		for (var i = 0; i < internalArray.length; i++) {
			internalArray[i] = null;
		}
	},
	contains : function(o) {
		for (var i = 0; i < internalArray.length; i++) {
			if (internalArray[i] == o) {
				return true;
			} else {
				return false;
			}
		}
	},
	remove : function(i) {
		internalArray[i] = null;
	},
	set : function(i, o) {
		internalArray[i] = o;
	},
	clone: function() {
		var arr = internalArray.splice(0);
		return arr;
	}
};