# VIRTUAL ENV

Create venv

```
  python3 -m venv venv/
```

Enable de environment

```
source venv/bin/activate
```

you must enable virtualenv and later do this command to install dependencies:

```
pip install -r ./requirements.txt
```

if you want to update the dependencies yu must to do this command:

```
pip freeze > ./requirements.txt
```

## WEBPACK NODE RECOMENDED VERSION < 10

go to app folder and run

```
yarn
```

then:

```
yarn webpack 
```

if you want to watch

```
yarn webpack --watch
```

## IF YOU FACE PROBLEMS

if yoou facing problems with dependencies do this:

### Nukes the old environment

```
rm -r venv/ 
```

### Makes a blank new one

```
python3 -m venv venv/ 
```

### Re-installs dependencies
```
pip install -r ./requirements.txt 
```
# RUN THE ENVIRONMENT

```
python wsgi.py
```
