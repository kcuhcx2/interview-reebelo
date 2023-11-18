import { DynamoDB } from 'aws-sdk'

const dynamoDb = new DynamoDB.DocumentClient()

export const createDbOrder = async (order: any) => {
  const params = {
    TableName: 'Orders',
    Item: order
  }
  return dynamoDb.put(params).promise()
}

export const updateDbOrderStatus = async (order: any) => {
  const { orderId, status } = order
  const params = {
    TableName: 'Orders',
    Key: {
      orderId
    },
    UpdateExpression: 'set #status = :status',
    ExpressionAttributeNames: {
      '#status': 'status'
    },
    ExpressionAttributeValues: {
      ':status': status
    }
  }
  return dynamoDb.update(params).promise()
}

export const updateDbOrderShipping = async (order: any) => {
  const { orderId, shipping } = order
  const params = {
    TableName: 'Orders',
    Key: {
      orderId
    },
    UpdateExpression: 'set #tracking = :tracking',
    ExpressionAttributeNames: {
      '#shipping': 'shipping'
    },
    ExpressionAttributeValues: {
      ':shipping': shipping
    }
  }
  return dynamoDb.update(params).promise()
}