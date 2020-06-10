import React, { useCallback } from 'react'
import {
  AppBar,
  InputBase,
  Toolbar
} from '@material-ui/core'

function Header ({ onFilterChange }) {
  const handleOnChange = useCallback((event) => {
    onFilterChange(event.target.value)
  }, [onFilterChange])
  return (
    <AppBar>
      <Toolbar>
        <InputBase fullWidth placeholder="Filter" onChange={handleOnChange} />
      </Toolbar>
    </AppBar>
  )
}

export default Header
