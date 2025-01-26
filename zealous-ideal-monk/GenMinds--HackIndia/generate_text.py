# Import the necessary tools from the library
from transformers import GPT2LMHeadModel, GPT2Tokenizer

# Load the pre-trained GPT-2 model and tokenizer
model_name = 'gpt2'
model = GPT2LMHeadModel.from_pretrained(model_name)
tokenizer = GPT2Tokenizer.from_pretrained(model_name)
#50256

# This is the starting text we give to the model
input_text = input("Enter text: ")

# Encode the input text into a format the model understands
input_ids = tokenizer.encode(input_text, return_tensors='pt')

# Generate text based on the input
output = model.generate(input_ids, max_length=50, num_return_sequences=1)

# Decode the generated text into a readable format
output_text = tokenizer.decode(output[0], skip_special_tokens=True)

# Print the result
print(output_text)
