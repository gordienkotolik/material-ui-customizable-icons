"use strict";

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _assign = require("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __assign = undefined && undefined.__assign || _assign2.default || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
/* tslint:disable:max-line-length */
var React = require("react");
var SvgIcon_1 = require("./SvgIcon");

var CaretUp = function (_SvgIcon_1$default) {
    (0, _inherits3.default)(CaretUp, _SvgIcon_1$default);

    function CaretUp() {
        (0, _classCallCheck3.default)(this, CaretUp);

        var _this = (0, _possibleConstructorReturn3.default)(this, (CaretUp.__proto__ || (0, _getPrototypeOf2.default)(CaretUp)).apply(this, arguments));

        _this.displayName = 'CaretUp';
        return _this;
    }

    (0, _createClass3.default)(CaretUp, [{
        key: "group",
        value: function group(style, pallet) {
            return React.createElement("g", null, React.createElement("path", { d: "M 2 13, L 12 2, A 2 2, 0, 0, 1, 14 2, L 23 12, A 2 2, 0, 0, 1, 22 14, L 4 14, A 2 2, 0, 0, 1, 3 12", stroke: "transparent", fill: pallet.primary, strokeWidth: "0" }));
        }
    }, {
        key: "render",
        value: function render() {
            var pallet = {
                primary: this.props.pallet.primary || this.context.muiTheme.icon.color
            };
            var style = __assign({}, this.styles, this.context.muiTheme.icon, this.props.style);
            return this.svg(this.group(style, pallet), this.props.className, style, this.props.viewBox, this.props.transform);
        }
    }]);
    return CaretUp;
}(SvgIcon_1.default);

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CaretUp;