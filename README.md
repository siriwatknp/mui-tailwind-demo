## Material-UI feat. Tailwindcss

Building scalable and highly flexible UI with Material-UI + Tailwindcss

> This repo is just a brief demo of how to config tailwind to use with material-ui

versions

```
{
  "@material-ui/core": "4.11.0",
  "tailwindcss": "1.9.6"
}
```

## Why Tailwind
- 

## Get started

```
git clone git@github.com:siriwatknp/mui-tailwind-demo.git
cd mui-tailwind-demo
yarn install & yarn start
```

## About project setup

- This project was bootstraped from [create-react-app v3](https://create-react-app.dev/docs/getting-started/)
- `yarn start` will compile `tailwind.dev.css` to `tailwind.css` which is imported in `index.js`
- `NODE_ENV=production` in build script is important to make tailwind purge css (see `tailwind.config.js`)
- Recommend to use VSCode with Tailwind CSS IntelliSense extension (from Brad Cornes)
- font family uses `Rubik` (setup in `tailwind.config.js` and `App.js`)
