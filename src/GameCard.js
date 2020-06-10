import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  Card,
  CardActionArea,
  CardHeader,
  CardMedia,
  IconButton,
  Menu,
  MenuItem,
  Link
} from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  cardHeaderAction: {
    marginTop: 0
  },
  cardHeaderContent: {
    minWidth: 0
  },
  cardHeaderTitle: {
    fontSize: '1rem',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  }
})

function GameCard ({ game }) {
  const [anchorEl, setAnchorEl] = useState()
  const classes = useStyles()

  const handleOnClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleOnClose = () => {
    setAnchorEl()
  }

  return (
    <Card>
      <CardActionArea>
        <Link target="_blank" rel="noopener" href={`steam://run/${game.appid}`}>
          <CardMedia
            component="img"
            image={`http://media.steampowered.com/steamcommunity/public/images/apps/${game.appid}/${game.img_logo_url}.jpg`}
          />
        </Link>
      </CardActionArea>
      <CardHeader
        action={
          <IconButton onClick={handleOnClick} size="small">
            <MoreVertIcon />
          </IconButton>
        }
        classes={{
          action: classes.cardHeaderAction,
          content: classes.cardHeaderContent,
          title: classes.cardHeaderTitle
        }}
        title={game.name}
      />
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleOnClose}>
        <MenuItem onClick={handleOnClose}>Open directory</MenuItem>
        <MenuItem onClick={handleOnClose}>Remove</MenuItem>
      </Menu>
    </Card>
  )
}

GameCard.propTypes = {
  game: PropTypes.shape({
    appid: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    img_logo_url: PropTypes.string
  }).isRequired
}

export default GameCard
