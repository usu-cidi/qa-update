import boto3
from datetime import datetime

REGION_NAME = "us-east-2"


def checkRowExistence(tableName, theID, idName):
    try:
        item = getItem(tableName, theID, idName)["Item"]
        return item
    except KeyError:
        return None


def getItem(tableName, theID, keyName):
    dynamodb = boto3.resource('dynamodb', region_name=REGION_NAME)
    table = dynamodb.Table(tableName)

    response = table.get_item(Key={
        keyName: theID,
    })
    return response


def getAllDatabaseItems(tableName):
    resource = boto3.resource('dynamodb', region_name=REGION_NAME)

    table = resource.Table(tableName)
    response = table.scan()
    print(response["Items"])
    return response["Items"]


def addRowToInterDatabase(interID, tableName):
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


def addRowToTermDatabase(theID, name, triggerCol, tableName):
    dynamodb = boto3.resource('dynamodb', region_name=REGION_NAME)
    table = dynamodb.Table(tableName)

    response = table.put_item(
        Item={
            'id': theID,
            'Name': name,
            'TriggerColID': triggerCol,
        }
    )

    print(response)
    return response
