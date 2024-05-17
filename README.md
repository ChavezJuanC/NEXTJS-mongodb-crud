DONT FORGET TO ADD YOUR OWN MONGODB URI INSIDE src\utils\mongoose.ts

# NEXTJS MongoDB CRUD

This repository contains a CRUD (Create, Read, Update, Delete) application built with Next.js and MongoDB.

## Table of Contents
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/ChavezJuanC/NEXTJS-mongodb-crud.git
    ```
2. Navigate to the project directory:
    ```bash
    cd NEXTJS-mongodb-crud
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

## Configuration

1. Create a `.env.local` file in the root directory.
2. Add your MongoDB URI to the `.env.local` file:
    ```env
    MONGODB_URI=your_mongodb_uri_here
    ```
3. Ensure you add your MongoDB URI inside `src/utils/mongoose.ts` if not using environment variables.

## Usage

1. Start the development server:
    ```bash
    npm run dev
    ```
2. Open your browser and navigate to `http://localhost:3000`.

## Features

- Create, Read, Update, and Delete operations for managing data.
- Built with Next.js for server-side rendering and client-side navigation.
- Uses MongoDB for the database.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a Pull Request.

## License

This project is licensed under the MIT License.
