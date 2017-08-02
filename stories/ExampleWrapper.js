import React from 'react';

const exampleWrapper = function (DialogComponent) {
    return class extends React.Component {
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
                        <DialogComponent
                            {...this.props}
                            onClose={this.handleClose}
                            buttons={
                                [{
                                    text: "Close",
                                    onClick: () => this.handleClose()
                                }]
                            }>
                            {
                                this.props.children || (
                                    <div>
                                        <h1>Dialog Content</h1>
                                        <p>More Content. Anything goes here</p>
                                    </div>
                                )
                            }
                        </DialogComponent>
                    }
                </div>
            );
        }
    }
}


export { exampleWrapper };