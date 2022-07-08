from flask import Flask, render_template, request
from stories import story

app = Flask(__name__)

app.config['SECRET_KEY'] = "poodlesRawesome"

@app.route('/')
def get_questions():
    prompts = story.prompts
    return render_template('questions.html', prompts=prompts)

@app.route('/story')
def show_story():
    text = story.generate(request.args)
    return render_template('story.html', text=text)