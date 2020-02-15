print('start')

import os
import json

import pandas as pd
import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine
import psycopg2

print('check 1')

# pymysql.install_as_MySQLdb()

print('check 2')

from flask import Flask, jsonify, render_template, url_for, json, request, flash
from flask_sqlalchemy import SQLAlchemy

print('check 3')

IS_HEROKU = False

if('IS_HEROKU' in os.environ):
    IS_HEROKU = True

print('check 4')

if (IS_HEROKU):
    remote_esg_host = os.environ['remote_esg_host']
    remote_db_port = os.environ['remote_db_port']
    remote_esg_dbname = os.environ['remote_esg_dbname']
    remote_esg_dbuser = os.environ['remote_esg_dbuser']
    remote_esg_dbpwd = os.environ['remote_esg_dbpwd']
else:
    from config import remote_esg_host, remote_db_port, remote_esg_dbname, remote_esg_dbuser, remote_esg_dbpwd 

print('check 5')

# Configure MySQL connection and connect 
#pymysql.install_as_MySQLdb()
engine = create_engine(f"postgres://{remote_esg_dbuser}:{remote_esg_dbpwd}@{remote_esg_host}:{remote_db_port}/{remote_esg_dbname}")
conn = engine.connect()

print('check 6')

# Initialize Flask application
app = Flask(__name__)

print('check 7')

# Set up SQL Alchemy connection and classes
Base = automap_base() # Declare a Base using `automap_base()`
Base.prepare(engine, reflect=True) # Use the Base class to reflect the database tables
Base.prepare(engine, reflect=True) # Use the Base class to reflect the database tables
Base.classes.keys() # Print all of the classes mapped to the Base
# ClientInfo = Base.classes.client_info # Assign the client_info class (table) to a variable called `ClientInfo`
session = Session(engine) # Create a session


print("this is another test")

print(Base.classes.keys())

print("this is a test")

@app.route("/")
def index():
    """Return the homepage."""
    return render_template("index.html")
    

@app.route('/api/data/esg')
def get_esg_data():
    conn = engine.connect()

    esg_df = pd.read_sql("SELECT * FROM woke_investing", conn)

    conn.close()

    return esg_df.to_json(orient='records')


# @app.route('/data')
# def get_data():
#     global data    
#     return json.dumps(data)

# @app.route("/process")
# def about():
#     """Return the detail page to explain the project process."""
#     return render_template("detail.html")

# @app.route("/denseData")
# def dense():
#     """Return density data"""
#     conn = engine.connect()

#     data_df = pd.read_sql("SELECT * FROM density", conn)
#     df = pd.DataFrame(data_df, columns=['Density', 'Percent', 'Cause of Death', 'Deaths', 'Population', 'Rate per 100k'])
#     df.rename(columns = {'Cause of Death': 'Cause_of_Death', 'Rate per 100k': 'Rate_per_100k'}, inplace = True)

#     conn.close()
#     return df.to_json()

# @app.route("/genderData")
# def gender():
#     """Return gender data"""
#     conn = engine.connect()
#     data_df = pd.read_sql("SELECT * FROM gender", conn)
#     df = pd.DataFrame(data_df, columns=['Gender', 'Cause of Death', 'Deaths', 'Population', 'Rate per 1000', 'Percent'])
#     df.rename(columns = {'Cause of Death': 'Cause_of_Death', 'Rate per 1000': 'Rate_per_1000'}, inplace = True)
    
#     conn.close()
#     return df.to_json()

# @app.route("/sviData")
# def sviData():
#     """Return svi and life expectancy data"""
#     conn = engine.connect()
#     data_df = pd.read_sql("SELECT * FROM sviLife ORDER BY RAND() LIMIT 500", conn)
#     df = pd.DataFrame(data_df, columns=["FIPS","Location","Life_Expectancy","RPL_THEMES","RPL_THEME1","RPL_THEME2","RPL_THEME3","RPL_THEME4"])
#     return df.to_json()

#     conn.close()
#     return jsonify(df.to_dict(orient="records"))

# @app.route("/userData/<zipCode>")
# def userData(zipCode):
#     conn = engine.connect()
#     results = pd.read_sql(f"SELECT * FROM svi14final s LEFT JOIN Ziptofips z ON s.FIPS = z.FIPS WHERE ZipCodes = {zipCode}", conn)

#     return jsonify(results.to_dict(orient="records"))


#if __name__ == "__main__":
#    app.run()
print('check 8')

app.run()