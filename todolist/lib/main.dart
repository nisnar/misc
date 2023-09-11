import 'dart:html';

import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:uuid/uuid.dart';

var uuid = Uuid();

//built basic features using this tutorial:
//https://www.freecodecamp.org/news/learn-state-management-in-flutter/

//added features:
//1. adding UUID to fix bug when deleting todos with the same name
//2. added description to each todo item (need to edit alert dialog column width)
//3. working on drag/drop
//4. added save to device storage
//5. need to add edit feature

void main() {
  runApp(const TodoApp());
}

class TodoApp extends StatelessWidget {
  const TodoApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'To-Do List',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        useMaterial3: true,
      ),
      home: const TodoList(title: 'Flutter To-Do List'),
    );
  }
}

class TodoList extends StatefulWidget {
  const TodoList({super.key, required this.title});

  final String title;

  @override
  State<TodoList> createState() => _TodoListState();
}

class _TodoListState extends State<TodoList> {
  final List<Todo> _todos = <Todo>[];
  final TextEditingController _textFieldController1 = TextEditingController();
  final TextEditingController _textFieldController2 = TextEditingController();
  late final SharedPreferences prefs;

  @override
  void initState() {
    super.initState();
    _loadTodos();
  }

  Future<void> _loadTodos() async {
    prefs = await SharedPreferences.getInstance();
    for (var key in prefs.getKeys()) {
      List<String> newtododata = prefs.getStringList(key)!;
      Todo newtodo = Todo(
          id: key,
          name: newtododata.elementAt(0),
          description: newtododata.elementAt(1),
          completed: bool.parse(newtododata.elementAt(2)));
      setState(() {
        _todos.add(newtodo);
      });
    }
  }

  //for adding new todo list items.
  //displays text field for name and completed is initially false
  void _addTodoItem(String name, String description) {
    Todo newtodo = Todo(
        id: uuid.v4(), name: name, description: description, completed: false);
    setState(() {
      _todos.add(newtodo);
    });
    _textFieldController1.clear();
    _textFieldController2.clear();
    prefs.setStringList(newtodo.id, <String>[
      newtodo.name,
      newtodo.description,
      newtodo.completed.toString()
    ]);
  }

  //changes completion status. will call this onclick checkbox.
  void _handleTodoChange(Todo todo) {
    setState(() {
      todo.completed = !todo.completed;
    });
    prefs.setStringList(todo.id,
        <String>[todo.name, todo.description, todo.completed.toString()]);
  }

  //edit todo item
  void _editTodo(Todo todo) {
    //i want to open an alert dialog to edit the title/description.
  }

  //deletes todo item by
  //accepting a todo, comparing it with the list, and identifying the match
  void _deleteTodo(Todo todo) {
    setState(() {
      _todos.removeWhere((element) => element.id == todo.id);
    });
    prefs.remove(todo.id);
  }

  void _moveTodo(Todo dragged, Todo droppedOn) {
    setState(() {
      _todos.removeWhere((element) => element.id == dragged.id);
      var i = _todos.indexWhere((element) => element.id == droppedOn.id);
      _todos.insert(i, dragged);
    });
  }

