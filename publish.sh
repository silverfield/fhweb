rm -rf dist
rm -rf publish
./node_modules/.bin/webpack
cp -r dist publish

base_dir=~/wspace/fhweb/code

git checkout publish
git merge master
cp -r $base_dir/frontend/dist/* $base_dir/
git add -A
git commit -m "publishing"
git push origin publishing
git checkout master