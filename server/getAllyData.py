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
import json
import random

LOADING_MESSAGES = ["Pulling data from Ally API...", "Loading...", "Going to space...", "Locating data...",
                    "Organizing spreadsheets...", "Connecting to Canvas...",
                    "Taking a coffee break (being a web server is hard work!)...", "Loading...", "Loading...",
                    "Loading...", "Loading...", "Loading...", "Loading...",
                    "Rearranging solar panels...", "Hacking government computers...", "Preparing data...",
                    "Preparing data...", "API response pending...", "Waiting for response...",
                    "Preparing file...", "Solving the WORDLE...", "Loading...", "Reading files...",
                    "Convincing reCAPTCHA I'm not a robot...", "Preparing data...", "Flirting with ChatGPT...",
                    "Rearranging solar panels...", "Going to space...", "Going to space...", "Thinking...",
                    "Checking out a library book...", "Running a mile...", "Thinking...", "Getting lost in Roku city..."
                    ]


def startGettingUrl(allyClientId, allyConsumKey, allyConsumSec, termCode):
    CONSUMER_KEY = allyConsumKey
    CONSUMER_SECRET = allyConsumSec
    CLIENT_ID = allyClientId
    TERM_CODE = termCode

    test = OAuth1Session(CONSUMER_KEY, client_secret=CONSUMER_SECRET)
    url = f'https://prod.ally.ac/api/v1/{CLIENT_ID}/reports/terms/{TERM_CODE}/csv?role=administrator&userId=1'
    r = test.get(url)

    if r.content == b'The supplied authentication is invalid':
        print(r.content)
        print(r)
        return -1

    print("Pulling data from Ally API")
    print("Loading...\n")

    try:
        r = test.get(url)
        parsedOutput = json.loads(r.content)
        if "status" in parsedOutput:
            print("Still waiting....")
            print(f"Request ID: {parsedOutput['processId']}")
            print(f"Status: {parsedOutput['status']}\n")

            theMessage = random.choice(LOADING_MESSAGES)
            print(theMessage)
            return theMessage
        else:
            print("We have the link!")
            zipURL = str(r.content[8:-2])
            return zipURL[1:]

    except Exception as e:
        print(e)
        return -1
