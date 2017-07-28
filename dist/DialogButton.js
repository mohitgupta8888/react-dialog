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

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DialogButton = function (_React$Component) {
    (0, _inherits3.default)(DialogButton, _React$Component);

    function DialogButton() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, DialogButton);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = DialogButton.__proto__ || (0, _getPrototypeOf2.default)(DialogButton)).call.apply(_ref, [this].concat(args))), _this), _this.close = function () {
            if (_this.props.onClose) {
                _this.props.onClose();
            }
        }, _this.onClick = function () {
            _this.props.onClick.call(_this);

            return false;
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(DialogButton, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "button",
                {
                    type: "button",
                    className: (0, _classnames2.default)("button-group__item button mr1", { disabled: this.props.disabled }),
                    disabled: this.props.disabled,
                    onClick: this.onClick },
                this.props.text
            );
        }
    }]);
    return DialogButton;
}(_react2.default.Component);

DialogButton.propTypes = {
    text: _propTypes2.default.string.isRequired,
    onClick: _propTypes2.default.func.isRequired,
    onClose: _propTypes2.default.func.isRequired,
    disabled: _propTypes2.default.bool
};

exports.default = DialogButton;