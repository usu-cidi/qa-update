import boto3
from datetime import datetime

REGION_NAME = "us-east-2"


def checkRowExistence(tableName, id, idName):
    try:
        item = getItem(tableName, id, idName)["Item"]
        return item
    except KeyError:
        return None


def getItem(tableName, id, keyName):
    dynamodb = boto3.resource('dynamodb', region_name=REGION_NAME)
    table = dynamodb.Table(tableName)

    response = table.get_item(Key={
        keyName: id,
    })
    return response


def getAllDatabaseItems(tableName):
    resource = boto3.resource('dynamodb', region_name=REGION_NAME)

    table = resource.Table(tableName)
    response = table.scan()
    print(response["Items"])
    return response["Items"]


def addRowToDatabase(interID, tableName):
    dynamodb = boto3.resource('dynamodb', region_name=REGION_NAME)
    table = dynamodb.Table(tableName)

    response = table.put_item(
        Item={
            'InterID': interID,
            'DateLastAccessed': str(datetime.now()),
        }
    )

    print(response)
    return response


def updateDatabaseRow(id, tableName):  # TODO: add optional parameters once we have more in there
    dynamodb = boto3.resource('dynamodb', region_name=REGION_NAME)
    table = dynamodb.Table(tableName)

    response = table.update_item(
        Key={
            'InterID': id
        },
        UpdateExpression='SET DateLastAccessed = :currTime',
        ExpressionAttributeValues={
            ':currTime': str(datetime.now())
        },
        ReturnValues="UPDATED_NEW"
    )

    print(response)
    return response