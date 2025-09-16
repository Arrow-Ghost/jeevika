import google.generativeai as genai
import whisper # ffmpeg not working in mine (windows: choco install ffmpeg)
import speech_recognition as sr
from gtts import gTTS
import os

#                       Speech to text part

'''
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
    print(f"📁 Audio saved to {filename}")
    return filename


def transcribe_audio(filename="output.wav", model_size="base"):
    model = whisper.load_model(model_size)
    result = model.transcribe(filename)             # language
    print("📄 Transcription:")
    print(result["text"])                            # text
    return result["text"]

filename = record_and_save_wav("test.wav")
'''





#                            AI part
'''
API_KEY = "AIzaSyDMs-O2oZnqzRqjhri__lmG4jfJJxqawIU"
genai.configure(api_key=API_KEY)
model = genai.GenerativeModel(model_name="models/gemini-1.5-flash")  # "models/gemini-1.5-pro"
query = 'खराब गले जैसे लक्षणों में मैं अपना ख्याल कैसे रख सकता हूं?'
# query = transcribe_audio(filename, model_size="base")
response = model.generate_content(query)
print("--- Output ---")
print(response.text)
'''



#                         Text to speech part


def text_to_speech(text, lang='hi', filename='output.mp3'):
    tts = gTTS(text=text, lang=lang)
    tts.save(filename)
    print(f"Saved to {filename}")
    os.system(f"afplay {filename}")
    # Windows: os.system(f"start {filename}")

text_to_speech(text='mera naam jeevika hai, mai aapki kaise maddat kar sakti hoon.', lang='hi', filename='output.mp3')
# text_to_speech("तुमचे स्वागत आहे", lang='mr')
