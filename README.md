# Note-Keeper sample app using ReactJs and PWA

The repository of the this Sample ([Github Repository Link](https://github.com/ManinderKaurWorkplace/note-keeper.git))

## Running project locally

In order to run Notes-Keeper App locally:

```bash
$ npm install
```

```bash
# development
$ npm start
```

# Steps to Create Progressive Web App (PWA) with ReactJs

1.  ```
    npx create-react-app your—app—name—herep --template cra-template-pwa
    ```
2.  Update

    ```
    serviceWorker.unregister();
    ```

    to

    ```
    serviceWorker.register();
    ```

    in index.js.

3.  Update manifest.json as you want your app to look on mobile as follows :

```
  {
    "short_name": "cra-pwa",
    "name": "cra-pwa",
    "icons": [
      {
        "src": "/android-chrome-192x192.png",
        "sizes": "192x192",
        "type": "image/png"
      },
      {
        "src": "/android-chrome-512x512.png",
        "sizes": "512x512",
        "type": "image/png"
      }
    ],
    "start_url": "/",
    "theme_color": "#F4BD42",
    "background_color": "#2B2929",
    "display": "standalone",
    "scope": "/"
  }
```

4.  Then add manifest to index.html using following : 
```
<link rel="manifest" href="/manifest.json">
```
5.  You can check whether the configurations are fine on the Manifest panel under the Application menu in Chrome DevTools
6.  To test app run following command :
    $ npm run build
    $ npx server build
7.  To check performance, accessibility, and PWA compliance for your application ——>
    Step 1. Open Chrome DevTools by choosing the ‘Inspect’ option from the right-click menu on the page you need to inspect. Or you can use keyboard shortcuts: Command + Option + C (for macOS) or Control + Shift + C (for Windows, Linux, Chrome OS).
    Step 2. Go to the Lighthouse tab and click on the ‘Generate report’ button. When you generate a Lighthouse report, make sure you have checked the ‘Progressive Web App’ box.
    Once auditing has finished, you get your score and the list of criteria that affect your app's performance in different situations. These hints will give you more information about how to create a PWA with React.
