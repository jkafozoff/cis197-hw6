const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      'mongodb+srv://jkafozoff1:jkafozoff1@cluster0.yvweu.mongodb.net/hw7database?retryWrites=true&w=majority',
    )
    // console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (err) {
    console.log(`Error:${err.message}`)
    process.exit(1)
  }
}

module.exports = connectDB
