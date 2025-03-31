import { useState } from "react";

export default function Home() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("image", image);

    const response = await fetch("http://localhost:5000/upload", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    alert(`Processed Image: ${data.url}`);
  };

  return (
    <div className="flex flex-col items-center p-5">
      <h1 className="text-2xl font-bold">Eshan Profile Picture</h1>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="mt-4 p-2 border border-gray-300 rounded"
      />
      {preview && (
        <img
          src={preview}
          alt="Preview"
          className="mt-4 w-40 h-40 object-cover"
        />
      )}
      <button
        onClick={handleSubmit}
        className="mt-4 p-2 bg-blue-500 text-white rounded"
      >
        Upload & Process
      </button>
    </div>
  );
      }
