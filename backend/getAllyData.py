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

from requests_oauthlib import OAuth1Session
import sys
import json
import time
import random

def getURL(allyClientId, allyConsumKey, allyConsumSec, termCode):
    #dotenv.load_dotenv(dotenv.find_dotenv())

    CONSUMER_KEY = allyConsumKey
    CONSUMER_SECRET = allyConsumSec
    CLIENT_ID = allyClientId
    TERM_CODE = termCode

    t = time.localtime()
    currentTime = time.strftime("%Y-%m-%d-%H-%M", t)
    beginTime = time.time()

    test = OAuth1Session(CONSUMER_KEY, client_secret=CONSUMER_SECRET)
    url = f'https://prod.ally.ac/api/v1/{CLIENT_ID}/reports/terms/{TERM_CODE}/csv?role=administrator&userId=1'#  &token={currentTime}'
    r = test.get(url)

    if (r.content == b'The supplied authentication is invalid'):
        print(r.content)
        print(r)
        return -1

    parsedOutput = json.loads(r.content)

    print("Pulling data from Ally API")
    print("Loading...\n")

    time.sleep(5)

    try:
        while not "url" in parsedOutput:
            r = test.get(url)
            parsedOutput = json.loads(r.content)
            if "status" in parsedOutput:
                print(f"Request ID: {parsedOutput['processId']}")
                print(f"Status: {parsedOutput['status']}\n")
                time.sleep(7)
            else:
                break

        print(f"\nDone in {time.time() - beginTime:.3f} seconds!")

        zipURL = str(r.content[8:-2])
        return zipURL[1:]
    except Exception as e:
        print(e)
        return -1


