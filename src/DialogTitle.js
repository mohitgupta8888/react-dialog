import React from "react";
import PropTypes from "prop-types";

const DialogTitle = ({ title, hasCloseIcon, onClose, allowMinimize, isMinimized, onMinimize, allowMaximize, isMaximized, onMaximize, onRestore }) => {
    let closeIcon;
    if (hasCloseIcon !== false) {
        closeIcon = (
            <i className="icon icon-close" onClick={onClose}></i>
        );
    }

    let minimizeIcon;
    if (allowMinimize) {
        if (isMinimized) {
            minimizeIcon = (
                <i className="icon icon-restore" onClick={onRestore}></i>
            );
        } else {
            minimizeIcon = (
                <i className="icon icon-minimize" onClick={onMinimize}></i>
            );
        }
    }

    let maximizeIcon;
    if (allowMaximize) {
        if (isMaximized) {
            maximizeIcon = (
                <i className="icon icon-restore" onClick={onRestore}></i>
            );
        } else {
            maximizeIcon = (
                <i className="icon icon-maximize" onClick={onMaximize}></i>
            );
        }
    }

    return (
        <header className="ui-dialog-titlebar">
            <div className="title">
                {title}
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
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    onClose: PropTypes.func.isRequired,
    onMinimize: PropTypes.func,
    onMaximize: PropTypes.func,
    onRestore: PropTypes.func
};

export default DialogTitle;