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

var _reactResizable = require("react-resizable");

var _reactDraggable = require("react-draggable");

var _reactDraggable2 = _interopRequireDefault(_reactDraggable);

var _DialogTitle = require("./DialogTitle");

var _DialogTitle2 = _interopRequireDefault(_DialogTitle);

var _DialogBody = require("./DialogBody");

var _DialogBody2 = _interopRequireDefault(_DialogBody);

var _DialogFooter = require("./DialogFooter");

var _DialogFooter2 = _interopRequireDefault(_DialogFooter);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _activeEventStack = require("active-event-stack");

var _activeEventStack2 = _interopRequireDefault(_activeEventStack);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Dialog = function (_React$Component) {
    (0, _inherits3.default)(Dialog, _React$Component);

    function Dialog(props) {
        (0, _classCallCheck3.default)(this, Dialog);

        //this.closeOnEscape = this.closeOnEscape.bind(this);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Dialog.__proto__ || (0, _getPrototypeOf2.default)(Dialog)).call(this, props));

        _this.componentWillUnmount = function () {
            _activeEventStack2.default.removeListenable(_this.eventToken);
        };

        _this.handleGlobalKeydown = function (e) {
            if (e.keyCode == 27) {
                e.stopPropagation();
                _this.onClose();
            }

            return false;
        };

        _this.onClose = function () {
            if (_this.props.onClose) _this.props.onClose.call();
        };

        _this.onMinimize = function () {
            _this.setState({ isMinimized: true, isMaximized: false });
        };

        _this.onMaximize = function () {
            _this.setState({ isMinimized: false, isMaximized: true });
        };

        _this.onRestore = function () {
            _this.setState({ isMinimized: false, isMaximized: false });
        };

        _this.onResize = function (event, _ref) {
            var element = _ref.element,
                size = _ref.size;

            _this.setState({ width: size.width, height: size.height });
        };

        _this.getDialogTitle = function () {
            return _react2.default.createElement(_DialogTitle2.default, {
                title: _this.props.title,
                hasCloseIcon: _this.props.hasCloseIcon,
                hasMinimizeIcon: _this.props.hasMinimizeIcon,
                hasMaximizeIcon: _this.props.hasMaximizeIcon,
                isMinimized: _this.state.isMinimized,
                isMaximized: _this.state.isMaximized,
                onMinimize: _this.onMinimize,
                onMaximize: _this.onMaximize,
                onRestore: _this.onRestore,
                onClose: _this.onClose,
                titlebuttons: _this.props.titlebuttons
            });
        };

        _this.state = {
            height: props.height || 300,
            width: props.width || 500,
            isMinimized: false,
            isMaximized: false
        };
        return _this;
    }

    (0, _createClass3.default)(Dialog, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            /**
             * This is done in the componentWillMount instead of the componentDidMount
             * because this way, a modal that is a child of another will have register
             * for events after its parent
             */
            this.eventToken = _activeEventStack2.default.addListenable([["keydown", this.handleGlobalKeydown]]);
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            this.dialogContainer.focus();
        }

        // handleGlobalKeydown = (event) => {
        //     if (keycode(event) === 'esc') {
        //         if (typeof this.props.onClose == 'function') {
        //             this.props.onClose(event);
        //         }
        //     }
        // }

    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var dialogBody;
            if (this.props.children) {
                dialogBody = this.props.children;
            } else if (_react2.default.isValidElement(this.props.body)) {
                dialogBody = this.props.body;
            } else if (typeof this.props.body === "string") {
                dialogBody = _react2.default.createElement("div", { className: "dialog-body", dangerouslySetInnerHTML: { __html: this.props.body } });
            } else {
                if (!PRODUCTION) {
                    __debug.error("Dialog component could not render. Neither \"children\" nor \"body\" found in props.");
                }

                return false;
            }

            var internalDialog = _react2.default.createElement(
                "div",
                { style: { height: this.state.height, width: this.state.width, top: "50%", left: "50%" }, className: (0, _classnames2.default)("ui-dialog w-60 overflow-y-auto", { "minimized": this.state.isMinimized, "maximized": this.state.isMaximized }) },
                this.getDialogTitle(),
                _react2.default.createElement(
                    _DialogBody2.default,
                    null,
                    dialogBody
                ),
                _react2.default.createElement(_DialogFooter2.default, { buttons: this.props.buttons, onClose: this.onClose })
            );

            var renderableDialog;
            if (this.props.isResizable) {
                renderableDialog = _react2.default.createElement(
                    _reactResizable.Resizable,
                    { className: "box", height: this.state.height, width: this.state.width, onResize: this.onResize },
                    internalDialog
                );
            } else {
                renderableDialog = internalDialog;
            }

            return _react2.default.createElement(
                "div",
                { ref: function ref(container) {
                        _this2.dialogContainer = container;
                    }, className: (0, _classnames2.default)("db", { "backdrop": this.props.modal !== false }) },
                _react2.default.createElement(
                    _reactDraggable2.default,
                    { handle: ".ui-dialog-titlebar", bounds: "body", defaultPosition: {
                            x: -this.state.width / 2, y: -this.state.height / 2
                        } },
                    renderableDialog
                )
            );
        }
    }]);
    return Dialog;
}(_react2.default.Component);

Dialog.propTypes = {
    height: _propTypes2.default.number,
    width: _propTypes2.default.number,
    modal: _propTypes2.default.bool,
    hasCloseIcon: _propTypes2.default.bool,
    hasMinimizeIcon: _propTypes2.default.bool,
    hasMaximizeIcon: _propTypes2.default.bool,
    isResizable: _propTypes2.default.bool,
    title: _propTypes2.default.string,
    body: _propTypes2.default.string,
    children: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.object]),
    onClose: _propTypes2.default.func.isRequired,
    buttons: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        text: _propTypes2.default.string,
        onClick: _propTypes2.default.func
    })),
    titlebuttons: _propTypes2.default.element,
    isFooter: _propTypes2.default.bool
};

exports.default = Dialog;