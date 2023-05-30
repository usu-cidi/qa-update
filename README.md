# Monday QA Board Automation Project
Center for Instructional Design and Innovation - Utah State University
* Created by Emma Lynn (a02391851@usu.edu)
* Supervised by Neal Legler, CIDI Director (neal.legler@usu.edu)
* On request from Neal Legler, CIDI Director & Christopher Phillips, Electronic & Information Technology Accessibility Coordinator

This repository contains code that will:
* Pull an institution's accessibility report from Blackboard's Ally API
* Combine the accessibility report with other data generated from an institution's Canvas
* Use that data to automatically update USU's QA board on monday.com

This tool is currently hosted at: https://master.d3kepc58nvsh8n.amplifyapp.com/

To use this tool on the command line, switch to the branch `archive/cli`.
* Note: the command line version of the tool has been deprecated. Usage is discouraged, please use the new web application.

## Usage
* Navigate to https://master.d3kepc58nvsh8n.amplifyapp.com/.
* Wait if directed. When the `Authorize this app on Box.com` button appears, click on it to
authorize access to your Box account.
  * Note that you must have a USU Box account to use this application, and you must have access
  to the Course Report file you want to use the update the QA board.
* To get the most recent Ally Accessibility report, enter your Ally credentials and the term code.
If you do not have the institutional Ally credentials, reach out to Christopher Phillips.
  * Relevant term codes:
    * Summer 2023: 888
    * Fall 2023: 889
* Wait until a link appears, and then click on it to download the Ally report. This may take several minutes.
* You will download a `zip` file. Unzip the file, and you will have a folder with two files, `courses.csv`
and `terms.csv`. Upload `courses.csv` in step 2 and click the `Upload` button. You will receive a completion message when the upload it complete.
* Enter your [API key for monday.com](https://support.monday.com/hc/en-us/articles/360005144659-Does-monday-com-have-an-API-#h_01EZ9M2KTTMA4ZJERGFQDYM4WR).
* Select 'Update existing board' if you are updating a board that already exists (mid-semester). Select 'Fill in new board' if you are filling in a completely blank board at the beginning of a semester.
* Enter the [board id](https://support.monday.com/hc/en-us/articles/360000225709-Board-item-column-and-automation-or-integration-ID-s) for the monday.com board you're updating (found in the url).
* LEFT OFF HERE - add picture


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