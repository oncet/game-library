import React, { useState } from 'react'
import {
  Button,
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
  Menu,
  MenuItem
} from '@material-ui/core'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  actions: {
    justifyContent: 'space-between'
  }
})

function GameCard () {
  const [anchorEl, setAnchorEl] = useState()
  const classes = useStyles()
  const handleOnClick = event => setAnchorEl(event.currentTarget)
  const handleOnClose = () => setAnchorEl()
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          image="/logo512.png"
        />
        <CardContent>
          Team Fortress 2
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.actions}>
        <Button startIcon={<PlayArrowIcon />}>Launch</Button>
        <IconButton onClick={handleOnClick}><MoreVertIcon /></IconButton>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleOnClose}>
          <MenuItem onClick={handleOnClose}>Open directory</MenuItem>
          <MenuItem onClick={handleOnClose}>Remove</MenuItem>
        </Menu>
      </CardActions>
    </Card>
  )
}

export default GameCard
