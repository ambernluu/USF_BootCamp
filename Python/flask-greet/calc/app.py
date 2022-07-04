# Put your app in here.
from flask import Flask, request
from operations import add, sub, mult, div

app = Flask(__name__)

@app.route('/add')
def do_addition():
    a = int(request.args['a'])
    b = int(request.args['b'])
    return f"{a} + {b} = {str(add(a,b))}"

@app.route('/sub')
def do_subtraction():
    a = int(request.args['a'])
    b = int(request.args['b'])
    return f"{a} - {b} = {str(sub(a,b))}"

@app.route('/mult')
def do_multiplication():
    a = int(request.args['a'])
    b = int(request.args['b'])
    return f"{a} * {b} = {str(mult(a,b))}"

@app.route('/div')
def do_division():
    a = int(request.args['a'])
    b = int(request.args['b'])
    return f"{a} / {b} = {str(div(a,b))}"