# import os

# # Heroku check
# is_heroku = False
# if 'IS_HEROKU' in os.environ:
#     is_heroku = True

# Flask
from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)

# SQL Alchemy
# import sqlalchemy
# from sqlalchemy import create_engine
# from sqlalchemy.ext.automap import automap_base
# from sqlalchemy.orm import Session

# # PyMySQL
# import pymysql

# Pandas
# import pandas as pd

# JSON
# import json

# Import your config file(s) and variable(s)
# if is_heroku == False:
#     from config import DATABASE_URL, remote_db_port, remote_esg_dbname, remote_esg_dbuser, remote_esg_dbpwd
# else:
# remote_db_endpoint = os.environ.get('DATABASE_URL')
# remote_db_port = os.environ.get('remote_db_port')
# remote_esg_dbname = os.environ.get('remote_esg_dbname')
# remote_esg_dbuser = os.environ.get('remote_esg_dbuser')
# remote_esg_dbpwd = os.environ.get('remote_esg_dbpwd')
    
# Configure MySQL connection and connect 
# pymysql.install_as_MySQLdb()
# engine = create_engine(f"mysql://{remote_esg_dbuser}:{remote_esg_dbpwd}@{remote_db_endpoint}:{remote_db_port}/{remote_esg_dbname}")
# conn = engine.connect()

# Initialize Flask application
app = Flask(__name__)

# Set up SQL Alchemy connection and classes
# Base = automap_base() # Declare a Base using `automap_base()`
# Base.prepare(engine, reflect=True) # Use the Base class to reflect the database tables
# Base.prepare(engine, reflect=True) # Use the Base class to reflect the database tables
# Base.classes.keys() # Print all of the classes mapped to the Base
# # ClientInfo = Base.classes.client_info # Assign the client_info class (table) to a variable called `ClientInfo`
# session = Session(engine) # Create a session

# Set up your default route
@app.route('/')
def home():
    return render_template('index.html')  

@app.route('/industry')
def industry():
    return render_template('industry.html')

@app.route('/stockanalysis')
def stock_analysis():
    return render_template('stock_analysis.html')

# @app.route('/post', methods=['POST'])
# def process_form_data():

#     industry_partner = ''
#     client_id = ''
#     travel_no = ''
#     dt = ''
#     project_name = ''
#     project_id = ''
#     contract_task_order = ''

#     if request.method == 'POST':
#         try:
#             industry_partner = request.form['industry_partner']
#             client_id = request.form['client_id']
#             travel_no = request.form['travel_no']
#             dt = request.form['dt']
#             project_name = request.form['project_name'] 
#             project_id = request.form['project_id']
#             contract_task_order = request.form['contract_task_order']           
            
#         except Exception as e:
#             print(e)

#     # Assemble record
#     record = ClientInfo(
#             industry_partner = industry_partner,
#             client_id = client_id,
#             travel_no = travel_no,
#             dt = dt,
#             project_name = project_name,
#             project_id = project_id,
#             contract_task_order = contract_task_order
#             )

#     # Add this record to the DB session
#     session.add(record)

#     # Commit the objects to the database
#     session.commit()

#     return render_template('success.html', industry_partner=industry_partner)

# @app.route('/report')
# def generate_report():

#     # Reestablish DB connection
#     conn = engine.connect()
    
#     try:
#         data = conn.execute("SELECT * FROM vw_client_info")
#         return render_template('report.html', data=data)

#     except Exception as e:
#         print(e)
#         return render_template('error.html', error=True)

if __name__ == "__main__":
    app.run(debug=True)