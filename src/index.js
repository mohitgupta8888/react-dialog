import React from "react";
import { Resizable } from "react-resizable";
import Draggable from "react-draggable";
import DialogTitle from "./DialogTitle";
import DialogBody from "./DialogBody";
import DialogFooter from "./DialogFooter";
import cs from "classnames";

class Dialog extends React.Component {
    constructor(props) {
        super(props);
        this.closeOnEscape = this.closeOnEscape.bind(this);

        this.state = {
            height: props.height || 300,
            width: props.width || 500,
            isMinimized: false,
            isMaximized: false
        };
    }

    componentDidMount() {
        this.dialogContainer.focus();
    }

    closeOnEscape = (e) => {
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
                hasMinimizeIcon={this.props.hasMinimizeIcon}
                hasMaximizeIcon={this.props.hasMaximizeIcon}
                isMinimized={this.state.isMinimized}
                isMaximized={this.state.isMaximized}
                onMinimize={this.onMinimize}
                onMaximize={this.onMaximize}
                onRestore={this.onRestore}
                onClose={this.onClose}
                titlebuttons={this.props.titlebuttons}
            />
        );
    }

    render() {

        var dialogBody;
        if (this.props.children) {
            dialogBody = this.props.children;
        } else if (this.props.body) {
            dialogBody = <div className="dialog-body" dangerouslySetInnerHTML={{ __html: this.props.body }}></div>;
        } else {
            console.error("Dialog component could not render. Neither \"children\" nor \"body\" found in props.");

            return false;
        }

        var internalDialog = (
            <div style={{ height: this.state.height, width: this.state.width } + "transform:translate(-50%,-50%); top:50%; left:50%"} className={cs("ui-dialog w-60", { "minimized": this.state.isMinimized, "maximized": this.state.isMaximized })}>
                {this.getDialogTitle()}
                <DialogBody>
                    {dialogBody}
                </DialogBody>
                <DialogFooter buttons={this.props.buttons} onClose={this.onClose}></DialogFooter>
            </div>
        );

        var renderableDialog;
        if (this.props.isResizable) {
            renderableDialog = (
                <Resizable className="box" height={this.state.height} width={this.state.width} onResize={this.onResize}>
                    {internalDialog}
                </Resizable>
            );
        } else {
            renderableDialog = internalDialog;
        }

        return (
            <div ref={(container) => { this.dialogContainer = container; }} className="backdrop db" tabIndex="-1" onKeyUp={this.closeOnEscape}>
                <Draggable handle=".ui-dialog-titlebar" bounds="body">
                    {renderableDialog}
                </Draggable>
            </div>
        );
    }
}

Dialog.propTypes = {
    hasCloseIcon: React.PropTypes.bool,
    hasMinimizeIcon: React.PropTypes.bool,
    hasMaximizeIcon: React.PropTypes.bool,
    isResizable: React.PropTypes.bool,
    title: React.PropTypes.string,
    body: React.PropTypes.string,
    children: React.PropTypes.array,
    onClose: React.PropTypes.func.isRequired,
    buttons: React.PropTypes.arrayOf(React.PropTypes.shape({
        text: React.PropTypes.string,
        onClick: React.PropTypes.func
    })),
    titlebuttons:React.PropTypes.element
};

export default Dialog;