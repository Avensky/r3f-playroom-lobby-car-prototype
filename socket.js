import { io } from 'socket.io-client'

// "undefined" means the URL will be computed from the `window.location` object
const URL = process.env.NODE_ENV === 'production' ? 'http://localhost:4000' : 'http://localhost:4000'

const socket = io(URL)
export default socket
