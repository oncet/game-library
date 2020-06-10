import React, { useState } from 'react'
import { Container, Toolbar } from '@material-ui/core'
import Header from './Header'
import Body from './Body'

function App () {
  const [filter, setFilter] = useState('')
  return (
    <Container>
      <Header onFilterChange={setFilter} />
      <Toolbar />
      <Body filter={filter} />
    </Container>
  )
}

export default App
