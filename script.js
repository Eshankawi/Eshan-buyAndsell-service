const imageUpload = document.getElementById("image-upload");
const imagePreview = document.getElementById("image-preview");
const downloadButton = document.getElementById("download-btn");

imageUpload.addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement("img");
            img.src = e.target.result;
            img.onload = function() {
                // Resizing and cropping image
                const canvas = document.createElement("canvas");
                const ctx = canvas.getContext("2d");
                const size = Math.min(img.width, img.height);
                canvas.width = size;
                canvas.height = size;

                // Draw circular cropped image
                ctx.beginPath();
                ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
                ctx.clip();
                ctx.drawImage(img, (img.width - size) / 2, (img.height - size) / 2, size, size);

                const circularImage = canvas.toDataURL();
                imagePreview.innerHTML = ''; // Clear previous preview
                const imageElement = document.createElement("img");
                imageElement.src = circularImage;
                imagePreview.appendChild(imageElement);

                // Enable download button
                downloadButton.disabled = false;
                downloadButton.onclick = function() {
                    const link = document.createElement("a");
                    link.href = circularImage;
                    link.download = "Eshan_Profile_Picture.png";
                    link.click();
                };
            };
        };
        reader.readAsDataURL(file);
    }
});
