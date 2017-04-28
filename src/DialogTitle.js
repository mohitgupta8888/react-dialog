import React from "react";

const DialogTitle = (props) => {
    var closeIcon;
    if (props.hasCloseIcon !== false) {
        closeIcon = <span className="close-icon">
            <i className="icon icon-close" onClick={props.onClose}></i>
        </span>;
    }

    var minimizeIcon;
    if (props.hasMinimizeIcon) {
        if (props.isMinimized) {
            minimizeIcon = (
                <span className="close-icon">
                    <i className="icon icon-fullscreencollapsemode_op2-01" onClick={props.onRestore}></i>
                </span>
            );
        } else {
            minimizeIcon = (
                <span className="close-icon">
                    <i className="icon icon-process" onClick={props.onMinimize}></i>
                </span>
            );
        }
    }

    var maximizeIcon;
    if (props.hasMaximizeIcon) {
        if (props.isMaximized) {
            maximizeIcon = (
                <span className="close-icon">
                    <i className="icon icon-fullscreencollapsemode_op2-01" onClick={props.onRestore}></i>
                </span>
            );
        } else {
            maximizeIcon = (
                <span className="close-icon">
                    <i className="icon icon-fullscreen" onClick={props.onMaximize}></i>
                </span>
            );
        }
    }

    return (
        <header className="ui-dialog-titlebar mb4">
            {props.title}
            {minimizeIcon}
            {maximizeIcon}
            {props.titlebuttons}
            {closeIcon}
        </header>
    );
};

DialogTitle.propTypes = {
    hasCloseIcon: React.PropTypes.bool,
    hasMinimizeIcon: React.PropTypes.bool,
    hasMaximizeIcon: React.PropTypes.bool,
    isMinimized: React.PropTypes.bool,
    isMaximized: React.PropTypes.bool,
    title: React.PropTypes.string,
    onClose: React.PropTypes.func.isRequired,
    onMinimize: React.PropTypes.func,
    onMaximize: React.PropTypes.func,
    onRestore: React.PropTypes.func
};

export default DialogTitle;