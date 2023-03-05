/*-------------------------------------------------------------------
|
|                        🐼 Hello there!
|
|   I've built this application to demonstrate how to create reusable
|   functional components in React. To read the full blog post, please
|   visit the following link:
|   
|   🔗 Read on hashnode : https://yazdun.hashnode.dev/creating-reusable-react-components
|   🔗 Starter files    : https://github.com/Yazdun/react-create-reusable-components/tree/starter
|
*-------------------------------------------------------------------*/

import { useState } from 'react'
import { Button, Container, Input } from './components'

function App() {
  const [name, setName] = useState('')
  const handleNameChange = event => setName(event.target.value)

  return (
    <div>
      <Container as="div">
        <h2>{name || 'No name provided !'}</h2>
        <p className="text-secondary">
          This is subtitle for the container ! how cool is that?
        </p>
        <Input
          label="Name"
          placeholder="write something ..."
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
