import 'package:flutter/material.dart';

//built basic features using this tutorial:
//https://www.freecodecamp.org/news/learn-state-management-in-flutter/

//should have these features:
//1. each item has a title and description (need to add description feature)
//2. items should be able to be dragged around for priority
//3. items should be remembered on device storage (right now, they get deleted if the app closes and is reopened)
//4. items should be able to be deleted (need to fix bug - if items have same name and one is deleted, both are deleted)


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
  final TextEditingController _textFieldController = TextEditingController();

  //for adding new todo list items.
  //displays text field for name and completed is initially false
  void _addTodoItem(String name, String description) {
    setState(() {
      _todos.add(Todo(name: name, description: description, completed: false));
    });
    _textFieldController.clear();
  }

  //changes completion status. will call this onclick checkbox.
  void _handleTodoChange(Todo todo) {
    setState(() {
      todo.completed = !todo.completed;
    });
  }

  //deletes todo item by
  //accepting a todo, comparing it with the list, and identifying the match
  void _deleteTodo(Todo todo) {
    setState(() {
      _todos.removeWhere((element) => element.name == todo.name);
    });
  }

  //Future is used for async computation:
  //meaning it waits for user to tap Add or Cancel button
  Future<void> _displayDialog() async {
    return showDialog<void>(
      context: context,
      //barrierDismissible property is false, so
      //the alert dialog will not close if user taps outside of it
      barrierDismissible: false,
      builder: (BuildContext context) {
        return AlertDialog(
          title: const Text('Add a to-do item'),
          content: TextField(
              //renders text input field for title
              controller: _textFieldController,
              decoration:
                  const InputDecoration(hintText: 'Type your to-do title'),
              autofocus: true,
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
                _addTodoItem(_textFieldController.text, _textFieldController.text);
              },
              child: const Text('Add'),
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
          children: _todos.map((Todo todo) {
            return TodoItem(
                todo: todo,
                onTodoChanged: _handleTodoChange,
                removeTodo: _deleteTodo);
          }).toList()),
      floatingActionButton: FloatingActionButton(
        onPressed: () => _displayDialog(),
        tooltip: 'Add a to-do item',
        child: const Icon(Icons.add),
      ),
    );
  }
}

class Todo {
  Todo({required this.name, required this.description, required this.completed});
  String name;
  String description;
  bool completed;
}

//class to display to-do items in list
class TodoItem extends StatelessWidget {
  //constructor requires a Todo and the method onTodoChanged to be passed
  TodoItem(
      {required this.todo,
      required this.onTodoChanged,
      required this.removeTodo})
      : super(key: ObjectKey(todo));

  final Todo todo;
  final void Function(Todo todo) onTodoChanged;
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
        checkColor: Colors.greenAccent,
        activeColor: Colors.black12,
        value: todo.completed,
        onChanged: (value) {
          onTodoChanged(todo);
        },
      ),
      //title renders row of Text and IconButton widgets
      title: Row(children: <Widget>[
        Expanded(
          //if completed, display as strikethrough
          child: Text(todo.name, style: _getTextStyle(todo.completed)),
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
