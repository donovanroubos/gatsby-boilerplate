import React from 'react'

import Layout from '../../layouts'
import Button from '../../components/Button'
import Input from '../../components/form/Input'
import Checkbox from '../../components/form/Checkbox'
import RadioButton from '../../components/form/RadioOption'
import Select from '../../components/form/Select'

const ComponentLibrary = () => (
  <Layout>
    <main className="style-guide">
      <div className="block navigation">
        <h1>Component Library</h1>
        <ul>
          <li><a href="#text">Text</a></li>
          <li><a href="#buttons">Buttons</a></li>
          <li><a href="#inputs">Inputs</a></li>
          <li><a href="#checkbox">Checkbox</a></li>
        </ul>
      </div>

      <div className="block headings" id="text">
        <h2>Text elements</h2>

        <h1>Heading one</h1>
        <h2>Heading two</h2>
        <h3>Heading three</h3>
        {/* eslint-disable-next-line */}
        <p>Aliquam eget ante blandit nisl rhoncus bibendum. Nulla tempor nunc ac ligula aliquam, at rhoncus libero laoreet. Ut a purus vel nunc luctus accumsan quis id enim. Pellentesque convallis odio sed arcu scelerisque pellentesque.</p>
      </div>

      <div className="block headings" id="buttons">
        <h2>Buttons</h2>

        <Button text="Primary small" size="sm" variant="primary" />
        <Button text="Primary medium" size="md" variant="primary" />
        <Button text="Primary large" size="lg" variant="primary" />

        <Button text="Secondary small" size="sm" variant="secondary" />
        <Button text="Secondary medium" size="md" variant="secondary" />
        <Button text="Secondary large" size="lg" variant="secondary" />

        <Button text="Disabled" size="lg" variant="primary" isDisabled />
        <Button text="Disabled" size="lg" variant="secondary" isDisabled />

        <Button text="Full width" size="lg" variant="primary" isFullWidth />
      </div>

      <div className="block inputs" id="inputs">
        <h2>Inputs</h2>

        <Input type="text" label="Text" name="text-input" />
        <Input type="password" label="Password" name="password" />
        <Input type="text" label="Disabled" isDisabled name="disabled" />
      </div>

      <div className="block" id="checkbox">
        <h2>Checkbox</h2>

        <Checkbox isDisabled />
        <Checkbox label="Checkbox" isDisabled />
        <Checkbox label="Checkbox" id="checkbox-1" />
      </div>

      <div className="block" id="radio-button">
        <h2>Radio button</h2>

        <RadioButton isDisabled />
        <RadioButton label="Radio button 2" isDisabled />
        <RadioButton name="test-123" value="Radio button 3" label="Radio button 3" />
        <RadioButton name="test-123" value="Radio button 4" label="Radio button 4" />
        <RadioButton name="test-123" value="Radio button 5" label="Radio button 5" />
      </div>

      <div className="block" id="select">
        <h2>Select</h2>
        <Select isDisabled />
        <Select />
      </div>
    </main>
  </Layout>
)

export default ComponentLibrary
