export const notifyOps = (data: any) => {
 // IF TIME PERMITTED YOU COULD SETUP A CHANNEL TO NOTIFY OPS / DATA TEAM

  // Ideally we would want to keep track of this event and use domain events
  // and either publish to a message queue or use a pub/sub pattern to notify
  // something similar to CQRS would be great to keep track of events too
  // but for now we will just log it
  console.log('notifyOps', data)
}