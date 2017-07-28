import PropTypes from "prop-types";
import React from "react";

class DialogBody extends React.Component {
    render() {
        return (
            <div className="ui-dialog-content custom--filters pa2" style={{ "overflowY": "auto" }}>
                {this.props.children}
            </div>
        );
    }
}

DialogBody.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

export default DialogBody;