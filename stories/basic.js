import React from 'react';
import Dialog from "../src/index";

class Basic extends React.Component {
    constructor() {
        super();
        this.state = {
            isDialogOpen: false
        }
    }

    openDialog = () => this.setState({ isDialogOpen: true })

    handleClose = () => this.setState({ isDialogOpen: false })

    render() {


        return (
            <div className="container">
                <button type="button" onClick={this.openDialog}>Open Dialog</button>
                {
                    this.state.isDialogOpen &&
                    <Dialog
                        title="Dialog Title"
                        modal={true}
                        onClose={this.handleClose}
                        buttons={
                            [{
                                text: "Close",
                                onClick: () => this.handleClose()
                            }]
                        }>
                        <h1>Dialog Content</h1>
                        <p>More Content. Anything goes here</p>
                    </Dialog>
                }
            </div>
        );
    }
}

export default Basic;