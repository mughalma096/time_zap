# 🕒 TimeZone App

A full-stack application built with **Ruby on Rails 7** and **React 19**, using **Vite** for modern frontend asset bundling. The app allows users to manage timezones, convert time across regions, and securely authenticate with token-based sessions.

---

## 🚀 Architecture

### 🔧 Backend
- **Ruby on Rails**
- **Token based Authentication**
- **Authorization**: [CanCanCan](https://github.com/CanCanCommunity/cancancan) + [Rolify](https://github.com/RolifyCommunity/rolify)

### 🎨 Frontend
- **React** with Functional Components
- **React Router DOM** for client-side navigation
- **Context API** for session management
- **Material UI (MUI)** for sleek UI components
- **Axios** for HTTP requests
- **Vite** via `vite_rails` gem for fast builds

---

## ✨ Features

- ✅ **User Registration**
- 🔐 **Token-Based Sign In & Sign Out**
- 🌐 **React Context API** for managing authenticated user sessions
- 🛡️ **Role-Based Access Control** using CanCanCan + Rolify
- 📆 **Timezone CRUD**: Create, Read, Update, Delete timezones
- 🌍 **Time Conversion** to different timezones
- 🧭 **Frontend Routing** using React Router DOM
- 🎨 **Material UI** for modern, responsive UI components
- ⚡ **Axios** for secure and efficient data fetching

---

## 🛠️ Tech Stack

| Technology              | Usage                       |
|-------------------------|-----------------------------|
| **Ruby 3.3**            | Language                    |
| **Rails 7**             | MVC Framework               |
| **React 19**            | Core UI Library             |
| **React Router DOM v7** | Routing and navigation      |
| **Material UI v7**      | UI Components               |
| **Vite**                | Fast development/build tool |

---
## 🚀 Getting Started

### Prerequisites

- Node.js v18 or later
- npm or yarn
---
## 📌 Scripts
| Script                               | Description                     |
|--------------------------------------|---------------------------------|
| `bundle install`                     | Install backend Dependencies    |
| `yarn install`                       | Install frontend Dependencies   |
| `rails db:create db:migrate db:seed` | Set up database                 |
| `bin/vite dev`                       | Run the Vite development server |
| `rails server`                       | Start the Rails server          |
| `bundle exec rspec`                  | To run the backend test suite   |
---
## 🚧 Future Enhancements
- 🧩 Timezone search with autocomplete
- 🔔 Real-time notifications using ActionCable or WebSockets
- 🌙 Dark mode toggle
- ✅ Password reset & email verification
- ✅ Form validation enhancements

---
## 🧑‍💻 Contributing
Contributions are welcome! Please fork the repo and submit a pull request for any improvements, features, or fixes.

---
## 📄 License

This project is licensed under the **MIT License**.