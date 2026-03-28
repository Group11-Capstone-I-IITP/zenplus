import os
import json
from cs50 import SQL
from flask import Flask, flash, redirect, render_template, request, session
from flask_session import Session
from werkzeug.security import check_password_hash, generate_password_hash
from helpers import login_required, apology

# Configure application
app = Flask(__name__)

# Session
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)

# Configure CS50 Library to use SQLite database
db = SQL("sqlite:///zenplus.db")

# Load your blueprint (the order of exercises) when the app starts
with open('exercise/workouts.json', 'r') as f:
    WORKOUT_ROUTINES = json.load(f)

# Helper function to dynamically load the right muscle file
def load_muscle_data(muscle_name):
    # Format the name: "shoulder & back" -> "shoulder_and_back"
    formatted_name = muscle_name.replace(" & ", "_and_").replace(" ", "_")
    
    # Add the 'exercise/' folder path here!
    filename = f"exercise/{formatted_name}.json"
    
    try:
        with open(filename, 'r') as f:
            return json.load(f)
    except FileNotFoundError:
        return {}

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
            "SELECT * FROM users WHERE username = ?", request.form.get("username")
        )

        # Ensure username exists and password is correct
        if len(rows) != 1 or not check_password_hash(
            rows[0]["hash"], request.form.get("password")
        ):
            return apology("invalid username/password", 400)
        
        # Remember which user has logged in
        session["user_id"] = rows[0]["id"]

        # Redirect user to home page
        return redirect("/")
    else:
        return render_template("login.html")

@app.route("/register", methods=["GET", "POST"])
def registration():
    """Register user"""
    if request.method == "POST":
        if not request.form.get("first_name"):
            return apology("must provide first name", 400)
        if not request.form.get("last_name"):
            return apology("must provide last name", 400)
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
                "INSERT INTO users (first_name, last_name, username, hash) VALUES(?, ?, ?, ?)",
                request.form.get("first_name"), request.form.get("last_name"),
                request.form.get("username"), generate_password_hash(request.form.get("password"))
            )

            # Remember which user has logged in
            session["user_id"] = new_id

            return redirect("/")
        # username already exists
        else:
            return apology("username already exists", 400)
        
    return render_template("register.html")

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

@app.route("/workout/<muscle>/<level>/<int:step>")
@login_required
def workout_step(muscle, level, step):

    sequence = WORKOUT_ROUTINES[muscle][level]
    muscle_db = load_muscle_data(muscle)

    full_workout = []
    for ex in sequence:
        if ex in muscle_db:
            full_workout.append(muscle_db[ex])
        else:
            # This will print in your terminal so you know exactly which typo to fix!
            print(f"WARNING: Exercise '{ex}' not found in {muscle}.json")

    if step >= len(full_workout):
        return redirect("/workout_complete")

    exercise = full_workout[step]

    return render_template(
        "exercise.html",
        workout=exercise,
        muscle=muscle,
        level=level,
        step=step
    )

@app.route("/select_workout")
@login_required
def select_workout():
    """Show the workout selection form"""
    return render_template("select_workout.html")

@app.route("/rest/<muscle>/<level>/<int:step>")
@login_required
def rest_page(muscle, level, step):

    return render_template(
        "rest.html",
        muscle=muscle,
        level=level,
        step=step
    )

@app.route("/workout_complete")
@login_required
def workout_complete():
    return render_template("finish.html")