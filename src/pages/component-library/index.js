import React from 'react'

import Layout from '../../layouts'
import Button from '../../components/button'

const ComponentLibrary = () => (
  <Layout>
    <main className="style-guide">
      <div className="block navigation">
        <h1>Component Library</h1>
        <ul>
          <li><a href="#text">Text</a></li>
          <li><a href="#buttons">Buttons</a></li>
        </ul>
      </div>

      <div className="block headings" id="text">
        <h2>Text elements</h2>

        <h1>Heading one</h1>
        <h2>Heading two</h2>
        <h3>Heading three</h3>
        <p>Aliquam eget ante blandit nisl rhoncus bibendum. Nulla tempor nunc ac ligula aliquam, at rhoncus libero laoreet. Ut a purus vel nunc luctus accumsan quis id enim. Pellentesque convallis odio sed arcu scelerisque pellentesque.</p>
      </div>

      <div className="block headings" id="buttons">
        <h2>Buttons</h2>

        <Button text="Primary small" size="sm" style="primary" />
        <Button text="Primary medium" size="md" style="primary" />
        <Button text="Primary large" size="lg" style="primary" />

        <Button text="Secondary small" size="sm" style="secondary" />
        <Button text="Secondary medium" size="md" style="secondary" />
        <Button text="Secondary large" size="lg" style="secondary" />

        <Button text="Disabled" size="lg" style="primary" disabled />

        <Button text="Full width" size="lg" style="primary" fullWidth />
      </div>
    </main>
  </Layout>
)

export default ComponentLibrary
