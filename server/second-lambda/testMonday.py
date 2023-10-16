from updateMonday import createNewItem, updateRow, getBoardContents
import os

MONDAY_API = os.environ.get("MONDAY_API")
TEST_BOARD_ID = '4565600141'

def testCreateNewItem():
    print(createNewItem(rowInfo, TEST_BOARD_ID, HEADERS))


def testUpdateRow():
    print(updateRow(itemID, rowInfo, TEST_BOARD_ID, HEADERS))


def testGetBoardContents():
    print(getBoardContents(MONDAY_API, TEST_BOARD_ID, {}))


if __name__ == '__main__':
    print("Testing createNewItem")
    testCreateNewItem()

    print("Testing updateRow")
    testUpdateRow()

    print("Testing getBoardContents")
    testGetBoardContents()

