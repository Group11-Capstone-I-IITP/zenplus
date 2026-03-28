import sqlite3

conn = sqlite3.connect('zenplus.db')
c = conn.cursor()
#--------------------------------------------------------------------------------------------#

# users tabel
c.execute('''
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    username TEXT NOT NULL,
    hash TEXT NOT NULL
)
''')



#--------------------------------------------------------------------------------------------#
conn.commit()
conn.close()
print("Database created successfully!")