
# **DALL-E 2.0 Clone**

This project is an implementation of OpenAI's DALL-E 2.0 API using React on the frontend and Node.js on the backend. The app allows users to generate unique images by providing a textual prompt.


## **Features**

- Create unique images from textual prompts
- Store your generated images in your own Cloudinary account by "sharing with the community"
- View images generated
- Search images by name or any word of the description
- Download images for personal use


## **Tech Stack**

### **Frontend**

- **React** - A popular JavaScript library for building user interfaces.
- **React Router DOM** - A tool that allowed me to add routing to the application, enabling users to navigate between different pages without having to reload the entire app.
- **Tailwind CSS** - A utility-first CSS framework that helped me to rapidly build a responsive and visually appealing interface.
- **PostCSS** - A tool that helped me to transform my CSS code using JavaScript plugins.
- **TypeScript** - A typed superset of JavaScript that helped me to catch errors early and write more reliable and maintainable code.
- **File-Server** - A simple static file server that allowed me to serve the static assets of the client-side application.

### **Backend**

- **Express** - A popular web framework for building server-side applications in Node.js. I chose Express because it allowed me to quickly set up a REST API and handle HTTP requests easily.
- **Mongoose** - A MongoDB object modeling tool that provided a straight-forward, schema-based solution to model my application data.
- **MongoDB** - A popular NoSQL database that provided a flexible and scalable solution to store and manage the application data.
- **Cloudinary** - A cloud-based image and video management platform that provided a simple and reliable way to store, manage, and transform images. It allowed me to easily integrate image uploading and transformation features into my application.
- **OpenAI** - An artificial intelligence platform that provided powerful text and image generation capabilities. It allowed me to generate realistic and diverse images from textual prompts.

## **Getting Started**

### **Prerequisites**

To run this project, you will need to have the following tools installed:

- Node.js (v14 or later)
- NPM package manager

### **Running the App**

1. Clone this repository.
2. In the terminal, navigate to the root directory of the project and run the following commands:
    
    ```bash
    cd client
    npm install
    npm run dev
    
    ```
    
3. The server will start running on **`http://localhost:5173`**.
4. In a new terminal window, navigate to the root directory of the project and run the following commands:
    
    ```bash
    cd server
    npm install
    npm start
    
    ```
    
5. The client will start running on **`http://localhost:8080`**.
6. Create a **`.env`** file in the root directory of the project based on the provided **`.env.sample`** file, and replace the values with your own API keys and URLs.
    - OpenAI API key
    - MongoDB connection URL
    - Cloudinary configuration (cloud name, API key, and API secret)
    - Session secret for securing session management
7. You will need to create accounts for the following services:
    - **MongoDB**: Visit **[https://www.mongodb.com/](https://www.mongodb.com/)** to create an account and set up a database.
    - **Cloudinary**: Visit **[https://cloudinary.com/](https://cloudinary.com/)** to create an account and get the Product Environment Credentials.
    - **OpenAI**: Visit **[https://beta.openai.com/signup/](https://beta.openai.com/signup/)** to create an account and get the API key.


## **Lessons Learned**

Developing this project provided me with a great opportunity to explore and integrate a variety of technologies, including:

- How to create a seamless user experience, including cloud-based services such as Cloudinary and OpenAI.
- The importance of organizing and structuring a project's codebase to make it easy to maintain and scale in the future.
- How to use environment variables to securely manage sensitive information such as API keys and passwords.
- The benefits of using a modern build tool like Vite to streamline the development process and improve performance.
- How to leverage React Router to create a dynamic, single-page application with multiple routes.
- How to use MongoDB and Mongoose to create and interact with a database of user-generated content.
- How to use TailwindCSS and PostCSS to create custom styles for the app without sacrificing performance.
- The importance of thorough testing to ensure the app works as expected and catch any bugs early in the development process


## **Screenshots**

### **Home Page**
![image](https://user-images.githubusercontent.com/92064022/227377324-6052b4ad-5faa-4aa7-8ed9-79102c4c2a01.png)

### **Create Post Page**
![image](https://user-images.githubusercontent.com/92064022/227377452-34fc856f-18a1-47fc-b108-1ad3dae46e8d.png)


## **Acknowledgements**

Special thanks to [JavaScript Mastery](https://www.youtube.com/@javascriptmastery) for providing a helpful tutorial that served as the basis for this project. While the tutorial was originally done using JavaScript, I made modifications to the frontend to use TypeScript instead.


## **License**

[MIT](https://github.com/diegovianaf/dalle_clone/blob/main/LICENSE)


## **Author**

[Diego Viana](https://www.linkedin.com/in/diegovianaf/)


## **Feedback**

If you have any feedback or suggestions, please feel free to create an issue or a pull request.

