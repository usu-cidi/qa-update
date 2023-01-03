# Monday QA Board Automation Project
Center for Instructional Design and Innovation - Utah State University
* Created by Emma Lynn (a02391851@usu.edu)
* Supervised by Neal Legler, CIDI Director (neal.legler@usu.edu)
* On request from Neal Legler, CIDI Director & Christopher Phillips, Electronic & Information Technology Accessibility Coordinator

This repository contains a script that will:
* Pull an institution's accessibility report from Blackboard's Ally API
* Combine the accessibility report with other data generated from an institution's Canvas
* Merge that report with a template for merge into a QA board on monday.com

_Note: This program has only been tested on Macs up to this point. If you want to use this on another OS, you are welcome to try it and if there are issues please follow the Bug Report instructions at the bottom of this page to indicate your interest in better support for other Operating Systems._

## Start here!
In these instructions, I will walk you through the process of running this program.
We will be running the program using the Command Line. When I give you a command to run, it will look like this:
```
COMMAND
```
Press enter on your keyboard to run the commands once they have been entered.

Commands may or may not output text. Do not worry if some commands do not display anything.

* _A note: the terminal is an entirely text based application, so you won't be able to navigate the text with your mouse, you will need to use the arrows on the keyboard._


### Instructions

First you will need to get a copy of this project onto your computer.

_If you have experience with git/GitHub, feel free to simply clone the project onto your computer in the normal way. Then skip to setting up your environment._

_If you do not have experience with git/GitHub and would like to try cloning the project instead of downloading the project, follow the instructions in the Cloning a Repository section closer to the bottom of this page. 
The benefit of this method is that as maintenance is performed on the program, you will be able to easily access the updated version of the project._

Navigate to the Launchpad and open the Terminal application on your computer.

On GitHub, click the green Code button. In the dropdown, click Download ZIP.

Unwrap the ZIP file.

Navigate to the downloaded project with the following command.
```
cd Downloads/cidi-monday-QA-automation-main
```

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
```

* [Your Ally institutional ID] should be replaced with your unique Ally institutional ID
* [Your Ally consumer key] should be replaced with your Ally consumer key
* [Your Ally consumer secret] should be replaced with your Ally consumer secret
* [Semester/term code] should be replaced with the code for the term/semester you would like to pull data on (usually a three-digit number)
* [The name of the course report file] should be replaced with the name of the course report file (Meghan's data), INCLUDING EXTENSION

Once you have correctly filled in the text, press `CTRL + X` on your keyboard, followed by the `y` key, and then the `enter` key.


Now, run the following command:
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

<a name="run">**Running the program:**</a>

Run the following command to download the Ally report:
```commandline
python3 getAllyData.py
```

Notes:
* The API may take a few minutes to put together the zip file and download it to your machine


Run the following command to merge the reports with each other and the monday template:
To fill in a blank monday board (at the beginning of a new semester), run:
```commandline
bash generateFullFile.sh
```

or

**COMING SOON:** Update a monday board that already contains content (done throughout the semester)


_Note: you may receive the following warning:_
```angular2html
/Library/Frameworks/Python.framework/Versions/3.11/lib/python3.11/site-packages/pandas/core/internals/blocks.py:2323: RuntimeWarning: invalid value encountered in cast
  values = values.astype(str)
```
_It is being looked into and will be resolved soon but should not affect the performance of the script._

The file to import to monday will have been created within the project file. It will be called `import-to-monday.csv`.

Import the csv to monday.com with the `Update with Excel/CSV for monday.com` tool. (See https://adftech.net/monday/update-with-excel-csv)

### To rerun the program

Remove the courses.csv file from the project file.
Optional, but recommended so you don't get mixed up: remove the previous Ally zip file from your downloads.

Make sure you're in the correct folder in the terminal. Run the following command:
```angular2html
pwd
```
The resulting path should end with the name of the project file. (ex. `/Users/username/Desktop/CIDI/cidi-monday-QA-automation`)

Run the following command to update the term id or other information if necessary:
```angular2html
nano .env
```
Your command line has now been turned into a simple text editor. A reminder:
```commandline
CLIENT_ID=[Your Ally institutional ID]
CONSUMER_KEY=[Your Ally consumer key]
CONSUMER_SECRET=[Your Ally consumer secret]
TERM_CODE=[Semester/term code]
COURSE_REPORT_FILENAME=[The name of the course report file]
```

* [Your Ally institutional ID] should be replaced with your unique Ally institutional ID
* [Your Ally consumer key] should be replaced with your Ally consumer key
* [Your Ally consumer secret] should be replaced with your Ally consumer secret
* [Semester/term code] should be replaced with the code for the term/semester you would like to pull data on (usually a three-digit number)
* [The name of the course report file] should be replaced with the name of the course report file (Meghan's data), INCLUDING EXTENSION

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