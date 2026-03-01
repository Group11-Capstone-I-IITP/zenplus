import sqlite3

conn = sqlite3.connect('screenbook.db')
c = conn.cursor()
#--------------------------------------------------------------------------------------------#

# users tabel
c.execute('''
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    username TEXT NOT NULL,
    hash TEXT NOT NULL,
)
''')



#--------------------------------------------------------------------------------------------#
conn.commit()
conn.close()
print("Database created successfully!")