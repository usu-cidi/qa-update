from updateMonday import createNewItem, updateRow, getBoardContents
from dotenv import dotenv_values

config = dotenv_values(".env")

MONDAY_API = config["MONDAY_API"]
TEST_BOARD_ID = '4565600141'


def testCreateNewItem():
    rowInfo = ['New test one we added', 'https://usu.instructure.com/courses/741171',
               'https://usu.instructure.com/courses/741171/external_tools/28805',
               'https://usu.instructure.com/courses/741171/external_tools/29768', 'Rachel Turner', 'a02342628@usu.edu',
               'EEJ Education & Human Services', 'Teacher Education & Leadership', 'Broadcast', 101, 0.3854166667,
               307, 43, 0.1400651466, 96, 37.0, 18, 5, 31, 0, 0, 20, 'hidden', 0.549026125, 0.42329011590000004,
               0.9868298193, 96, 0.1875, 8, 94, 57, 0.1382978723]
    headers = {"Authorization": MONDAY_API}
    print(createNewItem(rowInfo, TEST_BOARD_ID, headers))


def testUpdateRow():
    rowInfo = ['Spring 2023 BIOL-3095-003', 'we changed it',
               'https://usu.instructure.com/courses/741171/external_tools/28805',
               'https://usu.instructure.com/courses/741171/external_tools/29768', 'Rachel Turner', 'a02342628@usu.edu',
               'EEJ Education & Human Services', 'Teacher Education & Leadership', 'Broadcast', 101, 0.3854166667,
               307, 43, 0.1400651466, 96, 37.0, 18, 5, 31, 0, 0, 20, 'hidden', 0.549026125, 0.42329011590000004,
               0.9868298193, 96, 0.1875, 8, 94, 57, 0.1382978723]
    headers = {"Authorization": MONDAY_API}
    print(updateRow('4566367052', rowInfo, TEST_BOARD_ID, headers))


def testGetBoardContents():
    correctAnswer = {'Spring 2023 BIOL-3095-003': '4566367052', 'Spring 2023 PE-1900-025': '4566205933',
                     'Spring 2023 PE-1030-003': '4566367144', 'Spring 2023 PE-1261-001': '4566206009',
                     'Spring 2023 PE-1549-001': '4566368182', 'Spring 2023 BIOL-3095-002': '4566368672',
                     'Spring 2023 PE-2090-PT1': '4566206151'}
    realAnswer = getBoardContents(MONDAY_API, TEST_BOARD_ID, {})
    print(f"Result: {realAnswer}")
    assert realAnswer == correctAnswer


if __name__ == '__main__':
    print("Testing getBoardContents")
    testGetBoardContents()

    print("Testing createNewItem")
    testCreateNewItem()

    print("Testing updateRow")
    testUpdateRow()
