'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Order = exports.OrderStatus = exports.OrderStatuses = exports.OrderSide = exports.OrderSides = exports.OrderType = exports.OrderTypes = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _arbiterUtil = require('arbiter-util');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OrderTypes = exports.OrderTypes = ['LIMIT', 'MARKET'];
var OrderType = exports.OrderType = (0, _arbiterUtil.makeEnum)(OrderTypes);

var OrderSides = exports.OrderSides = ['BUY', 'SELL'];
var OrderSide = exports.OrderSide = (0, _arbiterUtil.makeEnum)(OrderSides);

var OrderStatuses = exports.OrderStatuses = ['ACTIVE', 'FILLED', 'CANCELED', 'OTHER'];
var OrderStatus = exports.OrderStatus = (0, _arbiterUtil.makeEnum)(OrderStatuses);

// Generic ticker for Arbiter

var Order = exports.Order = function () {
	function Order(_ref) {
		var id = _ref.id,
		    symbol = _ref.symbol,
		    type = _ref.type,
		    side = _ref.side,
		    status = _ref.status,
		    quantity = _ref.quantity,
		    price = _ref.price,
		    _ref$timestamp = _ref.timestamp,
		    timestamp = _ref$timestamp === undefined ? Date.now() : _ref$timestamp;

		_classCallCheck(this, Order);

		this.id = id;

		this.symbol = symbol;
		this.type = type;
		this.side = side;
		this.status = status;

		this.quantity = Number(quantity);
		this.price = Number(price);
		this.timestamp = new Date(timestamp);

		this.total = this.quantity * this.price;
	}

	_createClass(Order, [{
		key: 'toString',
		value: function toString() {
			return '\nSTATUS: ' + this.status + ' - PRICE: ' + this.price + ' - QUANTITY: ' + this.quantity + ' - TOTAL: ' + this.total + '\n    - TIME: ' + this.timestamp + '\n';
		}
	}]);

	return Order;
}();