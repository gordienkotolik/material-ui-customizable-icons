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

var MoveRight = function (_SvgIcon_1$default) {
    (0, _inherits3.default)(MoveRight, _SvgIcon_1$default);

    function MoveRight() {
        (0, _classCallCheck3.default)(this, MoveRight);

        var _this = (0, _possibleConstructorReturn3.default)(this, (MoveRight.__proto__ || (0, _getPrototypeOf2.default)(MoveRight)).apply(this, arguments));

        _this.displayName = 'MoveRight';
        return _this;
    }

    (0, _createClass3.default)(MoveRight, [{
        key: "group",
        value: function group(style, pallet) {
            return React.createElement("g", null, React.createElement("path", { d: "M 13 2, L 13 8, L 0 8, L 0 16, L 13 16, L 13 22, L 19 12, L 13 2", stroke: "transparent", fill: pallet.arrow, strokeWidth: "0" }), React.createElement("path", { d: "M 23 0, L 23 24", stroke: pallet.strip, fill: "transparent", strokeWidth: "3" }));
        }
    }, {
        key: "render",
        value: function render() {
            var pallet = {
                arrow: this.props.pallet.arrow || this.context.muiTheme.icon.color,
                strip: this.props.pallet.strip || this.context.muiTheme.icon.color
            };
            var style = __assign({}, this.styles, this.context.muiTheme.icon, this.props.style);
            return this.svg(this.group(style, pallet), this.props.className, style, this.props.viewBox, this.props.transform);
        }
    }]);
    return MoveRight;
}(SvgIcon_1.default);

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MoveRight;