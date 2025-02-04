import cron from 'node-cron'
import { deleteUnconfirmedUsers } from './tasks/deleteUnconfirmed'
import { EVERY_MINUTE } from './utils'

export const deleteUnconfirmedCronJob = cron.schedule(
  EVERY_MINUTE,
  deleteUnconfirmedUsers
)
