require('dotenv').config();
const express = require('express');
const multer = require('multer');
const puppeteer = require('puppeteer');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('file'), async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }

    const imagePath = path.join(__dirname, req.file.path);
    const phoneNumber = req.body.phoneNumber;

    try {
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();

        // Navigate to WhatsApp Web
        await page.goto('https://web.whatsapp.com/', { waitUntil: 'networkidle2' });

        // Wait for login (User must scan the QR code manually)
        await page.waitForSelector('canvas[aria-label="Scan me!"]', { hidden: true });

        // Navigate to profile settings
        await page.click('span[data-icon="menu"]');
        await page.waitForSelector('div[title="Profile"]');
        await page.click('div[title="Profile"]');

        // Click on the profile picture
        await page.waitForSelector('div[role="button"]');
        await page.click('div[role="button"]');

        // Upload the new profile picture
        const input = await page.waitForSelector('input[type="file"]');
        await input.uploadFile(imagePath);

        await page.waitForTimeout(5000);
        await browser.close();

        res.json({ success: true, message: 'Profile picture updated!' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Failed to update profile picture' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
