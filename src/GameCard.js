import React from 'react'
import {
  Button,
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton
} from '@material-ui/core'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import MoreVertIcon from '@material-ui/icons/MoreVert'

function GameCard () {
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
      <CardActions>
        <Button startIcon={<PlayArrowIcon />}>Launch</Button>
        <IconButton><MoreVertIcon /></IconButton>
      </CardActions>
    </Card>
  )
}

export default GameCard
