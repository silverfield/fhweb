<<<<<<< HEAD
rmdir /s /q dist
cmd "/C ./node_modules/.bin/webpack"
=======
rm -r -fo dist
./node_modules/.bin/webpack
>>>>>>> master
git stash
git checkout -b gh-pages
git checkout gh-pages 
git merge master
git pull origin gh-pages
robocopy dist . /s /e
git add -A
git commit -m "publishing"
git push -u origin gh-pages
git checkout master
git stash pop