import PropTypes from "prop-types";
import React from "react";

const DialogTitle = (props) => {
    var closeIcon;
    if (props.hasCloseIcon !== false) {
        closeIcon = (
            <i className="icon icon-close" onClick={props.onClose}></i>
        );
    }

    var minimizeIcon;
    if (props.allowMinimize) {
        if (props.isMinimized) {
            minimizeIcon = (
                <i className="icon icon-restore" onClick={props.onRestore}></i>
            );
        } else {
            minimizeIcon = (
                <i className="icon icon-minimize" onClick={props.onMinimize}></i>
            );
        }
    }

    var maximizeIcon;
    if (props.allowMaximize) {
        if (props.isMaximized) {
            maximizeIcon = (
                <i className="icon icon-restore" onClick={props.onRestore}></i>
            );
        } else {
            maximizeIcon = (
                <i className="icon icon-maximize" onClick={props.onMaximize}></i>
            );
        }
    }

    return (
        <header className="ui-dialog-titlebar">
            <div className="title">
                {props.title}
            </div>
            <div className="action-items">
                {minimizeIcon}
                {maximizeIcon}
                {closeIcon}
            </div>
        </header>
    );
};

DialogTitle.propTypes = {
    hasCloseIcon: PropTypes.bool,
    allowMinimize: PropTypes.bool,
    allowMaximize: PropTypes.bool,
    isMinimized: PropTypes.bool,
    isMaximized: PropTypes.bool,
    title: PropTypes.string,
    onClose: PropTypes.func.isRequired,
    onMinimize: PropTypes.func,
    onMaximize: PropTypes.func,
    onRestore: PropTypes.func
};

export default DialogTitle;