import dotenv
import os
from boxsdk import Client, OAuth2
import pandas as pd
import io

if __name__ == '__main__':
    dotenv.load_dotenv(dotenv.find_dotenv())

    auth = OAuth2(
        client_id=os.environ.get('BOX_CLIENT_ID'),
        client_secret=os.environ.get('BOX_SECRET'),
        access_token="",
    )
    client = Client(auth)
    me = client.user().get()
    print(f'My user ID is {me.id}')

    file_id = '1158649874756'
    file_info = client.file(file_id)
    # print(file_info.get().content())

    some_bytes = file_info.get().content()

    # binary_file = open("my_file.xlsx", "wb")
    # binary_file.write(some_bytes)
    # binary_file.close()

    toread = io.BytesIO()
    toread.write(some_bytes)  # pass your `decrypted` string as the argument here
    toread.seek(0)  # reset the pointer

    boxData = pd.read_excel(toread)  # now read to dataframe
    print(boxData.to_string())







