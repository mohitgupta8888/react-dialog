"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import CloseIcon from "./CloseIcon";

var DialogTitle = function DialogTitle(props) {
    var closeIcon;
    if (props.hasCloseIcon !== false) {
        closeIcon = _react2.default.createElement(
            "a",
            { className: "ui-close", onClick: props.onClose },
            _react2.default.createElement("i", { className: "icon-close" })
        );
    }

    var minimizeIcon;
    if (props.hasMinimizeIcon) {
        if (props.isMinimized) {
            minimizeIcon = _react2.default.createElement(
                "span",
                { className: "dib mr2" },
                _react2.default.createElement("i", { className: "pointer icon icon-enlarge2", onClick: props.onRestore })
            );
        } else {
            minimizeIcon = _react2.default.createElement(
                "span",
                { className: "dib mr2" },
                _react2.default.createElement("i", { className: "icon icon-shrink2 pointer", onClick: props.onMinimize })
            );
        }
    }

    var maximizeIcon;
    if (props.hasMaximizeIcon) {
        if (props.isMaximized) {
            maximizeIcon = _react2.default.createElement(
                "span",
                { className: "dib mr2" },
                _react2.default.createElement("i", { className: "icon icon-shrink2", onClick: props.onRestore })
            );
        } else {
            maximizeIcon = _react2.default.createElement(
                "span",
                { className: "dib mr2" },
                _react2.default.createElement("i", { className: "icon icon-enlarge2 pointer", onClick: props.onMaximize })
            );
        }
    }

    return _react2.default.createElement(
        "header",
        { className: "ui-dialog-titlebar" },
        _react2.default.createElement(
            "div",
            { className: "title" },
            props.title
        ),
        _react2.default.createElement(
            "div",
            { className: "action-items" },
            minimizeIcon,
            maximizeIcon,
            props.titlebuttons,
            closeIcon
        )
    );
};

DialogTitle.propTypes = {
    hasCloseIcon: _propTypes2.default.bool,
    hasMinimizeIcon: _propTypes2.default.bool,
    hasMaximizeIcon: _propTypes2.default.bool,
    isMinimized: _propTypes2.default.bool,
    isMaximized: _propTypes2.default.bool,
    title: _propTypes2.default.string,
    onClose: _propTypes2.default.func.isRequired,
    onMinimize: _propTypes2.default.func,
    onMaximize: _propTypes2.default.func,
    onRestore: _propTypes2.default.func
};

exports.default = DialogTitle;