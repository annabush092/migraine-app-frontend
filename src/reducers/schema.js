import { schema } from 'normalizr';

// Define a triggerLogs schema
const triggerLog = new schema.Entity('trigger_logs')

// Define a triggers schema
export const trigger = new schema.Entity('triggers', {
  trigger_logs: [triggerLog]
})
