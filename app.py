import os
import json
from cs50 import SQL
from flask import Flask, flash, redirect, render_template, request, session
from flask_session import Session
from werkzeug.security import check_password_hash, generate_password_hash
from helpers import login_required, apology, admin_required

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
        session["role"] = rows[0]["role"]

        # Redirect user to home page
        return redirect("/")
    else:
        return render_template("login.html")

@app.route("/register", methods=["GET", "POST"])
def register():
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
            new_id = db.execute("""
                INSERT INTO users (first_name, last_name, username, hash) VALUES(?, ?, ?, ?)""",
                request.form.get("first_name"), request.form.get("last_name"),
                request.form.get("username"), generate_password_hash(request.form.get("password"))
            )

            # Remember which user has logged in
            session["user_id"] = new_id

            # Take the assesment
            return redirect("/city")
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

@app.route("/about")
@login_required
def about():
    return render_template("about.html")

@app.route("/contact", methods=["GET", "POST"])
@login_required
def contact():
    if request.method == "POST":
        name = request.form.get("name")
        email = request.form.get("email")
        message = request.form.get("message")
        user_id = session["user_id"]
        if not name:
            return apology("Must Provide Your Name", 400)
        if not email:
            return apology("Must Provide Your Email", 400)
        if not message:
            return apology("Must Provide Your Message", 400)
        
        user_row = db.execute(
            "SELECT username FROM users WHERE id = ?", user_id
        )
        username = user_row[0]["username"]

        db.execute("""
            INSERT INTO contact (user_id, username, name, email, message) VALUES (?, ?, ?, ?, ?)
            """, user_id, username, name, email, message
        )

        flash("Thank you! Your message has been sent successfully.", "success")
        return redirect("/contact")
    return render_template("contact.html")

@app.route("/terms")
@login_required
def terms():
    return render_template("terms.html")

@app.route("/admin_panel")
@admin_required
def admin_panel():
    user_row = db.execute(
        "SELECT * FROM users WHERE id = ?", session["user_id"]
    )
    first_name = user_row[0]["first_name"]
    return render_template("admin_panel.html", first_name=first_name)

@app.route("/wallet", methods=["GET", "POST"])
@login_required
def wallet():
    user_row = db.execute(
        "SELECT * FROM users WHERE id = ?", session["user_id"]
    )

    first_name = user_row[0]["first_name"]
    last_name = user_row[0]["last_name"]
    hash = user_row[0]["hash"]
    cash = user_row[0]["cash"]

    if request.method == "POST":
        amount = request.form.get("amount")
        password = request.form.get("password")

        try:
            amount = float(amount)
        except:
            return apology("Invalid Amount", 400)

        if not amount:
            return apology("Must Type Amount", 400)
        if not password:
            return apology("Must type Password", 400)
        if amount <= 0:
            return apology("Amount Must be Positive")
        


        if not check_password_hash(hash, password):
            return apology("Password Do Not Match", 400)
        
        db.execute(
            "UPDATE users SET cash = cash + ? WHERE id = ?", amount, session["user_id"]
        )

        db.execute("""
            INSERT INTO wallet_transactions (user_id, type, amount) VALUES (?, ?, ?)""",
            session["user_id"], "credit", amount
        )
        
        flash("Payment Successful")
        return redirect("/wallet")
    
    transactions = db.execute(
        "SELECT * FROM wallet_transactions WHERE user_id = ? ORDER BY timestamp DESC", session["user_id"])
    return render_template("wallet.html",
                           first_name=first_name,
                           last_name=last_name,
                           cash=cash,
                           transactions=transactions)

# ------------------------------------ Assesment ------------------------------------
@app.route("/manage_users")
@admin_required
def manage_users():
    users = db.execute("""
        SELECT u.id, u.first_name, u.last_name, u.username, u.role, u.cash, d.city, d.lang,
            d.goals, d.activity, d.medical, d.gender, d.age, d.initial_weight, d.targeted_weight,
            d.weight_goal
        FROM users u
        LEFT JOIN user_data d ON u.id = d.user_id
    """)

    for user in users:
        if user["goals"]:
            try:
                user["goals"] = ", ".join(json.loads(user["goals"]))
            except:
                pass
        if user["medical"]:
            try:
                user["medical"] = ", ".join(json.loads(user["medical"]))
            except:
                pass
            
    return render_template("manage_users.html", users=users)

@app.route("/manage_messages")
@admin_required
def manage_messages():
    contacts = db.execute("SELECT * FROM contact ORDER BY timestamp DESC")
    return render_template("manage_messages.html", contacts=contacts)

