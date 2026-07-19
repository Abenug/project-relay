import 'package:flutter/material.dart';

void main() {
  runApp(const ProjectRelayApp());
}

class ProjectRelayApp extends StatelessWidget {
  const ProjectRelayApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Project Relay',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const HomeScreen(),
    );
  }
}


class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});


  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Project Relay"),
      ),

      body: const Center(
        child: Text(
          "Welcome to Project Relay",
          style: TextStyle(
            fontSize: 24,
          ),
        ),
      ),
    );
  }
}