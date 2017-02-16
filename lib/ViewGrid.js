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

var ViewGrid = function (_SvgIcon_1$default) {
    (0, _inherits3.default)(ViewGrid, _SvgIcon_1$default);

    function ViewGrid() {
        (0, _classCallCheck3.default)(this, ViewGrid);

        var _this = (0, _possibleConstructorReturn3.default)(this, (ViewGrid.__proto__ || (0, _getPrototypeOf2.default)(ViewGrid)).apply(this, arguments));

        _this.displayName = 'ViewGrid';
        return _this;
    }

    (0, _createClass3.default)(ViewGrid, [{
        key: "group",
        value: function group(style) {
            return React.createElement("g", null, React.createElement("path", { d: "M 1 1, L 5 1, L 5 7, L 1 7, L 1 1", stroke: style.color, fill: style.fill, strokeWidth: "0" }), React.createElement("path", { d: "M 7 1, L 11 1, L 11 7, L 7 7, L 7 1", stroke: style.color, fill: style.fill, strokeWidth: "0" }), React.createElement("path", { d: "M 13 1, L 17 1, L 17 7, L 13 7, L 13 1", stroke: style.color, fill: style.fill, strokeWidth: "0" }), React.createElement("path", { d: "M 19 1, L 23 1, L 23 7, L 19 7, L 19 1", stroke: style.color, fill: style.fill, strokeWidth: "0" }), React.createElement("path", { d: "M 1 9, L 5 9, L 5 15, L 1 15, L 1 9", stroke: style.color, fill: style.fill, strokeWidth: "0" }), React.createElement("path", { d: "M 7 9, L 11 9, L 11 15, L 7 15, L 7 9", stroke: style.color, fill: style.fill, strokeWidth: "0" }), React.createElement("path", { d: "M 13 9, L 17 9, L 17 15, L 13 15, L 13 9", stroke: style.color, fill: style.fill, strokeWidth: "0" }), React.createElement("path", { d: "M 19 9, L 23 9, L 23 15, L 19 15, L 19 9", stroke: style.color, fill: style.fill, strokeWidth: "0" }), React.createElement("path", { d: "M 1 17, L 5 17, L 5 23, L 1 23, L 1 17", stroke: style.color, fill: style.fill, strokeWidth: "0" }), React.createElement("path", { d: "M 7 17, L 11 17, L 11 23, L 7 23, L 7 17", stroke: style.color, fill: style.fill, strokeWidth: "0" }), React.createElement("path", { d: "M 13 17, L 17 17, L 17 23, L 13 23, L 13 17", stroke: style.color, fill: style.fill, strokeWidth: "0" }), React.createElement("path", { d: "M 19 17, L 23 17, L 23 23, L 19 23, L 19 17", stroke: style.color, fill: style.fill, strokeWidth: "0" }));
        }
    }, {
        key: "render",
        value: function render() {
            var style = __assign({}, this.styles, this.context.muiTheme.icon, { fill: this.context.muiTheme.icon.color }, this.props.style);
            return this.svg(this.group(style), this.props.className, style, this.props.viewBox, this.props.transform);
        }
    }]);
    return ViewGrid;
}(SvgIcon_1.default);

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ViewGrid;