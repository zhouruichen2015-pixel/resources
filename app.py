from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
import json
import os
from datetime import datetime

app = Flask(__name__)
CORS(app)

DATA_DIR = 'data'

def init_data():
    if not os.path.exists(DATA_DIR):
        os.makedirs(DATA_DIR)
    
    files = {
        'todos.json': [],
        'habits.json': [],
        'memorials.json': [],
        'notes.json': []
    }
    
    for filename, default_data in files.items():
        filepath = os.path.join(DATA_DIR, filename)
        if not os.path.exists(filepath):
            with open(filepath, 'w', encoding='utf-8') as f:
                json.dump(default_data, f, ensure_ascii=False, indent=2)

def read_data(filename):
    filepath = os.path.join(DATA_DIR, filename)
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            return json.load(f)
    except:
        return []

def write_data(filename, data):
    filepath = os.path.join(DATA_DIR, filename)
    with open(filepath, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/todos', methods=['GET', 'POST'])
def todos():
    if request.method == 'GET':
        return jsonify(read_data('todos.json'))
    else:
        todos = read_data('todos.json')
        new_todo = request.json
        new_todo['id'] = len(todos) + 1
        new_todo['created_at'] = datetime.now().isoformat()
        todos.append(new_todo)
        write_data('todos.json', todos)
        return jsonify(new_todo)

@app.route('/api/todos/<int:todo_id>', methods=['PUT', 'DELETE'])
def todo_detail(todo_id):
    todos = read_data('todos.json')
    todo_idx = next((i for i, t in enumerate(todos) if t['id'] == todo_id), -1)
    
    if todo_idx == -1:
        return jsonify({'error': 'Todo not found'}), 404
    
    if request.method == 'PUT':
        todos[todo_idx].update(request.json)
        write_data('todos.json', todos)
        return jsonify(todos[todo_idx])
    else:
        todos.pop(todo_idx)
        write_data('todos.json', todos)
        return jsonify({'success': True})

@app.route('/api/habits', methods=['GET', 'POST'])
def habits():
    if request.method == 'GET':
        return jsonify(read_data('habits.json'))
    else:
        habits = read_data('habits.json')
        new_habit = request.json
        new_habit['id'] = len(habits) + 1
        new_habit['created_at'] = datetime.now().isoformat()
        new_habit['checkins'] = []
        habits.append(new_habit)
        write_data('habits.json', habits)
        return jsonify(new_habit)

@app.route('/api/habits/<int:habit_id>', methods=['PUT', 'DELETE'])
def habit_detail(habit_id):
    habits = read_data('habits.json')
    habit_idx = next((i for i, h in enumerate(habits) if h['id'] == habit_id), -1)
    
    if habit_idx == -1:
        return jsonify({'error': 'Habit not found'}), 404
    
    if request.method == 'PUT':
        habits[habit_idx].update(request.json)
        write_data('habits.json', habits)
        return jsonify(habits[habit_idx])
    else:
        habits.pop(habit_idx)
        write_data('habits.json', habits)
        return jsonify({'success': True})

@app.route('/api/memorials', methods=['GET', 'POST'])
def memorials():
    if request.method == 'GET':
        return jsonify(read_data('memorials.json'))
    else:
        memorials = read_data('memorials.json')
        new_memorial = request.json
        new_memorial['id'] = len(memorials) + 1
        new_memorial['created_at'] = datetime.now().isoformat()
        memorials.append(new_memorial)
        write_data('memorials.json', memorials)
        return jsonify(new_memorial)

@app.route('/api/memorials/<int:memorial_id>', methods=['PUT', 'DELETE'])
def memorial_detail(memorial_id):
    memorials = read_data('memorials.json')
    memorial_idx = next((i for i, m in enumerate(memorials) if m['id'] == memorial_id), -1)
    
    if memorial_idx == -1:
        return jsonify({'error': 'Memorial not found'}), 404
    
    if request.method == 'PUT':
        memorials[memorial_idx].update(request.json)
        write_data('memorials.json', memorials)
        return jsonify(memorials[memorial_idx])
    else:
        memorials.pop(memorial_idx)
        write_data('memorials.json', memorials)
        return jsonify({'success': True})

@app.route('/api/notes', methods=['GET', 'POST'])
def notes():
    if request.method == 'GET':
        return jsonify(read_data('notes.json'))
    else:
        notes = read_data('notes.json')
        new_note = request.json
        new_note['id'] = len(notes) + 1
        new_note['created_at'] = datetime.now().isoformat()
        notes.append(new_note)
        write_data('notes.json', notes)
        return jsonify(new_note)

@app.route('/api/notes/<int:note_id>', methods=['PUT', 'DELETE'])
def note_detail(note_id):
    notes = read_data('notes.json')
    note_idx = next((i for i, n in enumerate(notes) if n['id'] == note_id), -1)
    
    if note_idx == -1:
        return jsonify({'error': 'Note not found'}), 404
    
    if request.method == 'PUT':
        notes[note_idx].update(request.json)
        write_data('notes.json', notes)
        return jsonify(notes[note_idx])
    else:
        notes.pop(note_idx)
        write_data('notes.json', notes)
        return jsonify({'success': True})

if __name__ == '__main__':
    init_data()
    app.run(debug=True, host='0.0.0.0', port=5000)
