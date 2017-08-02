"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DialogBody = function (_React$Component) {
    (0, _inherits3.default)(DialogBody, _React$Component);

    function DialogBody() {
        (0, _classCallCheck3.default)(this, DialogBody);
        return (0, _possibleConstructorReturn3.default)(this, (DialogBody.__proto__ || (0, _getPrototypeOf2.default)(DialogBody)).apply(this, arguments));
    }

    (0, _createClass3.default)(DialogBody, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "ui-dialog-content", style: { "overflowY": "auto" } },
                this.props.children
            );
        }
    }]);
    return DialogBody;
}(_react2.default.Component);

DialogBody.propTypes = {
    children: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.object])
};

exports.default = DialogBody;