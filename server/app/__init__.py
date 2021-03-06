import os
from dotenv import load_dotenv
from flask import Flask, render_template
from flask_mongoengine import MongoEngine
from flask_login import LoginManager
from flask_bootstrap import Bootstrap
from flask_admin import Admin
from flask_admin.contrib.mongoengine import ModelView


load_dotenv()  # Load environment variables
db = MongoEngine()
login = LoginManager()
login.login_view = "auth.login"
bootstrap = Bootstrap()
admin = Admin(name="AGP DB",  template_mode="bootstrap4")

def create_app(config):
    app = Flask(__name__)
    app.config.from_object(config)
    app.config['SECRET_KEY'] = os.getenv("SECRET_KEY")

    db.init_app(app)
    login.init_app(app)
    bootstrap.init_app(app)

    # Add flask-admin views
    #admin.init_app(app)
    #from .models import User, Patients
    #admin.add_view(ModelView(User, "Usuarios"))
    # admin.add_view(ModelView(Patients, "Pacientes"))

    from .main import main as main_bp
    app.register_blueprint(main_bp)

    from .api import api as api_bp
    app.register_blueprint(api_bp, url_prefix="/api")

    from .auth import auth as auth_bp
    app.register_blueprint(auth_bp)

    if os.getenv("FLASK_ENV") == "development":
        print(app.url_map)

    return app
