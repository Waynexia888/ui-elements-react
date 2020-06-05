import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('Welcome page', module)
  .add('welcome', () => {
    return (
      <>
        <h1>Welcome to ui-elements-react🔥</h1>
        <p>
          ui-elements-react is a React UI component library that contains a set
          of high quality components and demos for building rich, interactive
          user interfaces. The goal of ui-elements-react is to provide a
          good development experience for programmers. Make sure that you have
          installed Node.js(> 8.0.0) correctly.
        </p>
        <br/>
        <h3>Import styled CSS 🎨 </h3>
        <p><code>import 'ui-elements-react/dist/index.css'</code></p>
        <br/>
        <h3>Installation📕</h3>
        <p>
          nstalling with npm is recommended and it works seamlessly with
          webpack.
        </p>
        <code>npm install ui-elements-react --save</code>
      </>
    );
  }, { info : { disable: true }})