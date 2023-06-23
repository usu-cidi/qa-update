# Monday QA Board Update Tool
Center for Instructional Design and Innovation - Utah State University
* Created by Emma Lynn (a02391851@usu.edu)
* Supervised by Neal Legler, CIDI Director (neal.legler@usu.edu)
* On request from Neal Legler, CIDI Director & Christopher Phillips, Electronic & Information Technology Accessibility Coordinator

This repository contains code that will:
* Pull an institution's accessibility report from Blackboard's Ally API
* Combine the accessibility report with other data generated from an institution's Canvas
* Use that data to automatically update USU's QA board on monday.com

This tool is currently hosted at: https://master.d3kepc58nvsh8n.amplifyapp.com/

Active version: **1.1.0**

To use this tool on the command line, switch to the branch `archive/cli`.
* Note: the command line version of the tool has been deprecated. Usage is discouraged, please use the new web application.

## Usage
* Navigate to https://master.d3kepc58nvsh8n.amplifyapp.com/.
* To download the most recent Ally Accessibility report, enter your Ally credentials and the term code.
If you do not have the institutional Ally credentials, reach out to Christopher Phillips.
  * Current term codes:
    * Summer 2023: 888
    * Fall 2023: 889
* Wait until a link appears, and then click on it to download the Ally report. This may take several minutes.
* You will download a `zip` file. Unzip the file, and you will have a folder with two files, `courses.csv`
and `terms.csv`. You will upload `courses.csv` in a moment. Click the `Next` button.
* Wait if directed. When the `Authorize this app on Box.com` button appears, click on it to
authorize access to your Box account.
  * Click Use Single Sign On (SSO) and then enter your @usu.edu email to sign in to Box.
  * Note that you must have a USU Box account to use this application, and you must have access
  to the Course Report file you want to use the update the QA board.
* Upload `courses.csv` and click the `Upload` button. You will receive a completion message when the upload is finished. It may take a moment for the message to appear. If it takes longer than around 3 minutes, try uploading it again.
* Enter your [API key for monday.com](https://support.monday.com/hc/en-us/articles/360005144659-Does-monday-com-have-an-API-#h_01EZ9M2KTTMA4ZJERGFQDYM4WR).
* Select `Update existing board` if you are updating a board that already exists (mid-semester). Select `Fill in new board` if you are filling in a completely blank board at the beginning of a semester.
* Enter the [board id](https://support.monday.com/hc/en-us/articles/360000225709-Board-item-column-and-automation-or-integration-ID-s) for the monday.com board you're updating (found in the url).

<img src="./doc/mon-ex.png">

* Enter the [Box file ID](https://developer.box.com/reference/get-files-id/#:~:text=The%20ID%20for%20any%20file,123%20the%20file_id%20is%20123%20) for the most recent Course Summary file from the Canvas Data Reports (found in the url). 

<img src="./doc/box-ex.png">

* Enter your email. A completion report will be sent to you once the update is complete.
* Click `Submit`. Note that the update cannot be stopped once it is initiated.
* The update will begin. The monday board will be automatically updated using the API. You will
receive an email when the update is complete.

Note: currently, only one update can be run at a time. This functionality will be updated in future versions.

## Future Versions

### Features to be added
* Running more than one update at a time
* A report in the completion email of any courses that failed to add/update
* A simpler/more intuitive data flow

### Features that may be added
* Cancelling update once initiated

## Prepping a New QA Board
When a new QA Board has been created and needs to be populated with data, follow these steps to prep the board.
* Add the following automations to the board:

<img src="./doc/automations.png">

* If the columns `Update status` and `Last updated` do not already exist, add them to the end of the columns of the main board and hide them from the `QA View`.
* Let the developer in charge of maintenance on this tool (currently Emma Lynn - a02391851@usu.edu) that a new term needs to be opened.
* When you are notified that support for the new board has been added, select `Fill in new board` when updating the board using the tool.

## Change Log

### 1.1.0
* Added support for larger terms like Fall & Spring
* Added a report courses that failed to add to the completion email
* Added immediate failure and response to client if board ID is not recognized
* Changed order of user flow to prevent Box Authentication timeouts
* Added a 404: Not Found page
* Added a condition to change rows with `College` listed as unsupported `Disability Resource Center` to `University`
* Changed the monday completion status from `Updated` to `Done` to conform better with the rest of the boards

### 1.0.0
5.31.23
* Initial release as web application

## Bug Reports
If something behaves unexpectedly, or you run into a problem with the program, please let me know.

Fill out a bug report [here](https://master.d3kepc58nvsh8n.amplifyapp.com/bug-report), 
or if the bug is affecting the operation of this form, follow the following steps:

Send bug reports to a02391851@usu.edu with the subject line "Bug Report - Monday QA Webhook".

Please include:
* What you expected to happen
* What actually happened
* Right click the page where you encountered the issue and click `inspect`. 
 Expand the window if necessary and click on `Console`. Please copy and paste the content of the window into your bug report.
* The date and approximate time you attempted to use the application
* Any other information that you think could be useful

I will get back to you promptly with an update. Thank you.