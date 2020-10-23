from flask import render_template
from flask import current_app as app


@app.route('/', methods=['GET'])
def home():
    """Homepage."""
    return render_template('home/index.jinja2')


@app.route('/table', methods=['GET'])
def playbook():
    """Homepage."""
    return render_template('table/index.jinja2')