
import 'package:flutter/material.dart';

class Constants {

  //=======>Blockchain Data

  //Contract Data
  final CONTRACT_ADDRESS = "0x37369b8a6befccc4c5d4a6d0e9284e5b002e795f";
  final CONTRACT_ABI_PATH = "images/abis/MarketplaceProducts.json";

  //Blockchain Network Data
  final NETWORK_HTTPS_RPC = "https://sepolia.infura.io/v3/38919329ebb948cb93117c9374aa518d";
  final  NETWORK_WSS_RPC = "wss://sepolia.infura.io/ws/v3/38919329ebb948cb93117c9374aa518d";
  final CHAIN_ID =11155111;
  final imageMoke = "https://images.unsplash.com/photo-1618042164219-62c820f10723?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80";

  //PINATA DATA
  final PINATA_API_KEY = "8f3f85e1abf9b60d640b";
  final PINATA_API_SECRET_KEY ="6d3ac72d98de76085a0041ad5a71f290d0da9bb124e54644f413fa14e3432e30";
  final PINATE_END_POINT_API ="https://api.pinata.cloud/pinning/pinFileToIPFS";
  final PINATE_FETCH_IMAGE_URL = "https://gateway.pinata.cloud/ipfs/";


  //========>
  final mainYellowColor =  Color(0xff092454);
  final mainBlackColor =  Color(0xff08090B);
  final mainGrayColor =  Color(0xffA2A9C2);
  final mainBGColor =  Color(0xffF4F4F5);
  final mainWhiteGColor =  Color(0xffF8F1FC);
  final mainButttonColor =  Color(0xffF8F0FD);
  final mainRedColor =  Color(0xffC2161E);

    final List<String> categoryList = <String>[
      "Games","Art","Sport","3D","Photograpghy","Collectables"
    ];

    final mokeParagraph = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,";
}