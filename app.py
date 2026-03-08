import os

from cs50 import SQL
from flask import Flask, flash, redirect, render_template, request, session
from flask_session import Session
from werkzeug.security import check_password_hash, generate_password_hash
from helpers import login_required, apology

# Configure application
app = Flask(__name__)

# Session
app.config["SESSION_PERMENENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)

# Configure CS50 Library to use SQLite database
db = SQL("sqlite:///zenpulse.db")

@app.after_request
def after_request(response):
    """Ensure responses aren't cached"""
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Expires"] = 0
    response.headers["Pragma"] = "no-cache"
    return response

@app.route("/login", methods=["GET", "POST"])
def login():
    """Log user in"""
    # Forget any user_id
    session.clear()

    if request.method == "POST":
        if not request.form.get("username"):
            return apology("must provide username", 400)
        elif not request.form.get("password"):
            return apology("must provide password", 400)
        
        rows = db.execute(
            "SELECT * FROM users WHERE username = ?", request.form.get("password")
        )

        # Ensure username exists and password is correct
        if len(rows) != 1 or check_password_hash(
            rows[0]["hash"], request.form.get("password")
        ):
            return apology("invalid username/password", 400)
        
        # Remember which user has logged in
        session["user_id"] = rows[0]["id"]

        # Redirect user to home page
        return redirect("/")
    else:
        return render_template("login.html")

@app.route("/registration", methods=["GET", "POST"])
def registration():
    """Register user"""
    if request.method == "POST":
        if not request.form.get("username"):
            return apology("must provide username", 400)
        elif not request.form.get("password"):
            return apology("must provide password", 400)
        elif not request.form.get("confirmation"):
            return apology("must provide confirmation", 400)
        elif request.form.get("password") != request.form.get("confirmation"):
            return apology("passwords do not match", 400)
        
        rows = db.execute(
            "SELECT * FROM users WHERE username = ?", request.form.get("username")
        )

        # Ensure username is not already taken
        if len(rows) == 0:
            new_id = db.execute(
                "INSERT INTO users (username, hash) VALUES(?, ?)",
                request.form.get("username"), generate_password_hash(request.form.get("password"))
            )

            # Remember which user has logged in
            session["user_id"] = new_id

            return redirect("/")
        # username already exists
        else:
            return apology("username already exists", 400)
        
    return render_template("registration.html")

@app.route("/logout")
def logout():
    """Log user out"""

    # Forget any user_id
    session.clear()
    
    return redirect("/")

@app.route("/")
@login_required
def index():
    """Show homepage"""
    return render_template("index.html")