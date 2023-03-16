from getBoxData import getDataFromBox

if __name__ == "__main__":
    fileId = '1166450429279'
    boxData = getDataFromBox(fileId)
    print(boxData.to_string())
