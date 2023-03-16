import json
import requests
import dotenv
import os
from boxsdk import Client, OAuth2

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

    file_id = '1166450429279'
    file_info = client.file(file_id)
    #print(file_info)
    #print(dir(file_info))
    #print(file_info.get())
    #print(dir(file_info.get()))
    print(file_info.get().content)
    print(dir(file_info.get().content))

