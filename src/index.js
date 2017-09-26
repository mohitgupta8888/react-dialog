import React from "react";
import PropTypes from "prop-types";
import cs from "classnames";
import Draggable from "react-draggable";
import { Resizable } from "react-resizable";
import DialogTitle from "./DialogTitle";
import DialogBody from "./DialogBody";
import DialogFooter from "./DialogFooter";
import EventStack from "active-event-stack";

class Dialog extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            height: props.height,
            width: props.width,
            isMinimized: false,
            isMaximized: false
        };
    }

    componentWillMount() {
        /**
         * This is done in the componentWillMount instead of the componentDidMount
         * because this way, a modal that is a child of another will have register
         * for events after its parent
         */
        this.eventToken = EventStack.addListenable([
            ["keydown", this.handleGlobalKeydown]
        ]);
    }

    componentWillUnmount = () => {
        EventStack.removeListenable(this.eventToken);
    }

    handleGlobalKeydown = (e) => {
        if (this.props.closeOnEscape && e.keyCode == 27) {
            e.stopPropagation();
            this.onClose();
        }

        return false;
    }

    onClose = () => {
        if (this.props.onClose) {
            this.props.onClose();
        }
    }

    onMinimize = () => {
        this.setState({ isMinimized: true, isMaximized: false });
    }

    onMaximize = () => {
        this.setState({ isMinimized: false, isMaximized: true });
    }

    onRestore = () => {
        this.setState({ isMinimized: false, isMaximized: false });
    }

    onResize = (event, { element, size }) => {
        this.setState({ width: size.width, height: size.height });
    }

    getDialogTitle = () => {
        return (
            <DialogTitle
                title={this.props.title}
                hasCloseIcon={this.props.hasCloseIcon}
                allowMinimize={this.props.allowMinimize}
                allowMaximize={this.props.allowMaximize}
                isMinimized={this.state.isMinimized}
                isMaximized={this.state.isMaximized}
                onMinimize={this.onMinimize}
                onMaximize={this.onMaximize}
                onRestore={this.onRestore}
                onClose={this.onClose}
            />
        );
    }

    render() {
        const { height, width, isMinimized, isMaximized } = this.state;
        const { modal, isDraggable, isResizable, buttons, children, position } = this.props;
        const { x = -width / 2, y = -height / 2 } = position;

        let dialog = (
            <div style={{ height: height, width, transform: `translate(${x}px, ${y}px)` }} className={cs("ui-dialog", { "minimized": isMinimized, "maximized": isMaximized })}>
                {this.getDialogTitle()}
                {
                    !isMinimized && <DialogBody>{children}</DialogBody>
                }
                {
                    !isMinimized && <DialogFooter buttons={buttons} onClose={this.onClose}></DialogFooter>
                }

            </div>
        );

        if (!isMinimized && !isMaximized && isResizable) {
            dialog = (
                <Resizable className="box" height={height} width={width} onResize={this.onResize}>
                    {dialog}
                </Resizable>
            );
        }

        if (!isMinimized && !isMaximized && isDraggable !== false) {
            dialog = (
                <Draggable handle=".ui-dialog-titlebar" bounds="body" defaultPosition={{ x, y }}>
                    {dialog}
                </Draggable>
            );
        }

        return (
            <div
                className={cs("ui-dialog-container", { "": modal })}>
                {dialog}
                {modal && <div className="ui-dialog-overlay"></div>}
            </div>
        );
    }
}

Dialog.propTypes = {
    height: PropTypes.number,
    width: PropTypes.number,
    modal: PropTypes.bool,
    position: PropTypes.shape({
        x: PropTypes.number,
        y: PropTypes.number
    }),
    hasCloseIcon: PropTypes.bool,
    allowMinimize: PropTypes.bool,
    allowMaximize: PropTypes.bool,
    isResizable: PropTypes.bool,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    closeOnEscape: PropTypes.bool,
    onClose: PropTypes.func,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.element]).isRequired,
    buttons: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.shape({
            text: PropTypes.string,
            onClick: PropTypes.func
        })),
        PropTypes.arrayOf(PropTypes.element)
    ])
};

Dialog.defaultProps = {
    height: 300,
    width: 500,
    modal: false,
    closeOnEscape: true,
    isDraggable: false,
    isResizable: false,
    title: '',
    hasCloseIcon: true,
    allowMinimize: false,
    allowMaximize: false,
    onClose: null,
    buttons: null,
    position: { x: -250, y: -150 }
};

export default Dialog;