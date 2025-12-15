# 💬 ChatApp - ALX Final Project

ChatApp is a **scalable, real-time web chat application** built with **Node.js** and **React.js**, powered by **ChatEngine.io**. It supports both **1-on-1 and group conversations**, delivering fast, reliable messaging with modern chat features you’d expect from a production-ready system.

This project focuses on **real-time communication**, clean frontend–backend integration, and leveraging third-party APIs to accelerate development without sacrificing flexibility.

---

## ✨ Features

* ⚡ Real-time messaging
* 👥 Group chats and 1-on-1 conversations
* 📎 Image & file sharing
* 👀 Read receipts
* 🔄 Live message updates without refresh
* 🧩 Scalable chat architecture
* 🌐 Web-based interface

---

## 🛠 Tech Stack

### Frontend

* **React.js** – UI library
* **JavaScript** – Core language
* **CSS** – Styling

### Backend

* **ChatEngine.io** – Real-time chat infrastructure

---

## 🧠 Architecture Overview

ChatApp uses a **real-time, event-driven architecture**:

* React handles the user interface and client-side state
* ChatEngine.io handles message delivery, presence, read receipts, and media support

This setup ensures:

* Low latency communication
* Easy horizontal scaling
* Clean separation of concerns

---

## 🔌 Real-Time Communication Flow

1. User logs in from the React app
3. App connects the user to ChatEngine.io via Chatengine API Endpoint
4. Messages are sent and received in real time
5. Read receipts and updates are instantly synced

---

## 🚀 Getting Started

### Prerequisites

* Node.js
* npm or yarn
* ChatEngine.io account

---

### Clone the Repository

```bash
git clone https://github.com/Adam2fg/chatapp-nodejs_reactjs.git
cd chatapp-nodejs_reactjs
```

---

### Install Dependencies

#### Frontend

```bash
cd client
npm install
npm start
```

---

## 🔐 Environment Variables

Create a `.env` file for the backend:

```env
CHAT_ENGINE_PROJECT_ID=your_project_id
CHAT_ENGINE_PRIVATE_KEY=your_private_key
PORT=5000
```

---

## 🧪 Testing

* Manual testing for real-time message flow
* Multiple browser sessions for concurrency testing
* Media upload and read receipt validation

---

## 🛣 Future Improvements

* 🔐 User authentication & roles
* 🔔 Typing indicators
* 📱 Mobile-responsive enhancements
* 🧵 Message reactions & threading

---

## 🤝 Contributing

Contributions are welcome:

1. Fork the repo
2. Create a new branch
3. Commit your changes
4. Open a pull request

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙌 Acknowledgements

Built using ChatEngine.io to deliver fast, reliable real-time communication while focusing on clean architecture and scalability.

---
