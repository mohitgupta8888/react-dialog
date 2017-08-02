# React Dialog

React component for dialog widget.

## Installation

React Dialog is available as an [npm package](https://www.npmjs.org/package/react-dialog-modal).
```sh
npm install react-dialog-modal
```

Use [browserify](http://browserify.org/) and [reactify](https://github.com/andreypopp/reactify) for dependency management and JSX transformation.

All styles written in CSS and are in css/index.css

## Demo

[http://mohitgupta8888.github.io/react-dialog-modal](https://mohitgupta8888.github.io/react-dialog/?selectedKind=React%20Dialog&selectedStory=basic&full=0&down=0&left=1&panelRight=0)

## Usage

```javascript
import Dialog from 'react-dialog-modal'
class Example extends React.Component {
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
```

## API

#### props.height

 - `Number`
 - default: "auto"
 - Whether overlay is added to dialog or not

#### props.width

 - `Number`
 - default: false
 - Whether overlay is added to dialog or not

#### props.modal

 - `Boolean`
 - default: false
 - Whether overlay is added to dialog or not

#### props.isDraggable

 - `Boolean`
 - default: false
 - Whether dialog is draggable

#### props.isResizable

 - `Boolean`
 - default: false
 - Whether dialog is resizable

#### props.title

 - `String` or `Element`
 - default: ''
 - This property 

#### props.onClose

 - `Function`
 - default: `null`
 - Set a function that will be triggered whenever there is a close event.

#### props.closeOnEscape

 - `Boolean`
 - Default: `false`
 - If true, the `props.onClose` event will be triggered if user presses Esc key on keyboard.


## License

MIT
