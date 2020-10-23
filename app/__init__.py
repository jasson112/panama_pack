from flask import Flask
from .util import jinjasset


def create_app():
    """Construct the core application."""
    app = Flask(__name__)

    with app.app_context():
        app.jinja_options['extensions'].append('jinja2.ext.debug')
        app.jinja_options['extensions'].append('jinja2.ext.do')
        app.jinja_env.globals.update(jinjasset=jinjasset.Jinjasset.test)
        from . import routing
        
    return app