#!/usr/bin/env bash
#
## BASADO EN EL SCRIPT DE: https://github.com/nathanhammond/ember-flows-generator
#

git checkout master
git pull
rm -rf dist
ember build --environment production

mv node_modules ../node_modules_tmp
mv bower_components ../bower_components_tmp

git checkout gh-pages
git pull origin gh-pages
ls -1 | grep -v -E '^dist$' | xargs rm -rf
mv dist/* ./
rmdir dist

git add .
git commit -am "Update."
git push origin gh-pages
git checkout master
mv ../node_modules_tmp node_modules
mv ../bower_components_tmp bower_components
git pull
