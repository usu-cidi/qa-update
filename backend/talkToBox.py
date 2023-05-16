import dotenv
import os
from boxsdk import Client, OAuth2
import pandas as pd
import io

dotenv.load_dotenv(dotenv.find_dotenv())

BOX_CLIENT_ID = process.env.BOX_CLIENT_ID
#BOX_CLIENT_ID = os.environ.get("BOX_CLIENT_ID")
BOX_SECRET = process.env.BOX_SECRET
#BOX_SECRET = os.environ.get("BOX_SECRET")

def getDataFromBox(fileId, fileType, accessToken):

    auth = OAuth2(
        client_id=BOX_CLIENT_ID,
        client_secret=BOX_SECRET,
        access_token=accessToken
    )
    client = Client(auth)
    # me = client.user().get()
    # print(f'My user ID is {me.id}')

    file_info = client.file(fileId)
    # print(file_info.get().content())

    some_bytes = file_info.get().content()

    #binary_file = open("my_file.csv", "wb")
    #binary_file.write(some_bytes)
    #binary_file.close()

    toread = io.BytesIO()
    toread.write(some_bytes)  # pass your `decrypted` string as the argument here
    toread.seek(0)  # reset the pointer

    if fileType == "excel":
        boxData = pd.read_excel(toread)
    else:
        boxData = pd.read_csv(toread)

    return boxData
