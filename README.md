# Register

Register is a full-stack web application that provides user authentication functionality. It consists of a React frontend and a Node.js backend with Express, using MySQL for data storage.

## Project Structure

```
my-app/
├── Backend/
│   ├── dbase.js
│   ├── index.js
│   └── server.js
└── Frontend/
    └── src/
        ├── components/
        │   ├── ProtectedRoute.js
        │   ├── dashboard.js
        │   ├── login.js
        │   ├── logoutButton.js
        │   └── signup.js
        ├── App.css
        ├── App.js
        └── index.js
```

## Features

- User registration (signup)
- User authentication (login)
- Protected routes
- Dashboard for authenticated users
- Logout functionality

## Technologies Used

- Frontend: React, React Router
- Backend: Node.js, Express
- Database: MySQL
- Authentication: JSON Web Tokens (JWT)
- API requests: Axios

## Setup and Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/register.git
   cd register
   ```

2. Install dependencies for both frontend and backend:
   ```
   cd Frontend
   npm install
   cd ../Backend
   npm install
   ```

3. Set up your MySQL database and update the `.env` file in the Backend folder with your database credentials:
   ```
   DB_HOST=your_host
   DB_PORT=your_port
   DB_USER=your_username
   DB_PASSWORD=your_password
   DB_NAME=your_database_name
   JWT_SECRET=your_jwt_secret
   ```

4. Start the backend server:
   ```
   cd Backend
   node server.js
   ```

5. In a new terminal, start the frontend development server:
   ```
   cd Frontend
   npm start
   ```

6. Open your browser and navigate to `http://localhost:3000` to use the application.

## Usage

- Navigate to the signup page to create a new account.
- Use the login page to authenticate with your credentials.
- Once logged in, you'll be redirected to the dashboard.
- Use the logout button to end your session.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

MIT License

Copyright (c) 2004 Ashley Rice

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.




