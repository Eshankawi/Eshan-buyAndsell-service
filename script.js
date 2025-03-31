async function submitData() {
    const phoneNumber = document.getElementById("phone-number").value;
    const imageFile = document.getElementById("image-upload").files[0];

    if (!phoneNumber || !imageFile) {
        alert("Please enter a phone number and upload an image!");
        return;
    }

    const formData = new FormData();
    formData.append("file", imageFile);
    formData.append("phoneNumber", phoneNumber);

    try {
        const response = await fetch("https://your-server.com/upload", {
            method: "POST",
            body: formData
        });

        const result = await response.json();
        if (result.success) {
            alert("Profile picture updated successfully!");
        } else {
            alert("Failed to update profile picture.");
        }
    } catch (error) {
        alert("Error: " + error.message);
    }
}
