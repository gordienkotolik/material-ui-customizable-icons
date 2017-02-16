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

var ChevronDown = function (_SvgIcon_1$default) {
    (0, _inherits3.default)(ChevronDown, _SvgIcon_1$default);

    function ChevronDown() {
        (0, _classCallCheck3.default)(this, ChevronDown);

        var _this = (0, _possibleConstructorReturn3.default)(this, (ChevronDown.__proto__ || (0, _getPrototypeOf2.default)(ChevronDown)).apply(this, arguments));

        _this.displayName = 'ChevronDown';
        return _this;
    }

    (0, _createClass3.default)(ChevronDown, [{
        key: "group",
        value: function group(style) {
            return React.createElement("g", null, React.createElement("path", { d: "M 2 2 L 13 13", stroke: style.fill, fill: "transparent", strokeWidth: "4" }), React.createElement("path", { d: "M 10 13 L 22 2", stroke: style.fill, fill: "transparent", strokeWidth: "4" }));
        }
    }, {
        key: "render",
        value: function render() {
            var style = __assign({}, this.styles, this.context.muiTheme.icon, { fill: this.context.muiTheme.icon.color }, this.props.style);
            return this.svg(this.group(style), this.props.className, style, this.props.viewBox, this.props.transform);
        }
    }]);
    return ChevronDown;
}(SvgIcon_1.default);

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ChevronDown;