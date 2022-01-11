require('dotenv').config()

const path = require('path')
const { promises: fs } = require('fs')
const writeFileAtomic = require('write-file-atomic')
const Cryptr = require('cryptr')
const cryptr = new Cryptr(process.env.CRYPTR)

Promise.all([encrypt('users.json'), encrypt('data.json')])
  .then(([users, data]) =>
    writeFileAtomic(
      path.resolve(__dirname, 'encrypted.json'),
      JSON.stringify({ users, data }),
      'utf8'
    )
  )
  .then(process.exit)
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })

async function encrypt(from) {
  const source = await fs.readFile(path.resolve(__dirname, from), 'utf8')
  return cryptr.encrypt(source)
}
