#!/bin/bash

if [ $# -eq 0 ]
then
  echo "You must specify the state of the board you're updating. Use -new to fill in a new board or -update to update an existing board. (ex: $ bash newScript.sh -new)"
  exit 2
fi

if [ "$1" != "-new" ] && [ "$1" != "-update" ]
then
  echo "Invalid argument. Use -new to fill in a new board or -update to update an existing board. (ex: $ bash newScript.sh -new)"
  exit 2
fi

cd
cd Library/CloudStorage/Box-Box/Canvas\ Data\ Reports
ls > ../filenames.txt

cd ..

newestDate=2000-01-01

while read line; do
    front=$( echo $line | cut -c1-17 )
    if [[ $front == 'Course Summary - ' ]]
    then
      date=$( echo $line | cut -c27-36 )
      if [[ $date > $newestDate ]]
      then
        newestDate=$date
        newestFile=$line
      fi
    fi
done < filenames.txt

rm filenames.txt

echo "Most recent course report: "$newestFile

newestFilePath="Canvas Data Reports/"$newestFile
#echo "$newestFilePath"

cp "$newestFilePath" ../../../Desktop/CIDI/qa-automation/"course-report-file.xlsx"

echo "File moved into project folder."
echo

cd ../../../Desktop/CIDI/qa-automation

#---------------------------------------------------------------------------------------------------------------------

python3 getAllyData.py

#Now we have to wait until it's done downloading...
sleep 5

ls ../../../Downloads

#echo "Unzipping "../../../Downloads/ally-*.zip

unzip -o ../../../Downloads/ally-*.zip
ls ../../../Downloads

rm ../../../Downloads/ally-*.zip

echo

#---------------------------------------------------------------------------------------------------------------------

if [ $1 == "-new" ]
then
  echo "Filling in new board."
  bash fillNewBoard.sh
elif [ $1 == "-update" ]
then
  echo "Updating existing board."
  bash updateBoard.sh
fi

echo "Process complete."