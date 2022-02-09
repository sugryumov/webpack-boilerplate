// Test import of a JavaScript module
import { renderHeading, renderText } from '@/js';

// Test import of an asset
import webpackSVG from '@/images/webpack-logo.svg';

// Test import of styles
import '@/styles/index.css';

// Appending to the DOM
const heading = document.createElement('h1');
heading.textContent = renderHeading();

const text = document.createElement('p');
text.textContent = renderText();

const webpackLogo = document.createElement('img');
webpackLogo.src = webpackSVG;

// // Test a public folder asset
const imagePublic = document.createElement('img');
imagePublic.src = '/assets/css-logo.svg';

// Test a background image url in CSS
const imageCss = document.createElement('div');
imageCss.classList.add('image');

const app = document.querySelector('#root');

const createContainer = document.createElement('div');
createContainer.classList.add('container');
app.append(createContainer);

createContainer.append(heading, text, imageCss, imagePublic, webpackLogo);
