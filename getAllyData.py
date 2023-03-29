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
import dotenv
import os
import sys
import json
import time
import random


def writeToReport(label, object):
    f = open("performanceReport3850265.txt", "a")
    f.write(f"{label}: {object}\n")
    f.close()


f = open("performanceReport3850265.txt", "w")
f.write("")
f.close()

def getURL():
    dotenv.load_dotenv(dotenv.find_dotenv())

    CONSUMER_KEY = os.environ.get('CONSUMER_KEY')
    CONSUMER_SECRET = os.environ.get('CONSUMER_SECRET')
    CLIENT_ID = os.environ.get('CLIENT_ID')
    TERM_CODE = os.environ.get('TERM_CODE')

    t = time.localtime()
    currentTime = time.strftime("%Y-%m-%d-%H-%M", t)
    beginTime = time.time()

    test = OAuth1Session(CONSUMER_KEY, client_secret=CONSUMER_SECRET)
    url = f'https://prod.ally.ac/api/v1/{CLIENT_ID}/reports/terms/{TERM_CODE}/csv?role=administrator&userId=1'#  &token={currentTime}'
    r = test.get(url)

    if (r.content == b'The supplied authentication is invalid'):
        print(r.content)
        print(r)
        return

    parsedOutput = json.loads(r.content)

    print("Pulling data from Ally API")
    print("Loading...\n")

    time.sleep(5)

    while not "url" in parsedOutput:
        writeToReport("Attempting API call with", url)
        r = test.get(url)
        parsedOutput = json.loads(r.content)
        if "status" in parsedOutput:
            writeToReport("API response pending...", parsedOutput['status'])
            writeToReport("ID", parsedOutput['processId'])
            writeToReport("parsedOutput", parsedOutput)
            print(f"Request ID: {parsedOutput['processId']}")
            print(f"Status: {parsedOutput['status']}\n")
            time.sleep(7)
        else:
            break

    print(f"\nDone in {time.time() - beginTime:.3f} seconds!")

    zipURL = str(r.content[8:-2])
    return zipURL[1:]

if __name__ == "__main__":
    writeToReport("getAllyData.py", "")

    dotenv.load_dotenv(dotenv.find_dotenv())

    CONSUMER_KEY = os.environ.get('CONSUMER_KEY')
    CONSUMER_SECRET = os.environ.get('CONSUMER_SECRET')
    CLIENT_ID = os.environ.get('CLIENT_ID')
    TERM_CODE = os.environ.get('TERM_CODE')

    t = time.localtime()
    currentTime = time.strftime("%Y-%m-%d-%H-%M", t)
    beginTime = time.time()

    test = OAuth1Session(CONSUMER_KEY, client_secret=CONSUMER_SECRET)
    url = f'https://prod.ally.ac/api/v1/{CLIENT_ID}/reports/terms/{TERM_CODE}/csv?role=administrator&userId=1&token={currentTime}'
    writeToReport("Attempting API call with", url)
    r = test.get(url)

    loadingMessages = ["Pulling data from Ally API...", "Loading...", "Going to space...", "Locating data...",
                       "Organizing spreadsheets...", "Connecting with Canvas...",
                       "Taking a coffee break (being a computer is hard work!)", "Loading...", "Loading...",
                       "Loading...", "Loading...", "Loading...", "Loading...",
                       "Rearranging solar panels...", "Hacking government computers...", "Preparing data...",
                       "Preparing data...", "API response pending...", "API response pending...",
                       "Preparing file...", "Solving the WORDLE...", "Loading...",
                       "Convincing reCAPTCHA I'm not a robot...", "Judging your OS...", "Preparing data..."]

    if (r.content == b'The supplied authentication is invalid'):
        print(r.content)
        print(r)
        sys.exit(1)

    parsedOutput = json.loads(r.content)

    print("Pulling data from Ally API")
    print("Loading...\n")

    while not "url" in parsedOutput:
        writeToReport("Attempting API call with", url)
        r = test.get(url)
        parsedOutput = json.loads(r.content)
        if "status" in parsedOutput:
            writeToReport("API response pending...", parsedOutput['status'])
            writeToReport("ID", parsedOutput['processId'])
            print(f"Request ID: {parsedOutput['processId']}")
            print(f"Status: {parsedOutput['status']}")
            print(f"{random.choice(loadingMessages)}\n")

            time.sleep(7)
        else:
            writeToReport("Process complete", r.content)
            print("Download complete.")
            break

    print(f"\nDone in {time.time() - beginTime:.3f} seconds!")
    writeToReport(f"Done in {time.time() - beginTime:.3f} seconds!", "")

    zipURL = str(r.content[8:-2])
    # print(zipURL[1:])
    os.system(f'open {zipURL[1:]}')
