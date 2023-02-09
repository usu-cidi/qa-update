# Monday QA Board Automation Project

## Instructions to Run Manually

If you have not already, navigate to the project folder by running the following command on the command line (replacing PATH with the path to 
the project folder):
```commandline
cd PATH
```

You can verify that you are in the correct place in your terminal my running the following command:
```commandline
pwd
```
The resulting path should end with the name of the project file. (ex. `/Users/username/Desktop/CIDI/cidi-monday-QA-automation`)


Now we need to set up your environment with your specific settings.

In finder, move your course report file (Meghan's data) into the file containing this project (the one you unzipped).

Run the following command:
```commandline
nano .env
```

Your command line has now been turned into a simple text editor. Copy the text below and paste into the file, replacing the filler text with your information.
  ```commandline
CLIENT_ID=[Your Ally institutional ID]
CONSUMER_KEY=[Your Ally consumer key]
CONSUMER_SECRET=[Your Ally consumer secret]
TERM_CODE=[Semester/term code]
COURSE_REPORT_FILENAME=[The name of the course report file]
MONDAY_API_KEY=[Your API key for monday.com]
BOARD_ID=[Your monday.com board id]
```

* [Your Ally institutional ID] should be replaced with your unique Ally institutional ID
* [Your Ally consumer key] should be replaced with your Ally consumer key
* [Your Ally consumer secret] should be replaced with your Ally consumer secret
* [Semester/term code] should be replaced with the code for the term/semester you would like to pull data on (usually a three-digit number)
* [The name of the course report file] should be replaced with the name of the course report file (Meghan's data), INCLUDING EXTENSION
* [Your API key for monday.com] should be replaced with your API key for monday.com (See https://developer.monday.com/api-reference/docs/authentication)
* [The id for the monday board you're updating] should be replaced with the board id for the monday.com board you're updating (See https://support.monday.com/hc/en-us/articles/360000225709-Board-item-column-and-automation-or-integration-ID-s)

Once you have correctly filled in the text, press `CTRL + X` on your keyboard, followed by the `y` key, and then the `enter` key.

Download `Python` if you have not already. See https://www.python.org/downloads/.

Now, run the following command in the terminal:
```commandline
bash installDepend.sh
```

_If you receive an error here that says something like:_
```commandline
xrun: error: invalid active developer path (/Library/Developer/CommandLineTools), missing xcrun at: /Library/Developer/CommandLineTools/usr/bin/xcrun
```
_Run:_
```commandline
xcode-select --install
```
_And try the previous command again._


Your environment has now been set up!

### <a name="run">**Running the program**</a>

Run the following command to download the Ally report:
```commandline
python3 getAllyData.py
```

Notes:
* The API may take a few minutes to put together the zip file and download it to your machine

Unzip the Ally report file. Move `courses.csv` into the project folder.


Run the following command to merge the reports with each other and the monday template:


To fill in a blank monday board (at the beginning of a new semester), run:
```commandline
bash fillNewBoard.sh
```

OR

To update a monday board that already contains content (done throughout the semester), run:
```commandline
bash updateBoard.sh
```


_Note: you may receive the following warning:_
```commandline
/Library/Frameworks/Python.framework/Versions/3.11/lib/python3.11/site-packages/pandas/core/internals/blocks.py:2323: RuntimeWarning: invalid value encountered in cast
  values = values.astype(str)
```
_It is being looked into and will be resolved soon but should not affect the performance of the script._

When the script finishes running, the board will have been updated automatically on monday.com.

### To rerun the program

Remove the courses.csv file from the project file.
Optional, but recommended so you don't get mixed up: remove the previous Ally zip file from your downloads.

Make sure you're in the correct folder in the terminal. Run the following command:
```commandline
pwd
```
The resulting path should end with the name of the project file. (ex. `/Users/username/Desktop/CIDI/cidi-monday-QA-automation`)

Run the following command to update the term id or other information if necessary:
```commandline
nano .env
```
Once you have correctly filled in the text, press `CTRL + X` on your keyboard, followed by the `y` key, and then the `enter` key.

Now restart these instructions beginning at [**Running the program**](#run)



### Cloning a GitHub repository:
Run the following commands:
```commandline
cd Desktop
```
```commandline
git clone https://github.com/elynn-usu/cidi-monday-QA-automation.git qa-update-script
```
```commandline
cd qa-update-script
```
_If you receive an error that says something like:_
```commandline
xrun: error: invalid active developer path (/Library/Developer/CommandLineTools), missing xcrun at: /Library/Developer/CommandLineTools/usr/bin/xcrun
```
_Run:_
```commandline
xcode-select --install
```
_And try the previous command again._

You should now have a copy of the project on your computer. To get the latest changes before running the program in the future, run the following commands 
(after opening a new terminal window):
```commandline
cd Desktop/quiz-data-script
```
```commandline
git pull origin main
```
The project should update with any changes and bug fixes.

_If you are having issues with cloning the project, feel free to go back and try downloading the zip as is instructed in the original instructions. You can also email me (a02391851@usu.edu) and I can help you set everything up if you would prefer._

You can now return to the original instructions. Begin at the section on setting up your environment.

## Bug Reports
If something behaves unexpectedly, or you run into a problem with the program, please let me know.

Send bug reports to a02391851@usu.edu with the subject line "Bug Report - Monday QA Automation".

Please include:
* What you expected to happen
* What actually happened
* As much output from the terminal as possible - copy and pasted, not in a screenshot
* Look in the project folder. The file performanceReport0000000.txt may have been created (where `0000000` is a generated 7 digit number). Please attach this file to your bug report if it has been created.
* What OS you're using (Windows, Mac)
* Any other information that you think could be useful

I will get back to you promptly with an update. Thank you.