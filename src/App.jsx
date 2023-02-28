import { useState } from 'react'
import { Button, Container, Input } from './components'

function App() {
  const [name, setName] = useState('')

  const handleNameChange = event => setName(event.target.value)

  return (
    <div>
      <Container as="div" className="custom-container bg-secondary">
        <h2>{name || 'No name provided !'}</h2>
        <p className="text-secondary">
          This is subtitle for container 1 ! how cool is that?
        </p>
        <Input
          label="Name"
          id="name"
          type="text"
          value={name}
          onChange={handleNameChange}
        />
        <Button primary onClick={() => setName('Button is clicked')}>
          Click me baby !
        </Button>
      </Container>
    </div>
  )
}

export default App
