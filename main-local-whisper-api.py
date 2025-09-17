# whisper api + gpt4all local + gtts
import google.generativeai as genai
import whisper # ffmpeg not working in mine (windows: choco install ffmpeg --> env path)
import speech_recognition as sr
from gtts import gTTS
import os
import openai
from gpt4all import GPT4All

openai.api_key = "openai_api_key_here"

#                       Speech to text part
## record audio and save in .wav file
def record_and_save_wav(filename="output.wav"):
    recognizer = sr.Recognizer()
    mic = sr.Microphone()

    with mic as source:
        recognizer.adjust_for_ambient_noise(source)
        print("Speak now...")
        audio = recognizer.listen(source)
        print("Saving...")

    with open(filename, "wb") as f:
        f.write(audio.get_wav_data())
    print(f"Audio saved to {filename}")
    return filename

## infer .wav file to text (using whisper)
def transcribe_audio(filename="output.wav", model_size="base"):
    with open(filename, 'rb') as audio_file:
        # Make the request to Whisper API
        response = openai.Audio.transcribe(
            model="whisper-1",  # You can use other models if available
            file=audio_file,
            language="auto"  # This allows Whisper to detect the language automatically
        )
    return response['text'], response['language']

filename = record_and_save_wav("test.wav")
os.system(f"afplay {filename}")




#                            AI part

model_path = "/Users/sambhav/Library/Application Support/nomic.ai/GPT4All/Llama-3.2-3B-Instruct-Q4_0.gguf"
model = GPT4All(model_path)
system_prompt = (
    "You are a highly experienced practical medical doctor. "
    "Answer questions clearly, professionally, and helpfully. "
    "Use simple language suitable for patients. "
    "Do not provide medical advice that requires emergency attention."
    " "
)
query, lang = transcribe_audio(filename, model_size="base")["text"]
response = model.generate(system_prompt + query)
print("Response:")
print(response)



#                         Text to speech part

text = response.text
## audio output

def text_to_speech(text, lang, filename='output.mp3'):
    tts = gTTS(text=text, lang=lang)
    tts.save(filename)
    print(f"Saved to {filename}")
    os.system(f"afplay {filename}")
    # Windows: os.system(f"start {filename}")

# text_to_speech(text='हाय अजलान, कशी आहेस', lang='mr', filename='output.mp3')
text_to_speech(text=text, lang=lang, filename="output.mp3")