  //Future is used for async computation:
  //meaning it waits for user to tap Add or Cancel button
  Future<void> _displayDialog(String dialogType) async {
    return showDialog<void>(
      context: context,
      //barrierDismissible property is false, so
      //the alert dialog will not close if user taps outside of it
      barrierDismissible: false,
      builder: (BuildContext context) {
        return AlertDialog(
          title: Text('$dialogType your to-do item'),
          content: 
          Container(
            height: MediaQuery.of(context).size.height * 0.3,
            width: MediaQuery.of(context).size.width * 0.5,
            child: Column(
            children: <Widget>[
              TextField(
                keyboardType: TextInputType.multiline,
                minLines: 1,
                maxLines: 5,
                //renders text input field for title
                controller: _textFieldController1,
                decoration: const InputDecoration(hintText: 'title'),
                autofocus: true,
              ),
              TextField(
                keyboardType: TextInputType.multiline,
                minLines: 1,
                maxLines: 5,
                //renders text input field for description
                controller: _textFieldController2,
                decoration: const InputDecoration(hintText: 'description'),
                autofocus: true,
              ),
            ],
          ),
          ),
          actions: <Widget>[
            //renders two buttons: add and cancel
            OutlinedButton(
              style: OutlinedButton.styleFrom(
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(12),
                ),
              ),
              onPressed: () {
                //on press, cancel will close the dialog
                Navigator.of(context).pop();
                _textFieldController1.clear();
                _textFieldController2.clear();
              },
              child: const Text('Cancel'),
            ),
            ElevatedButton(
              style: ElevatedButton.styleFrom(
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(12),
                ),
              ),
              onPressed: () {
                //on press, add will close the dialog and add the to-do item
                Navigator.of(context).pop();
                _addTodoItem(
                    _textFieldController1.text, _textFieldController2.text);
              },
              child: Text(dialogType),
            ),
          ],
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      //list view iterates over the created todos
      //and passes each todo to the TodoItem widget
      body: ListView(
          padding: const EdgeInsets.symmetric(vertical: 8.0),
          children: _todos.map((Todo droppedOn) {
            return DragTarget<Todo>(builder: (context, a, b) {
              return LongPressDraggable<Todo>(
                data: droppedOn,
                dragAnchorStrategy: pointerDragAnchorStrategy,
                feedback: TodoItem(
                    todo: droppedOn,
                    onTodoChanged: _handleTodoChange,
                    editTodo: _editTodo,
                    removeTodo: _deleteTodo),
                child: TodoItem(
                    todo: droppedOn,
                    onTodoChanged: _handleTodoChange,
                    editTodo: _editTodo,
                    removeTodo: _deleteTodo),
              );
            }, onAccept: (todo) {
              _moveTodo(todo, droppedOn);
            });
          }).toList()),
      floatingActionButton: FloatingActionButton(
        onPressed: () => _displayDialog('Add'),
        tooltip: 'Add a to-do item',
        child: const Icon(Icons.add),
      ),
    );
  }
}

class Todo {
  Todo(
      {required this.id,
      required this.name,
      required this.description,
      required this.completed});
  String id;
  String name;
  String description;
  bool completed;
}

//class to display to-do items in list
//wrapped in longpressdraggable

class TodoItem extends StatelessWidget {
  //constructor requires a Todo and the method onTodoChanged to be passed
  TodoItem(
      {required this.todo,
      required this.onTodoChanged,
      required this.editTodo,
      required this.removeTodo})
      : super(key: ObjectKey(todo));

  final Todo todo;
  final void Function(Todo todo) onTodoChanged;
  final void Function(Todo todo) editTodo;
  final void Function(Todo todo) removeTodo;

  TextStyle? _getTextStyle(bool checked) {
    if (!checked) return null;

    //strikethrough text style, called later in this class
    return const TextStyle(
      color: Colors.black54,
      decoration: TextDecoration.lineThrough,
    );
  }

  @override
  Widget build(BuildContext context) {
    return ListTile(
      onTap: () {
        onTodoChanged(todo);
      },
      leading: Checkbox(
        checkColor: Colors.black,
        activeColor: Colors.lightGreen,
        value: todo.completed,
        onChanged: (value) {
          onTodoChanged(todo);
        },
      ),
      //title renders row of Text and IconButton widgets
      title: Row(children: <Widget>[
        Expanded(
          //if completed, display as strikethrough
          child: RichText(
            text: TextSpan(
                style: _getTextStyle(todo.completed),
                children: <TextSpan>[
                  TextSpan(
                      text: todo.name,
                      style: const TextStyle(fontWeight: FontWeight.w800)),
                  TextSpan(text: ' ${todo.description}')
                ]),
          ),
        ),
        IconButton(
          //edit icon
          iconSize: 30,
          icon: const Icon(
            Icons.edit,
            color: Colors.blue,
          ),
          alignment: Alignment.centerRight,
          onPressed: () {
            editTodo(todo);
          },
        ),
        IconButton(
          //delete icon
          iconSize: 30,
          icon: const Icon(
            Icons.delete,
            color: Colors.red,
          ),
          alignment: Alignment.centerRight,
          onPressed: () {
            removeTodo(todo);
          },
        ),
      ]),
    );
  }
}
