rmdir /s /q dist
./node_modules/.bin/webpack

git stash
git checkout gh-pages || git checkout -b gh-pages
git merge master
robocopy dist . /s /e
git add -A
git commit -m "publishing"
git push -u origin gh-pages
git checkout master
git stash pop