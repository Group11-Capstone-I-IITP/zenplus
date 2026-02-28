import sqlite3

conn = sqlite3.connect('screenbook.db')
c = conn.cursor()
#------------------------------------------------#


# USERS TABLE
# -> id
# -> username
# -> hash



#------------------------------------------------#
conn.commit()
conn.close()
print("Database created successfully!")