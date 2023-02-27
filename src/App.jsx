import { useState } from 'react'
import { Button, Container, Input } from './components'

function App() {
  const [name, setName] = useState('')

  const handleNameChange = event => setName(event.target.value)

  return (
    <div>
      <Container as="div" className="custom-container bg-danger">
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
        <Button danger onClick={() => setName('Button is clicked')}>
          Click me baby !
        </Button>
      </Container>
      <Container as="div" className="custom-container bg-primary">
        <h2>Container 1</h2>
        <p>This is subtitle for container 2 ! and it has blue background !</p>
      </Container>
    </div>
  )
}

export default App
