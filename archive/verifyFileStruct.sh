#!/bin/bash

#Verifying required file structure
cd
cd Desktop

if [ ! -d CIDI ]
then
  echo "The required directory, CIDI, does not exist or is in the wrong place. Please update your file structure to meet the listed requirements."
  exit 0
fi

cd CIDI

if [ ! -d qa-automation ]
then
  echo "The required directory, qa-automation, does not exist or is in the wrong place. Please update your file structure to meet the listed requirements."
  exit 0
fi

#Verifying Box set up
cd

if [ ! -d Library ]
then
  echo "The directory, Library, is in an unexpected place in your Box set-up. If you have set up Box Drive on your computer already, please follow the instructions in the Bug Report section of the repository information (README.md)."
  exit 0
fi

cd Library

if [ ! -d CloudStorage ]
then
  echo "The directory, CloudStorage, is in an unexpected place in your Box set-up. If you have set up Box Drive on your computer already, please follow the instructions in the Bug Report section of the repository information (README.md)."
  exit 0
fi

cd CloudStorage

if [ ! -d Box-Box ]
then
  echo "The directory, Box-Box, is in an unexpected place in your Box set-up. If you have set up Box Drive on your computer already, please follow the instructions in the Bug Report section of the repository information (README.md)."
  exit 0
fi

cd Box-Box

if [ ! -d 'Canvas Data Reports' ]
then
  echo "The directory, Canvas Data Reports, is in an unexpected place in your Box set-up. If you have set up Box Drive on your computer already and have access to this Box folder, please follow the instructions in the Bug Report section of the repository information (README.md)."
  exit 0
fi

echo "Required file structure verified successfully."
cd