@app.route("/mark_read/<int:id>", methods=["POST"])
@admin_required
def mark_read(id):
    db.execute("UPDATE contact SET is_read = 1 WHERE id = ?", id)
    return redirect("/manage_messages")

@app.route("/delete_message/<int:id>", methods=["POST"])
@admin_required
def delete_message(id):
    db.execute("DELETE FROM contact WHERE id = ?", id)
    return redirect("/manage_messages")

@app.route("/manage_careers")
@admin_required
def manage_careers():
    return render_template("manage_careers.html")

@app.route("/manage_finance")
@admin_required
def manage_finance():
    return render_template("manage_finance.html")
# -----------------------------------------------------------------------------------

# ------------------------------------ Assesment ------------------------------------
@app.route("/city", methods=["GET", "POST"])
@login_required
def city():
    # 1. Check if user already took the assessment
    existing_data = db.execute("SELECT user_id FROM user_data WHERE user_id = ?", session["user_id"])
    if len(existing_data) > 0:
        # If they are already in the database, bounce them to the home page
        flash("You have already completed the assessment!")
        return redirect("/")
    # 2. Proceed with normal assessment logic if they are new
    if request.method == "POST":
        city = request.form.get("city")
        if not city:
            return apology("Must Provide City", 400)
        session["city"] = city
        return redirect("/language")
    return render_template("city.html")

@app.route("/goal", methods=["GET", "POST"])
@login_required
def goal():
    if request.method == "POST":
        gender = request.form.get("gender")
        goals = request.form.getlist("goals")
        if not gender:
            return apology("Must Choose a Gender", 400)
        if not goals:
            return apology("Must choose a Goal", 400)
        session["gender"] = gender
        session["goals"] = goals
        return redirect("/fitness_level")
    return render_template("goal.html")

@app.route("/medical", methods=["GET", "POST"])
@login_required
def medical():
    if request.method == "POST":
        conditions = request.form.getlist("condition")
        if not conditions:
            return apology("Must Choose an Option", 400)
        session["medical"] = conditions
        return redirect("/metrics")
    return render_template("medical.html")

@app.route("/fitness_level", methods=["GET", "POST"])
@login_required
def fitness_level():
    if request.method == "POST":
        activity = request.form.get("activity")
        if not activity:
            return apology("Must Select an Option", 400)
        session["activity"] = activity
        return redirect("/medical")
    return render_template("fitness_level.html")

@app.route("/language", methods=["GET", "POST"])
@login_required
def language():
    if request.method == "POST":
        language = request.form.get("language")
        if not language:
            return apology("Must Choose an Option", 400)
        session["lang"] = language
        return redirect("/goal")
    return render_template("lang.html")

@app.route("/metrics", methods=["GET", "POST"])
@login_required
def metrics():
    if request.method == "POST":
        # Check if user skipped steps to prevent KeyError
        required_session_keys = ["city", "lang", "goals", "activity", "medical", "gender"]
        for key in required_session_keys:
            if not session.get(key):
                return apology("Assessment incomplete. Please start over.", 400)

        # Get form inputs
        user_age_str = request.form.get("age")
        user_height_str = request.form.get("height")
        user_weight_str = request.form.get("weight")
        target_weight_str = request.form.get("target_weight")
        weight_goal = request.form.get("goal")

        # Basic presence validation
        if not user_age_str: return apology("Must Provide Your Age", 400)
        if not user_height_str: return apology("Must Provide Your Height", 400)
        if not user_weight_str: return apology("Must Provide Your Weight", 400)
        if not target_weight_str: return apology("Must Provide Your Targeted Weight", 400)
        if not weight_goal: return apology("Must Provide Your Goal", 400)

        # Convert data types safely
        try:
            user_age = int(user_age_str)
            user_height = float(user_height_str)
            user_weight = float(user_weight_str)
            target_weight = float(target_weight_str)
        except ValueError:
            return apology("Age must be an integer, height/weights must be numbers", 400)

        # Storing user data into database
        db.execute("""
            INSERT INTO user_data (user_id, city, lang, goals, activity,
                medical, gender, age, height, initial_weight, targeted_weight,
                weight_goal) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)""",
            session["user_id"], 
            session["city"], 
            session["lang"], 
            json.dumps(session["goals"]),
            session["activity"], 
            json.dumps(session["medical"]), 
            session["gender"], 
            user_age,
            user_height, 
            user_weight, 
            target_weight, 
            weight_goal
        )
        
        # Redirect to home
        return redirect("/")
    return render_template('metrics.html')
# -----------------------------------------------------------------------------------