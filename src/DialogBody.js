import React from "react";
import PropTypes from "prop-types";

class DialogBody extends React.Component {
    render() {
        return (
            <div className="ui-dialog-content" style={{ "overflowY": "auto" }}>
                {this.props.children}
            </div>
        );
    }
}

DialogBody.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

export default DialogBody;