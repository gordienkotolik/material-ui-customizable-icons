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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var React = require("react");

var SvgIcon = function (_React$Component) {
    (0, _inherits3.default)(SvgIcon, _React$Component);

    function SvgIcon() {
        (0, _classCallCheck3.default)(this, SvgIcon);

        var _this = (0, _possibleConstructorReturn3.default)(this, (SvgIcon.__proto__ || (0, _getPrototypeOf2.default)(SvgIcon)).apply(this, arguments));

        _this.styles = {
            display: 'inline-block',
            height: '24px',
            width: '24px',
            userSelect: 'none',
            cursor: 'inherit',
            transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
        };
        return _this;
    }

    (0, _createClass3.default)(SvgIcon, [{
        key: "svg",
        value: function svg(children, className, style, viewBox, transform) {
            return React.createElement("svg", { viewBox: viewBox, style: style, className: className }, React.createElement("g", { transform: transform }, children));
        }
    }]);
    return SvgIcon;
}(React.Component);

SvgIcon.contextTypes = {
    muiTheme: React.PropTypes.object
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SvgIcon;