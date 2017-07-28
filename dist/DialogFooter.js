"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _DialogButton = require("./DialogButton");

var _DialogButton2 = _interopRequireDefault(_DialogButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DialogFooter = function DialogFooter(props) {
    var buttons = props.buttons;
    if (!buttons) return false;

    var dialogButtons = [];
    buttons.forEach(function (button, index) {
        dialogButtons.push(_react2.default.createElement(_DialogButton2.default, (0, _extends3.default)({ key: "button-" + index }, button, { onClose: props.onClose })));
    }, undefined);

    if (dialogButtons.length == 0) return false;

    return _react2.default.createElement(
        "div",
        { className: "footer--popup" },
        dialogButtons
    );
};

DialogFooter.propTypes = {
    buttons: _propTypes2.default.array,
    onClose: _propTypes2.default.func.isRequired
};

exports.default = DialogFooter;