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

var Github = function (_SvgIcon_1$default) {
    (0, _inherits3.default)(Github, _SvgIcon_1$default);

    function Github() {
        (0, _classCallCheck3.default)(this, Github);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Github.__proto__ || (0, _getPrototypeOf2.default)(Github)).apply(this, arguments));

        _this.displayName = 'Github';
        return _this;
    }

    (0, _createClass3.default)(Github, [{
        key: "group",
        value: function group(style) {
            return React.createElement("g", null, React.createElement("path", { d: "M 8 22, A 2 2, 0, 0, 0, 9 21, L 9 18, A 4 4, 0, 0, 1, 11 15, A 8 8, 0, 0, 1, 7 14, A 4 4, 0, 0, 1, 7 8, A 4 4, 0, 0, 1, 7 6, A 4 4, 0, 0, 1, 8 5, A 4 4, 0, 0, 1, 10 7, A 6 6, 0, 0, 1, 15 7, A 4 4, 0, 0, 1, 17 5, A 4 4, 0, 0, 1, 18 6, A 6 6, 0, 0, 1, 18 8, A 4 4, 0, 0, 1, 18 14, A 8 8, 0, 0, 1, 14 15, A 4 4, 0, 0, 1, 16 19, L 16 21, A 2 2, 0, 0, 0, 17 22, A 12 12, 0, 0, 1, 8 22", stroke: style.color, fill: style.fill, strokeWidth: "0" }), React.createElement("path", { d: "M 1 12, A 1 1, 0, 0, 0, 23 12, A 1 1, 0, 0, 0, 1 12", stroke: style.fill, fill: "transparent", strokeWidth: "1.5" }), React.createElement("path", { d: "M 9 19, A 3 3, 0, 0, 1, 6.5, 18, A 3 3, 0, 0, 0, 4, 16, A 1 1, 0, 0, 1, 4, 15.5, A 3 3, 0, 0, 1, 6.5, 16, A 2 2, 0, 0, 0, 10, 16.5, L 9 19", stroke: style.color, fill: style.fill, strokeWidth: "0" }));
        }
    }, {
        key: "render",
        value: function render() {
            var style = __assign({}, this.styles, this.context.muiTheme.icon, { fill: this.context.muiTheme.icon.color }, this.props.style);
            return this.svg(this.group(style), this.props.className, style, this.props.viewBox, this.props.transform);
        }
    }]);
    return Github;
}(SvgIcon_1.default);

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Github;