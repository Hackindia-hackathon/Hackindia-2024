from flask import Flask, request, jsonify, render_template
import openai
import random
import logging
import requests

app = Flask(__name__)
logging.basicConfig(level=logging.INFO)

# Set your OpenAI API key
OPENAI_API_KEY = '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'
openai.api_key = OPENAI_API_KEY

# IPFS API endpoint
IPFS_API_URL = 'http://localhost:5001/api/v0'

@app.route('/')
def index():
    return render_template('index.html')  # Your HTML UI for chat

@app.route('/webhook', methods=['POST'])
def webhook():
    try:
        req = request.get_json(force=True)
        logging.info(f"Received request: {req}")

        user_input = req['message']
        logging.info(f"User input: {user_input}")

        # Save user input to IPFS
        ipfs_hash = save_to_ipfs(user_input)
        logging.info(f"Saved to IPFS with hash: {ipfs_hash}")

        # Generate response based on user input
        response_text = generate_response(user_input)
        logging.info(f"Response text: {response_text}")

        return jsonify({'response': response_text, 'ipfs_hash': ipfs_hash})
    except Exception as e:
        logging.error(f"Error: {e}")
        return jsonify({'error': str(e)}), 400

def generate_response(prompt):
    # Handle casual conversations and generate stories
    if prompt.lower() in ["or sunao", "or kya haal", "aaj din kaisa raha", "aaj kuch hua kya"]:
        return "Pata hai aaj kya hua! " + generate_fake_story()

    try:
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are a friendly and engaging assistant. Use both Hinglish and English in your responses."},
                {"role": "user", "content": prompt}
            ],
            max_tokens=150,
            temperature=0.7
        )
        response_text = response.choices[0].message['content'].strip()
        return response_text
    except openai.OpenAIError as e:
        logging.error(f"OpenAI API error: {e}")
        return "Sorry, I'm having trouble processing your request."
    except Exception as e:
        logging.error(f"General error: {e}")
        return "Sorry, I'm having trouble processing your request."

def generate_fake_story():
    stories = [
        "Aaj maine ek naya book padha. Bohut interesting tha, par abhi tak mujhe samajh nahi aaya ki ending kya thi!",
        "Kal raat ko maine ek naya recipe try kiya, aur kitchen mein thodi zyada hi mess ho gayi! Par food accha bana.",
        "Maine aaj subah ek choti si walk ki, aur wahan ek cute sa puppy mila. Bohut maza aaya uske saath khelne mein."
    ]
    return random.choice(stories)

def save_to_ipfs(data):
    try:
        files = {'file': ('data.txt', data)}
        response = requests.post(f'{IPFS_API_URL}/add', files=files)
        response.raise_for_status()  # Raise an exception for HTTP errors
        return response.json()['Hash']
    except requests.RequestException as e:
        logging.error(f"Error saving to IPFS: {e}")
        return "Error saving to IPFS."

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
