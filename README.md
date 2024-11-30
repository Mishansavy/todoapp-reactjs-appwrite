# Todo App with ReactJS and Appwrite

This project demonstrates how to build a simple todo app using ReactJS for the frontend and Appwrite for the backend. It allows users to create, update, and delete todo items, with the data being persisted in an Appwrite database.

## Features

- **Create new todo items:** Add new tasks to your list.
- **Mark items as complete:** Track your progress by checking off finished tasks.
- **Delete todo items:** Remove tasks that are no longer needed.
- **Persistent storage:** Your todo items are stored in an Appwrite database, ensuring your data is saved.

## Technologies Used

- **ReactJS:** Frontend JavaScript library for building user interfaces.
- **Appwrite:** Open-source backend-as-a-service platform for building web and mobile applications.

## Prerequisites

- **Node.js and npm:** Make sure you have Node.js and npm installed on your machine.
- **Appwrite Account:** Sign up for an Appwrite account and create a new project.

## Project Setup

### Frontend

1. **Clone the repository:** `git clone https://github.com/Mishansavy/todoapp-reactjs-appwrite.git`
2. **Navigate to the project directory:** `cd todoapp`
3. **Install dependencies:** `npm install`
4. **Start the development server:** `npm run dev`

### Backend (Appwrite)

1. **Create a new project** in your Appwrite console.
2. **Create a new database** named "dev".
3. **Create a new collection** in your database named "notes".
4. **Add the following schemas to the "notes" collection:**
   - **body:** (type: string, limit: 200) - Stores the text content of the todo item.
   - **completed:** (type: boolean) - Indicates whether the todo item is marked as complete.

## Usage

Once you have the frontend running and the Appwrite backend configured, you can start using the todo app. Simply add new todo items, mark them as complete, and delete them as needed.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

This project is licensed under the MIT License.
