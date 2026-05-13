# 🚀 St. Clare Project

A web application built with **Node.js** and **Express**, featuring a local SQLite database integration.

---

## 📋 Prerequisites

Before running this project, you must install the following tools:

*   **Node.js (LTS Version):** [Download Node.js](https://nodejs.org/en/download/) (Includes `npm`)
*   **VS Code (Recommended Editor):** [Download Visual Studio Code](https://code.visualstudio.com/)
*   **SQLite Browser (Optional):** [Download DB Browser for SQLite](https://sqlitebrowser.org/dl/) (To manually view the `.db` file)

---

## ⚙️ Installation & Setup

Follow these steps to get your local environment running:

### 1. Download the Project
*   **Via ZIP:** Click the green **Code** button on GitHub and select **Download ZIP**. Extract the contents to your desired folder.
*   **Via Git:** Run this command in your terminal:
    ```bash
    git clone [https://github.com/decenaryan19/stclare.git](https://github.com/decenaryan19/stclare.git)

2. Open your terminal or Command Prompt and navigate to the project directory:

Bash
cd stclare


3. Install Dependencies
This project requires specific packages (like express and sqlite3). To install them automatically based on the package.json file, run:

npm install

Note: This command will download all necessary libraries into a node_modules folder.

🗄️ Database Configuration
Based on the file structure, this project uses a local SQLite database.

Database File: st_clare_college.db
Driver: The sqlite3 npm package is used to interact with the database.
Setup: The database is automatically connected when the server starts. No external database server installation is required.

🏃 How to Run Locally
Start the Server:
In your terminal, type:

Bash
node server.js

2.  **Access the Application:**
    Once the terminal indicates the server is active, open your web browser and go to:
    `http://localhost:3000`
    *(Note: If your code uses a different port, replace `3000` with the correct number).*

3.  **To Stop the Server:**
    Press `Ctrl + C` in your terminal window.

---

## 📂 Project Structure
*   `server.js`: The backend logic and API routes.
*   `index.html`: The main landing page.
*   `admin.html`: The administrative interface.
*   `st_clare_college.db`: The SQLite database file.
*   `package.json`: Project metadata and dependency list.

---

### 💡 Quick Tip for Development
To avoid restarting the server manually after every code change, you can use **Nodemon**:
```bash
npm install -g nodemon
nodemon server.js
