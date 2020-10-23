# VIRTUAL ENV

Create venv

python3 -m venv venv/

Enable de environment

source venv/bin/activate

you must enable virtualenv and later do this command to install dependencies:

pip install -r ./requirements.txt

if you want to update the dependencies yu must to do this command:

pip freeze > ./requirements.txt

## WEBPACK NODE RECOMENDED VERSION < 10

go to app folder and run

yarn

then:

yarn webpack 

if you wanto to watch 

yarn webpack --watch

## IF YOU FACE PROBLEMS

if yoou facing problems with dependencies do this:

% rm -r venv/ # Nukes the old environment
% python3 -m venv venv/ # Makes a blank new one
% pip install -r ./requirements.txt # Re-installs dependencies

python wsgi.py
