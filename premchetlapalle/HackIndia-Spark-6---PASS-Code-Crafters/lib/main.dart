import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:woostorestackflutter/pages/SplashPage.dart';
import 'package:woostorestackflutter/services/ContractFactoryServies.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider<ContractFactoryServies>(create: (context)=>ContractFactoryServies(),
      child: MaterialApp(
      title: 'NFT MarketPlace',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(

        primarySwatch: Colors.blue,
      ),
      home: SplashPage(),
    ),);
  }
}


