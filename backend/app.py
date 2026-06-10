import os
import base64
from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import cloudinary
import cloudinary.uploader

# load env variables
load_dotenv()

app = Flask(__name__)
CORS(app)

# Cloudinary config from .env
cloudinary.config(
    cloud_name=os.getenv("CLOUDINARY_CLOUD_NAME"),
    api_key=os.getenv("CLOUDINARY_API_KEY"),
    api_secret=os.getenv("CLOUDINARY_API_SECRET")
)


@app.route("/upload", methods=["POST"])
def upload_image():
    data = request.get_json()
    if not data or "image" not in data:
        return jsonify({"error": "No image received"}), 400
    image_data = data["image"]
    # remove base64 prefix if present
    if "," in image_data:
        image_data = image_data.split(",")[1]
    try:
        # upload to cloudinary
        result = cloudinary.uploader.upload(
            f"data:image/png;base64,{image_data}"
        )
        return jsonify({
            "url": result["secure_url"]
        })
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)