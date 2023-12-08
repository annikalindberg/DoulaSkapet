# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
Absolutely, here are the steps to follow for the Image Optimization Process, which you can include in your README under the "Image Optimization Process" header:

## Image Optimization Process

This project includes an automated image optimization process using Sharp, a high-performance Node.js module. This process ensures that all images are uniformly resized and converted to a web-friendly format, enhancing the application's performance.

### Steps to Optimize Images:

1. **Prepare Your Images**:
   - Place any new images you want to optimize in the `src/assets/images` directory.

2. **Run the Optimization Script**:
   - Execute the script by running `npm run prebuild` in your terminal. This command processes all the images in the `src/assets/images` directory, resizing and converting them to the specified format and dimensions.
   - The processed images will be saved in the `public/optimized-images` directory.

3. **Update Image References in Your Application**:
   - In your React components, reference the optimized images from the `public/optimized-images` directory. For example:
     ```jsx
     <img src="/optimized-images/your-optimized-image.webp" alt="Descriptive Alt Text" />
     ```

4. **Rebuild Your Application**:
   - After updating image references, rebuild your application to reflect these changes. Use the command:
     ```bash
     npm run build
     ```

5. **Deploy Your Application**:
   - Once you have rebuilt your application with the optimized images, proceed with your usual deployment process.

### Notes:

- **Script Location**: The image optimization script, `optimize-images.js`, is located in the root directory of the project.
- **Automated Creation of Directories**: If the `public/optimized-images` directory does not exist, the script will automatically create it.
- **Supported Formats**: The script currently processes JPEG, PNG, and WebP formats. Other formats like SVG are skipped.
- **Supported Image Dimensions**: The script currently processes images with a width of 800px or greater. Images with a width less than 800px are skipped.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
