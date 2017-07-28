import PropTypes from "prop-types";
import React from "react";
import CloseIcon from "./CloseIcon";

const DialogTitle = (props) => {
    var closeIcon;
    if (props.hasCloseIcon !== false) {
        closeIcon = (
            <a className="ui-close" onClick={props.onClose}>
                <CloseIcon diameter={30} />
            </a>
        );
    }

    var minimizeIcon;
    if (props.hasMinimizeIcon) {
        if (props.isMinimized) {
            minimizeIcon = (
                <span className="dib mr2">
                    <i className="pointer icon icon-enlarge2" onClick={props.onRestore}></i>
                </span>
            );
        } else {
            minimizeIcon = (
                <span className="dib mr2">
                    <i className="icon icon-shrink2 pointer" onClick={props.onMinimize}></i>
                </span>
            );
        }
    }

    var maximizeIcon;
    if (props.hasMaximizeIcon) {
        if (props.isMaximized) {
            maximizeIcon = (
                <span className="dib mr2">
                    <i className="icon icon-shrink2" onClick={props.onRestore}></i>
                </span>
            );
        } else {
            maximizeIcon = (
                <span className="dib mr2">
                    <i className="icon icon-enlarge2 pointer" onClick={props.onMaximize}></i>
                </span>
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
                {props.titlebuttons}
                {closeIcon}
            </div>
        </header>
    );
};

DialogTitle.propTypes = {
    hasCloseIcon: PropTypes.bool,
    hasMinimizeIcon: PropTypes.bool,
    hasMaximizeIcon: PropTypes.bool,
    isMinimized: PropTypes.bool,
    isMaximized: PropTypes.bool,
    title: PropTypes.string,
    onClose: PropTypes.func.isRequired,
    onMinimize: PropTypes.func,
    onMaximize: PropTypes.func,
    onRestore: PropTypes.func
};

export default DialogTitle;