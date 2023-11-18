import { DynamoDB } from 'aws-sdk'

const dynamoDb = new DynamoDB.DocumentClient()

export const createDbProduct = async (product: any) => {
  const params = {
    TableName: 'Products',
    Item: product
  }
  return dynamoDb.put(params).promise()
}

export const updateDbProduct = async (product: any) => {
  const { productId, quantity, price } = product
  const params = {
    TableName: 'Products',
    Key: {
      productId
    },
    UpdateExpression: 'set #quantity = :quantity, #price = :price',
    ExpressionAttributeNames: {
      '#quantity': 'quantity',
      '#price': 'price'
    },
    ExpressionAttributeValues: {
      ':quantity': quantity,
      ':price': price
    }
  }
}