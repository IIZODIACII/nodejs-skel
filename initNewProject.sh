#!/bin/bash
rm -rf .git
git init
cd ..
mv nodejs-skel $1
cd $1 rm -f initNewProject.sh
