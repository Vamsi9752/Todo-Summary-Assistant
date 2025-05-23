# Todo-Summary-Assistant
A full-stack web application that allows users to manage personal to-do tasks, summarize pending todos using OpenAI GPT, and send summaries directly to a Slack channel using Incoming Webhooks.

-------------------------------------------------------------------------------------
Features

1- Add, edit, and delete personal to-do items
2- View a list of current todos
3- Generate a meaningful summary of pending todos using OpenAI API
4- Send the summary to a Slack channel with one click
5- Success/failure feedback for Slack posting

-------------------------------------------------------------------------------------

Tech Stack

Frontend
- React.js (with Axios and Bootstrap for styling)

Backend
- Spring Boot (Java)
- REST API endpoints
- MySQL (for persistent storage)
- OpenAI API integration
- Slack Incoming Webhooks integration

---------------------------------------------------------------------------------------

Project Structure

todo-summary-assistant/
│
├── backend/ (Spring Boot)
│   ├── controller/
│   ├── entity/
│   ├── repository/
│   ├── service/
│   ├── application.properties
│
├── frontend/ (React.js)
│   ├── public/
│   ├── src/
│   │   ├── components/(app,compo1,compo2)
│   │   ├── App.js
│   │   ├── index.js
│
├── README.md
