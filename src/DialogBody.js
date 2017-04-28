import React from "react";

class DialogBody extends React.Component {
    render() {
        return (
            <div className="ui-dialog-content">
                {this.props.children}
            </div>
        );
    }
}

DialogBody.propTypes = {
    children: React.PropTypes.oneOfType([React.PropTypes.array, React.PropTypes.object])
};

export default DialogBody;