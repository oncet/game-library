import ownedGames from './ownedGames.json'

const steamClient = {}

steamClient.getOwnedGames = () => ownedGames.response.games.slice(0, 60)

export default steamClient
