import React from 'react'
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia
} from '@material-ui/core'

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
    </Card>
  )
}

export default GameCard
