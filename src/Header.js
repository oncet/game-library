import React, { useRef } from 'react'
import {
  AppBar,
  InputBase,
  Toolbar
} from '@material-ui/core'

const debounce = (fn, time) => {
  let timeoutId
  const wrapper = (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(() => {
      timeoutId = null
      fn(...args)
    }, time)
  }
  return wrapper
}

function Header ({ onFilterChange }) {
  const inputRef = useRef()
  const handleOnChange = debounce(() => {
    onFilterChange(inputRef.current.value)
  }, 500)
  return (
    <AppBar>
      <Toolbar>
        <InputBase
          fullWidth
          inputRef={inputRef}
          onChange={handleOnChange}
          placeholder="Filter"
        />
      </Toolbar>
    </AppBar>
  )
}

export default Header
