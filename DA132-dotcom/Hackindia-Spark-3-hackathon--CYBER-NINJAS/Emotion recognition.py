import cv2
import face_recognition
from deepface import DeepFace
from gtts import gTTS
import os

def react_to_emotion(emotion):
    reactions = {
        "happy": "You're glowing! Keep smiling!",
        "sad": "It's okay, things will get better!",
        "angry": "Take a deep breath. Let’s cool down.",
        "neutral": "Why so serious? Let's have some fun!",
        "surprise": "Wow, did something amazing just happen?"
    }

    if emotion in reactions:
        message = reactions[emotion]
        tts = gTTS(text=message, lang='en')
        tts.save("emotion_response.mp3")
        os.system("emotion_response.mp3")

def main():
    video_capture = cv2.VideoCapture(0)

    while True:
        ret, frame = video_capture.read()
        if not ret:
            print("Failed to grab frame")
            break

        face_locations = face_recognition.face_locations(frame)

        for top, right, bottom, left in face_locations:
            face_image = frame[top:bottom, left:right]

            # Use DeepFace for emotion analysis
            result = DeepFace.analyze(face_image, actions=['emotion'], enforce_detection=False)
            
            # Print result to understand its structure
            print("DeepFace Result:", result)
            
            # Check if result is a list and process accordingly
            if isinstance(result, list) and len(result) > 0:
                result = result[0]  # Take the first item in the list
                emotion = result['dominant_emotion']
            else:
                print("No valid result found")
                continue

            # Display the emotion on the frame
            cv2.putText(frame, emotion.capitalize(), (left, top - 10), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2, cv2.LINE_AA)

            # React to the detected emotion
            react_to_emotion(emotion)
            print(f"Detected emotion: {emotion.capitalize()}")

        # Display the resulting frame
        cv2.imshow('Emotion-Aware Surveillance', frame)

        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    video_capture.release()
    cv2.destroyAllWindows()

if __name__ == "__main__":
    main()
