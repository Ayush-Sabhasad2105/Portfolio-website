# Personal Portfolio Website

A personal portfolio website built using HTML, CSS, and JavaScript.

## Live Website

🔗 [https://sage-banoffee-8005d5.netlify.app](https://sage-banoffee-8005d5.netlify.app)

---

## Features

* Responsive portfolio layout
* Blog pages
* Resume section
* Contact links
* Static website deployment using Netlify

---

## Tech Stack

* HTML5
* CSS3
* JavaScript

---

## Project Structure

```text
project/
├── public_html/
│   ├── index.html
│   ├── blog1.html
│   ├── blog2.html
│   ├── style.css
│   ├── script.js
│   └── assets/images
├── package.json
└── README.md
```

---

## Installation & Running Locally

### Clone Repository

```bash
git clone <your-repository-url>
cd <repository-name>
```

### Install Dependencies

```bash
npm install
```

### Run Locally

Using VS Code Live Server:

1. Open the project in VS Code
2. Install the Live Server extension
3. Right click `index.html`
4. Click `Open with Live Server`

Or using Python:

```bash
cd public_html
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

---

## Deployment

This website is deployed using Netlify.

### Steps

1. Push project to GitHub
2. Connect repository to Netlify
3. Set publish directory to:

```text
public_html
```

4. Deploy site

---

## Removing node_modules from Git

Create a `.gitignore` file:

```gitignore
node_modules/
```

Then run:

```bash
git rm -r --cached node_modules
git add .
git commit -m "Removed node_modules"
git push
```

---

## Author

Ayush Sabhasad
