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
        <div className="footer--popup">
            {dialogButtons}
        </div>
    );
};

DialogFooter.propTypes = {
    buttons: React.PropTypes.array,
    onClose: React.PropTypes.func.isRequired
};

export default DialogFooter;