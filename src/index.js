import PropTypes from "prop-types";
import React from "react";
import { Resizable } from "react-resizable";
import Draggable from "react-draggable";
import DialogTitle from "./DialogTitle";
import DialogBody from "./DialogBody";
import DialogFooter from "./DialogFooter";
import cs from "classnames";
import EventStack from "active-event-stack";
import centerComponent from 'react-center-component';

class Dialog extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            height: props.height,
            width: props.width || 500,
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
        if (e.keyCode == 27) {
            e.stopPropagation();
            this.onClose();
        }

        return false;
    }

    onClose = () => {
        if (this.props.onClose)
            this.props.onClose.call();
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

        let dialogBody;
        if (this.props.children) {
            dialogBody = this.props.children;
        } else if (React.isValidElement(this.props.body)) {
            dialogBody = this.props.body;
        } else if (typeof this.props.body === "string") {
            dialogBody = <div className="dialog-body" dangerouslySetInnerHTML={{ __html: this.props.body }}></div>;
        } else {
            if (!PRODUCTION) {
                __debug.error("Dialog component could not render. Neither \"children\" nor \"body\" found in props.");
            }

            return false;
        }

        let dialog = (
            <div style={{ height: this.state.height || "auto", width: this.state.width }} className={cs("ui-dialog", { "minimized": this.state.isMinimized, "maximized": this.state.isMaximized })}>
                {this.getDialogTitle()}
                {
                    !this.state.isMinimized && <DialogBody>{dialogBody}</DialogBody>
                }
                {
                    !this.state.isMinimized && <DialogFooter buttons={this.props.buttons} onClose={this.onClose}></DialogFooter>
                }

            </div>
        );

        if (!this.state.isMinimized && !this.state.isMaximized && this.props.isResizable) {
            dialog = (
                <Resizable className="box" height={this.state.height} width={this.state.width} onResize={this.onResize}>
                    {dialog}
                </Resizable>
            );
        }

        if (!this.state.isMinimized && !this.state.isMaximized && this.props.isDraggable) {
            dialog = (
                <Draggable handle=".ui-dialog-titlebar" bounds="body">
                    {dialog}
                </Draggable>
            );
        }

        return (
            <div
                className={cs("ui-dialog-container", { "": this.props.modal })}>
                {dialog}
                {this.props.modal && <div className="ui-dialog-overlay"></div>}
            </div>
        );
    }
}

Dialog.propTypes = {
    height: PropTypes.number,
    width: PropTypes.number,
    modal: PropTypes.bool,
    hasCloseIcon: PropTypes.bool,
    allowMinimize: PropTypes.bool,
    allowMaximize: PropTypes.bool,
    isResizable: PropTypes.bool,
    title: PropTypes.string,
    body: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    onClose: PropTypes.func.isRequired,
    buttons: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string,
        onClick: PropTypes.func
    }))
};

export default Dialog;