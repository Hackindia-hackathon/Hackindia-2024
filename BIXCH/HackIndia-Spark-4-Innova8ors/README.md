# HackIndia-Spark-4-Innova8ors

----------------Generative AI Model with Decentralized Storage using IPFS, Flask, and Cohere-----------

This project develops a Generative AI model that creates unique digital content such as images and text. It stores the generated content using 
IPFS (InterPlanetary File System) for decentralized storage, ensuring immutability and accessibility through Web3.0 protocols. The project
uses Hugging Face for image generation, Cohere for text generation, Infura for interacting with IPFS, and Flask to host the web interface.

Table of Contents
>>Project Overview
>>Tech Stack
>>Installation
>> How It Works
>> API Endpoints

----------------------------Project Overview-------------------------------------------------------

The project demonstrates how to build a generative AI model that integrates both image and text generation using Cohere and Hugging Face, 
with decentralized storage through IPFS for ensuring data immutability and security. The project also includes a Flask-based web interface to 
interact with the AI model and retrieve stored content.

Key Features:
1. Generative AI Model: Uses Hugging Face to generate unique images and Cohere to generate text content.
2. Decentralized Storage: Integrates IPFS via Infura API to store the generated images and text.
3. Web Interface: Built using Flask for interacting with the model and viewing generated content.
4. Database: MySQL database for storing the IPFS CIDs and associated metadata.

------------------------Tech Stack-----------------------------------------------

Backend: Flask, Python
1. Image Generation: Hugging Face API
2. Text Generation: Cohere API
3. Decentralized Storage: IPFS, Infura API
4. Database: MySQL with SQLAlchemy for ORM
5. Frontend: HTML/CSS/JS
6. Other Tools: SQLAlchemy, Requests, MySQL Workbench


------------------Installation----------------------------------------------------

Prerequisites
>> Python 3.x
>> MySQL installed and running
>> Infura API key (for IPFS)
>> Hugging Face API key (for image generation)
>> Cohere API key (for text generation)

---------------------How It Works-------------------------------------

1. Image and Text Generation:
Hugging Face: Flask sends a request to the Hugging Face API to generate images.
Cohere: Flask sends a request to the Cohere API to generate text (such as image descriptions or metadata).

2. Decentralized Storage:
The generated content (images and text) is uploaded to IPFS via Infura, and the CID (Content Identifier) is returned.

3. Database Storage:
The CID along with the image description or generated text and associated metadata are stored in the MySQL database.

4.Web Interface:
Users can view generated images and texts, retrieve them via CIDs, and interact with the model.

-------------------API Endpoints------------------------------------------

1. /generate-image (POST)
Description: Generates a new image using Hugging Face and stores it in IPFS.
Response: Returns the CID of the image and a success message.
2. /generate-text (POST)
Description: Generates text content using Cohere and stores it in IPFS.
Response: Returns the CID of the text and a success message.
3. /get-content (GET)
Description: Fetches a list of all generated content (images and text) along with their CIDs and descriptions.
Response: JSON data containing all stored content.
4. /view-image/<cid> (GET)
Description: Fetches and displays a specific image from IPFS using its CID.
5. /view-text/<cid> (GET)
Description: Fetches and displays a specific text content from IPFS using its CID.
