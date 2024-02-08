from flask import Flask
from flask import render_template
app=Flask(__name__)
@app.route("/welcome")
def home():
    return "welcome"


@app.route("/addition")
def add():
    return "Addition of two numbers"


@app.route("/user/<username>")
def printusername(username):
    return username    

# @app.route("/contact/<username>")
# def renderHTML(username):
#     return render_template ("home.html",username=username)


@app.route("/list")
def renderHTML():
    names=["Ammu","Amirtha","Aishu","Jaya"]
    return render_template ("home.html",list=names)


