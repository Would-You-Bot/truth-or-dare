import cron from 'node-cron'
import { EVERY_MINUTE } from './utils'
import { deleteUnconfirmedUsers } from './tasks/deleteUnconfirmed'

export const deleteUnconfirmedCronJob = cron.schedule(
  EVERY_MINUTE,
  deleteUnconfirmedUsers
)
