let MongoClient = require('mongodb').MongoClient
let Config = require('./config')

class Db {
  static getInstance() {
    if (!Db.instance) {
      Db.instance = new Db()
    }
    return Db.instance
  }

  constructor() {
    this.dbClient = ''
    this.connect()
  }

  connect() {
    let _that = this
    return new Promise((resolve, reject) => {
      if (!_that.dbClient) {
        MongoClient.connect(Config.dbUrl, (err, client) => {
          if (err) {
            reject(err)
          } else {
            _that.dbClient = client.db(Config.dbName)
            resolve(_that.dbClient)
          }
        })
      } else {
        resolve(_that.dbClient)
      }
    })
  }

  find(collectionName, json) {
    return new Promise((resolve, reject) => {
      this.connect().then((db) => {
        let result = db.collection(collectionName).find(json)
        result.toArray(function (err, docs) {
          if (err) {
            reject(err)
          } else {
            resolve(docs)
          }
        })
      })
    })
  }

  insert(collectionName, json) {
    return new Promise((resolve, reject) => {
      this.connect().then((db) => {
        db.collection(collectionName).insertOne(json, (err, docs) => {
          if (err) {
            reject(err)
          } else {
            resolve(docs)
          }
        })
      })
    })
  }
}

module.exports = Db.getInstance()