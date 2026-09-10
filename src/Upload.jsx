import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

export default function Upload({ onUpload }) {
  const [uploadedPhotos, setUploadedPhotos] = useState([]);

  const handlePhotoUpload = (event) => {
    const files = Array.from(event.target.files || []);

    const newPhotos = files.map((file) => ({
      id: `${file.name}-${Date.now()}-${Math.random()}`,
      name: file.name,
      url: URL.createObjectURL(file)
    }));

    setUploadedPhotos((currentPhotos) => [
      ...currentPhotos,
      ...newPhotos
    ]);

    // Add 5 points for each uploaded photo
    if (
      typeof onUpload === "function" &&
      newPhotos.length > 0
    ) {
      onUpload(newPhotos.length * 5);
    }

    // Allow selecting the same file again
    event.target.value = "";
  };

  return (
    <div className="upload-page">
      {/* Upload section */}
      <div className="photo-upload-section">

        <div className="photo-upload-copy">

          <h2>Upload Photos 🖼️</h2>

          <p>
            Share your favorite art images and build a gallery
            that grows with your creativity.
          </p>

        </div>

        <label className="upload-button">

          <span>Choose Photos</span>

          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handlePhotoUpload}
          />

        </label>

        {/* Gallery */}
        {uploadedPhotos.length > 0 && (

          <div className="photo-gallery">

            {uploadedPhotos.map((photo) => (

              <div
                className="photo-card"
                key={photo.id}
              >

                <img
                  src={photo.url}
                  alt={photo.name}
                />

                <p>{photo.name}</p>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>
  );
}