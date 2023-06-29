
# Copyright (C) 2023  Emma Lynn
#
#     This program is free software: you can redistribute it and/or modify
#     it under the terms of the GNU General Public License as published by
#     the Free Software Foundation, version 3 of the License.
#
#     This program is distributed in the hope that it will be useful,
#     but WITHOUT ANY WARRANTY; without even the implied warranty of
#     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#     GNU General Public License for more details.
#
#     You should have received a copy of the GNU General Public License
#     along with this program.  If not, see <https://www.gnu.org/licenses/>.

import os
from boxsdk import Client, OAuth2
import pandas as pd
import io

BOX_CLIENT_ID = os.environ.get("BOX_CLIENT_ID")
BOX_SECRET = os.environ.get("BOX_SECRET")


def getDataFromBox(fileId, fileType, accessToken, refreshToken):

    auth = OAuth2(
        client_id=BOX_CLIENT_ID,
        client_secret=BOX_SECRET,
        access_token=accessToken,
        refresh_token=refreshToken
    )
    client = Client(auth)

    file_info = client.file(fileId)

    some_bytes = file_info.get().content()

    toread = io.BytesIO()
    toread.write(some_bytes)  # pass your `decrypted` string as the argument here
    toread.seek(0)  # reset the pointer

    if fileType == "excel":
        boxData = pd.read_excel(toread)
    else:
        boxData = pd.read_csv(toread)

    return boxData
