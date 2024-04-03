
# Project Shop

In this i made ton of my all life projects here.


#### Project # 1
- Infinity Isles


## Infinity Isles

This is an e-commerace online store.

### Packages
 
 #### For Frontend
    
```bash
  npm install npm react-router-dom react-icons react-icons-kit

```

 #### For Backend

 ```bash
  npm install my-project
```
### FrameWork

I use vite you choose other framework for react. 

 ```bash
  npm create vite@latest
```

After enter above command it asked your project name and framework name and last language.
Choose what you want!!

- Berfore start your server, first enter inside your project then start

```bash
 cd <projectname>
 npm install
 npm run dev
```

### For Styling

 - Tailwind (library)
 - Material Ui  (Framework)

Terminal
```bash
 npm install -D tailwindcss postcss autoprefixer
 npx tailwindcss init -p
```

tailwind.config.js
```bash
 /** @type {import('tailwindcss').Config} */
 export default {
   content: [
     "./index.html",
     "./src/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
     extend: {},
   },
   plugins: [],
 }
```

index.css
```bash
 @tailwind base;
 @tailwind components;
 @tailwind utilities;
```

Terminal
```bash
 npm install @mui/material @emotion/react @emotion/styled @mui/icons-material
```
