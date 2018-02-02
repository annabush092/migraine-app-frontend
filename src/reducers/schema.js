import { schema } from 'normalizr';

// Define a triggerLogs schema
export const triggerLog = new schema.Entity('triggerLogs')

// Define a triggers schema
export const trigger = new schema.Entity('triggers', {
  triggerLogs: [triggerLog]
})
