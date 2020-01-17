const mongoose = require('mongoose')

require('./User')


const options = {
  autoIndex: false, // Don't build indexes
  poolSize: 10, // Maintain up to 10 socket connections
  bufferMaxEntries: 0,
  connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  family: 4,
  useNewUrlParser: true,
  useUnifiedTopology: true
};

const urlDataBase = process.env.urlDataBase // Set your Data Base URL here
//Production
mongoose.connect(urlDataBase, options)


const db = mongoose.connection
db.on('error', () => {
  throw new Error('unable to connect to database at ' + db)
})
