# CareerVista

This web app allows you to monitor your job applications, interviews, and responses. It includes a chart for tracking monthly applications and a page displaying all jobs applied to. Simplify your job search with CareerVista!

This project is a full stack application that connects a front-end application built with React 18 to a back-end application built with Express, MongoDB, and Node.js.

## Live Demo

_Since it is hosted on a free tier, it might take a while to spin up. Thank you for your patience._

You can explore the app without registering using the'Explore the app' button in login page.

**[Click here for Live Demo](https://careervista.onrender.com/)**

## Screenshots

![stats](https://github.com/fdundar95/CareerVista/assets/79167732/1614039c-14ab-4812-9058-c5d535b32027)
![alljobs](https://github.com/fdundar95/CareerVista/assets/79167732/e0fa1009-06a5-48b6-aa7a-3254e54db7f9)

## Features

### Front-End

- **React**: The front-end application is built using React 18.
- **React Router**: Routing in the application is handled using React Router, utilizing loaders and actions.
- **Context API**: State management in the application is handled using the Context API.
- **React Query and Axios**: Data fetching in the application is handled using React Query and Axios.
- **Recharts**: Data visualization in the application is handled using Recharts.
- **Tailwind CSS**: The application is styled using Tailwind CSS.

### Back-End

- **Express, MongoDB, Node.js**: The back-end application is built using Express, MongoDB(Mongoose), and Node.js.
- **ES6 Modules**: The back-end application uses ES6 modules.

### Authentication and Authorization

- **JWT**: Authentication and authorization in the application is handled using JWT cookies.

### Additional Features

- **Search/Filter/Pagination**: The application includes search, filter, and pagination functionality on both the server and front-end.
- **Cloudinary**: Users can upload profile photos to Cloudinary.

## Environment Variables

The application uses the following environment variables:

```
PORT=5100
MONGO_URI=<Your MongoDB URI>
JWT_SECRET=<Your JWT Secret Key>
JWT_LIFETIME=<Your JWT Lifetime>
CLOUD_NAME=<Your Cloudinary Cloud Name>
CLOUD_API_KEY=<Your Cloudinary API Key>
CLOUD_API_SECRET=<Your Cloudinary API Secret>
```

Please replace the placeholders with your actual values.

## Getting Started

Follow these steps to set up the project:

### Development

1. Clone the repository.
2. Run `npm run setup-project` to install the necessary dependencies for both the server and the client.
3. Run `npm run dev` to start both your server and client(using Concurrently).

### Production

1. Clone the repository.
2. Run `npm run setup-production-app` to install the necessary dependencies and build your application for production.
3. Run `npm run server` to start your server.

Remember to setup the `.env` file with your actual values.

## License

This project is licensed under the terms of the MIT license.
