import Cryptr from 'cryptr'
import type { Unlocked } from 'hooks/useUnlocked'
import parsePhoneNumber from 'libphonenumber-js'
import type { NextApiRequest, NextApiResponse } from 'next'

import encrypted from '../../encrypted.json'

type Data = Unlocked | { error: string }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'POST') {
    return res.status(404).json({ error: 'Method not allowed' })
  }
  if (!req.body.password.trim()) {
    return res.status(400).json({ error: 'Password is required' })
  }
  if (!process.env.CRYPTR) {
    console.error('CRYPTR environment variable is not set')
    return res.status(500).json({ error: 'Internal Server Error' })
  }
  try {
    const cryptr = new Cryptr(process.env.CRYPTR)
    try {
      const users = JSON.parse(cryptr.decrypt(encrypted.users))
      if (!(req.body.password in users)) {
        return res.status(401).json({ error: 'Password is incorrect' })
      }
      const user = users[req.body.password]
      try {
        const data = JSON.parse(cryptr.decrypt(encrypted.data))
        if (data.phone) {
          const phoneNumber = parsePhoneNumber(data.phone)
          data.phoneUrl = phoneNumber.getURI()
          data.phone = phoneNumber.formatInternational()
        }
        if (data.references) {
          data.references.forEach((reference) => {
            if (reference.phone && !reference.phoneUrl) {
              const phoneNumber = parsePhoneNumber(reference.phone)
              reference.phoneUrl = phoneNumber.getURI()
              reference.phone = phoneNumber.formatInternational()
            }
          })
        }

        return res.status(200).json({ user, data })
      } catch (err) {
        console.error('Failed to decrypt data json', err)
        return res.status(500).json({ error: 'Internal Server Error' })
      }
    } catch (err) {
      console.error('Failed to decrypt users json', err)
      return res.status(500).json({ error: 'Internal Server Error' })
    }
  } catch (err) {
    console.error('Failed to init Cryptr', err)
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}
