import google.generativeai as genai
import whisper # ffmpeg not working in mine (windows: choco install ffmpeg)
import speech_recognition as sr
from gtts import gTTS
import os

#                       Speech to text part

'''def record_and_save_wav(filename="output.wav"):
    recognizer = sr.Recognizer()
    mic = sr.Microphone()

    with mic as source:
        recognizer.adjust_for_ambient_noise(source)
        print("Speak now...")
        audio = recognizer.listen(source)
        print("Saving...")

    with open(filename, "wb") as f:
        f.write(audio.get_wav_data())
    print(f" Audio saved to {filename}")
    return filename

record_and_save_wav('output.wav')'''

import os, whisper

# Add ffmpeg path manually (change this if installed elsewhere)
os.environ["PATH"] += os.pathsep + r"C:\ffmpeg\bin"

def transcribe_audio(filename="output.wav", model_size="base"):
    model = whisper.load_model(model_size)
    result = model.transcribe(filename, fp16=False)
    print("Transcription:")
    print(result["text"])  # Correct way
    print(result["language"])
    return result

filename = "output.wav"
transcribe_audio(filename=filename, model_size="base")





