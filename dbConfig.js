const mongodb = require('mongodb')
const dbName = 'ZenStdDashboard'
const dbUrl = `mongodb+srv://mani143tech:mani4213@cluster0.ckxmigv.mongodb.net/${dbName}?retryWrites=true&w=majority`
const MongoClient=mongodb.MongoClient
module.exports ={mongodb,dbName,dbUrl,MongoClient}