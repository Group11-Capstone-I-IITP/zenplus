import sqlite3

conn = sqlite3.connect('zenplus.db')
c = conn.cursor()
#--------------------------------------------------------------------------------------------#

# users table
c.execute('''
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    username TEXT NOT NULL,
    hash TEXT NOT NULL,
    role TEXT NOT NULL DEFAULT "user",
    cash REAL DEFAULT 0
)
''')

# contact table
c.execute('''
CREATE TABLE IF NOT EXISTS contact (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    username TEXT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL,
    is_read INTEGER DEFAULT 0,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
)
''')

# wallet transactions
c.execute('''
CREATE TABLE IF NOT EXISTS wallet_transactions (
    transaction_id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    type TEXT NOT NULL,
    amount REAL NOT NULL,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE          
)
''')

# User Prefference/Assesment/Initial Data
c.execute('''
CREATE TABLE IF NOT EXISTS user_data(
    user_id INTEGER PRIMARY KEY NOT NULL,
    city TEXT NOT NULL,
    lang TEXT NOT NULL,
    goals TEXT NOT NULL,
    activity TEXT NOT NULL,
    medical TEXT NOT NULL,
    gender TEXT NOT NULL,
    age INTEGER NOT NULL,
    height REAL NOT NULL,
    initial_weight REAL NOT NULL,
    targeted_weight REAL NOT NULL,
    weight_goal TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
)
''')

#--------------------------------------------------------------------------------------------#
conn.commit()
conn.close()
print("Database created successfully!")