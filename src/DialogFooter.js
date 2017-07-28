import PropTypes from "prop-types";
import React from "react";
import DialogButton from "./DialogButton";

const DialogFooter = (props) => {
    var buttons = props.buttons;
    if (!buttons)
        return false;

    var dialogButtons = [];
    buttons.forEach(function (button, index) {
        dialogButtons.push(<DialogButton key={"button-" + index} {...button} onClose={props.onClose} />);
    }, this);

    if (dialogButtons.length == 0)
        return false;

    return (
        <div className="ui-dialog-buttonpane ui-dialog-buttonset">
            {dialogButtons}
        </div>
    );
};

DialogFooter.propTypes = {
    buttons: PropTypes.array,
    onClose: PropTypes.func.isRequired
};

export default DialogFooter;