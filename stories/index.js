import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Css from "../css/index.css";
//import Basic from "./basic";
import Dialog from "../src/index";
import { exampleWrapper } from "./ExampleWrapper";

const EnhancedDialog = exampleWrapper(Dialog);

storiesOf('React Dialog', module)
  .add('basic', () => (
    <EnhancedDialog
      title="Dialog Title"
    />
  ))
  .add('modal:true', () => (
    <EnhancedDialog
      title="Dialog Title"
      modal={true}
    />
  ))
  .add('width:700', () => (
    <EnhancedDialog
      title="Dialog Title"
      modal={true}
      width={700}
    />
  ))
  .add('height:700', () => (
    <EnhancedDialog
      title="Dialog Title"
      modal={true}
      height={700}
    />
  ))
  .add('isDraggable:true', () => (
    <EnhancedDialog
      title="Dialog Title"
      modal={true}
      isDraggable={true}
    />
  ))
 .add('isResizable:true', () => (
    <EnhancedDialog
      title="Dialog Title"
      modal={true}
      isResizable={true}
    />
  ));