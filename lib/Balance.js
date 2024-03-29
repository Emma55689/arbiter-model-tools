"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Generic ticker for Arbiter
var Balance = exports.Balance = function () {
	function Balance(_ref) {
		var currency = _ref.currency,
		    available = _ref.available;

		_classCallCheck(this, Balance);

		this.currency = currency;
		this.available = Number(available);
	}

	_createClass(Balance, [{
		key: "isFunded",
		value: function isFunded() {
			return this.available > 0;
		}
	}]);

	return Balance;
}();