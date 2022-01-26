require('dotenv').config()

const path = require('path')
const writeFileAtomic = require('write-file-atomic')
const Cryptr = require('cryptr')
const cryptr = new Cryptr(process.env.CRYPTR)
const encrypted = require('./encrypted.json')

const users = JSON.parse(cryptr.decrypt(encrypted.users))
const data = JSON.parse(cryptr.decrypt(encrypted.data))

Promise.all(
  [
    ['./users.json', users],
    ['./data.json', data],
  ].map(([filename, decrypted]) =>
    writeFileAtomic(
      path.resolve(__dirname, filename),
      JSON.stringify(decrypted),
      'utf8'
    )
  )
)
  .then(process.exit)
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
