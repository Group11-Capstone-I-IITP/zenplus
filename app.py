import os

from cs50 import SQL
from flask import Flask, flash, redirect, render_template, request, session
from flask_session import Session
from werkzeug.security import check_password_hash, generate_password_hash
from helpers import login_required

# Configure application
app = Flask(__name__)

# Session
app.config["SESSION_PERMENENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)

# Configure CS50 Library to use SQLite database
# db = SQL("sqlite:///zenpulse.db")

@app.route("/login", methods=["GET", "POST"])
def login():
    return render_template("login.html", name="everyone")

# @app.route()
# def registration():
#     ...

# @app.route()
# def logout():
#     ...

# @app.route()
# def index():
#     ...