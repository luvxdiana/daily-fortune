# ☁️ Daily Fortune

**Daily Fortune** is a responsive, multilingual Progressive Web App (PWA) that delivers a little daily fortune with a touch of magic, humor, and girl power.

Open a pastel envelope, reveal your message, and come back tomorrow for another surprise.

From sweet affirmations to savage cosmic predictions, the universe always has something to say. 💋

## 🌐 Live Demo

**[Open Daily Fortune](https://luvxdiana.github.io/daily-fortune/)**

## ✨ Features

- Interactive envelope with opening and letter-reveal animations
- 100 unique fortunes featuring affirmations, humor, love, money, and girl power
- Three languages: English, Ukrainian, and Norwegian (Bokmål)
- Interactive cloud-shaped language selector
- One fortune per day, with the next message unlocking at local midnight
- Live countdown timer
- Local Storage for saving the daily fortune and language preference
- Responsive design for mobile phones, tablets, and desktops
- Progressive Web App support
- Custom app icons and browser favicon
- Offline-capable experience through Service Worker caching
- No registration or login required

## 🎨 Design

Daily Fortune combines a dreamy pastel-blue aesthetic with playful coquette-inspired details.

The interface features a custom background, floating clouds, decorative postage stamps, soft gradients, and an animated envelope.

The fortune collection ranges from gentle encouragement to unexpected sarcastic predictions.

## 🛠️ Tech Stack

**Frontend**

- HTML5
- CSS3
- JavaScript (Vanilla)

**Progressive Web App**

- Web App Manifest
- Service Worker
- Cache API
- Local Storage

**Development & Deployment**

- Visual Studio Code
- Git & GitHub
- GitHub Pages

## 🌍 Languages

The application supports:

- English (EN)
- Українська (UA)
- Norsk Bokmål (NO)

The interface and fortune messages are translated into all three languages.

Users can switch languages at any time without resetting their daily fortune or countdown.

## 📁 Project Structure

```text
daily-fortune/
├── assets/
│   ├── background.png
│   ├── logo.png
│   ├── cloud.png
│   └── app icons
├── index.html
├── style.css
├── script.js
├── translations.js
├── manifest.json
├── service-worker.js
└── README.md
```

## 🚀 Running Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/luvxdiana/daily-fortune.git
   ```

2. Open the `daily-fortune` folder in Visual Studio Code.

3. Install the **Live Server** extension.

4. Open `index.html` using **Go Live**.

5. Enjoy your daily fortune!

No backend, database, or environment variables are required.

## ⏳ Daily Fortune System

Each day, the application randomly selects one fortune.

The selected message is saved locally in the browser and remains available throughout the day.

A countdown shows the time remaining until the next local midnight.

Changing the language displays the same fortune in the selected language.

**Note:** The daily limit is enforced using browser Local Storage, not a server. Progress is specific to each browser and device and can be reset by clearing browser data.

## 📱 PWA Support

Daily Fortune includes a Web App Manifest, custom icons, and a Service Worker.

On supported devices and browsers, users can add the application to their home screen.

Previously cached app resources allow basic offline functionality.

## 📌 Project Status

**Live — Portfolio Project**

Daily Fortune is an independent frontend project created to demonstrate responsive web design, interactive animations, multilingual interfaces, browser storage, and Progressive Web App development.

## 👩‍💻 Development

Designed and developed independently.

**GitHub:** [luvxdiana](https://github.com/luvxdiana)
