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

var ViewHeadlines = function (_SvgIcon_1$default) {
    (0, _inherits3.default)(ViewHeadlines, _SvgIcon_1$default);

    function ViewHeadlines() {
        (0, _classCallCheck3.default)(this, ViewHeadlines);

        var _this = (0, _possibleConstructorReturn3.default)(this, (ViewHeadlines.__proto__ || (0, _getPrototypeOf2.default)(ViewHeadlines)).apply(this, arguments));

        _this.displayName = 'ViewHeadlines';
        return _this;
    }

    (0, _createClass3.default)(ViewHeadlines, [{
        key: "group",
        value: function group(style) {
            return React.createElement("g", null, React.createElement("path", { d: "M 1 1, L 23 1, L 23 5, L 1 5, L 1 1", stroke: style.color, fill: style.fill, strokeWidth: "0" }), React.createElement("path", { d: "M 1 7, L 23 7, L 23 11, L 1 11, L 1 7", stroke: style.color, fill: style.fill, strokeWidth: "0" }), React.createElement("path", { d: "M 1 13, L 23 13, L 23 17, L 1 17, L 1 13", stroke: style.color, fill: style.fill, strokeWidth: "0" }), React.createElement("path", { d: "M 1 19, L 23 19, L 23 23, L 1 23, L 1 19", stroke: style.color, fill: style.fill, strokeWidth: "0" }));
        }
    }, {
        key: "render",
        value: function render() {
            var style = __assign({}, this.styles, this.context.muiTheme.icon, { fill: this.context.muiTheme.icon.color }, this.props.style);
            return this.svg(this.group(style), this.props.className, style, this.props.viewBox, this.props.transform);
        }
    }]);
    return ViewHeadlines;
}(SvgIcon_1.default);

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ViewHeadlines;