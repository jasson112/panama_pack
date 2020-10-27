from flask import render_template
from flask import current_app as app
import yaml


@app.route('/', methods=['GET'])
def home():
    """Homepage."""
    with open(r'app/data.yaml') as file:
        data = yaml.load(file, Loader=yaml.FullLoader)

    return render_template('home/index.jinja2', data=data)


@app.route('/table', methods=['GET'])
def playbook():
    """Homepage."""
    with open(r'app/data.yaml') as file:
        data = yaml.load(file, Loader=yaml.FullLoader)

    return render_template('table/index.jinja2', data=data)
