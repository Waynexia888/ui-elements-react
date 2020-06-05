import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('Welcome page', module)
  .add('welcome', () => {
    return (
      <>
        <h1>Welcome to ui-elements-react 👍</h1>
        <p>
          ui-elements-react is dedicated to providing a good development
          experience for programmers. Make sure that you have installed
          Node.js(> 8.0.0) correctly.
        </p>
        <h3>Installation</h3>
        <p>
          nstalling with npm is recommended and it works seamlessly with
          webpack.
        </p>
        <code>npm install ui-elements-react --save</code>
      </>
    );
  }, { info : { disable: true }})