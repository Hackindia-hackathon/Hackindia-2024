from flask import Flask, request, jsonify
from transformers import T5ForConditionalGeneration, T5Tokenizer
# import torch

app = Flask(__name__)

# Load T5 Model for Text Generation
model_name = "t5-small"
model = T5ForConditionalGeneration.from_pretrained(model_name)
tokenizer = T5Tokenizer.from_pretrained(model_name)

@app.route('/generate', methods=['POST'])
def generate():
    data = request.json
    prompt = data.get('prompt')

    # Text Generation
    inputs = tokenizer.encode("translate English to French: " + prompt, return_tensors="pt", max_length=512, truncation=True)
    outputs = model.generate(inputs, max_length=512, num_beams=4, early_stopping=True)
    text_output = tokenizer.decode(outputs[0], skip_special_tokens=True)

    # Dummy image and sound output (replace with actual model integration)
    image_output = "https://via.placeholder.com/150"
    sound_output = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"

    return jsonify({
        "text": text_output,
        "image": image_output,
        "sound": sound_output
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
