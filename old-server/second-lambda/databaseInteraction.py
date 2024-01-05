import boto3

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
