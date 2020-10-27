
"""Application entry point."""
from app import create_app
from flask_frozen import Freezer
import sys

app = create_app()
freezer = Freezer(app)

if __name__ == "__main__":
    if len(sys.argv) > 1 and sys.argv[1] == "freeze":
        freezer.run(debug=True)
    else:
        app.run(host="0.0.0.0", port=5000, debug=True, threaded=True)
