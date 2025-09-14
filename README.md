# REAL-TIME-CHAT-APPLICATION

*COMPANY*:CODTECH IT SOLUTIONS

*NAME*:RAJURE DHANIKA

*INTERN ID*:CT04DY927

*DOMAIN*:FRONT END DEVELOPMENT

*DURATION*:4 WEEKS

*MENTOR*:NEELA SANTHOSH KUMAR

**Project Overview:**

This **Real-Time Chat Application** is a responsive, modern messaging platform built using **WebSockets** for real-time communication and a front-end framework like **Vue.js** or **React.js** for the UI. The app enables multiple users to join, send, and receive messages instantly in a chat room environment.

The core focus is on delivering a **seamless chat experience** with **live message updates**, **message history**, and a **responsive interface** that works across all screen sizes.

 **Key Features:**

1. Real-Time Messaging (WebSockets)

* Utilizes **WebSockets** (e.g., via **Socket.IO**) to establish a persistent connection between clients and the server.
* Messages are delivered instantly without the need for manual refresh or polling.

2. Message History

* Displays recent chat messages when a user joins.
* Messages are stored on the server or in local state (e.g., using arrays, databases like MongoDB).
* Scrollable chat window with timestamped messages.

 3. Chat Interface

* Users can type and send messages using an intuitive UI.
* Messages appear in the chat feed in real-time, with the sender clearly identified.
* Auto-scroll to the latest message.
* Keyboard (Enter key) support for sending messages.

 4. Responsive Design

* Mobile-friendly layout using CSS Flexbox/Grid or utility frameworks like Tailwind CSS or Bootstrap.
* Optimized for both desktop and mobile devices.

**How It Works:**

1. **User connects** to the WebSocket server via the browser.
2. Server keeps track of connected clients.
3. When a message is sent from one user:

   * It is **broadcast** to all other connected clients.
   * It is **stored** temporarily or in a database for message history.
4. New users joining receive the last few messages (message history).
5. The front-end UI dynamically updates in real-time without reloading the page.

##OUTPUT:

<img width="1676" height="939" alt="Image" src="https://github.com/user-attachments/assets/b182481e-c5fd-470c-9dc2-2312753c5da9" />
