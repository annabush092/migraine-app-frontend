import { normalize, schema } from 'normalizr';

// Define a triggers schema
const trigger = new schema.Entity('triggers');

// Define a triggerLogs schema
const triggerLog = new schema.Entity('triggerLogs', {
  trigger: trigger;
})

const normalizedData = normalize(originalData, triggerLog)


// example 
// // Define your comments schema
// const comment = new schema.Entity('comments', {
//   commenter: user
// });
//
// // Define your article
// const article = new schema.Entity('articles', {
//   author: user,
//   comments: [ comment ]
// });
//
// const normalizedData = normalize(originalData, article);
