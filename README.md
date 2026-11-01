# War Simple
Simple score tracker for Warhammer 40k.

[Link to the Live App](https://an-individual.github.io/warsimple/)

11th edition Warhammer 40k is tough to track with physical score trackers. It has limits on both Primary and Secondary scoring per round and per game that are easy to lose track of. The obvious solution is a score tracking app, but when I went looking all the ones I found required a lot of fiddly book keeping. You had to create games, define things about your and your opponent's army, what secondary mission cards each of you drew, and track both your and your opponent's scores.

If you enjoy gathering the statistics these apps provide that's great. But I found it just bogged everything down. So I've thrown together this score tracker that strips everything down to the minimum needed to keep track of your own score without exceeding any of the game's scoring limitations. The intent is to operate with a minimum of friction and keep everything running smoothly at a more casual table.

The score tracker is designed to run as a Progressive Web App (PWA) which lets it provide an app-like experience on phones. Android phones have better support for this and may prompt you to install it when you visit the page. iOS does support PWAs, but that support is a little hidden. To install it as an app you need to open it in a web browser (ideally Safari), open the sharing menu, and select "Add to Home Screen". When adding it keeping "Open as Web App" turned on will provide you that app-like experience.

## Known Issues

* iOS ignores the portrait orientation lock and on most phones the app won't be usable in landscape because scrolling has been disabled. There isn't a clean fix so I've left this as is for now.
* On iOS if you add the app to your home screen via Firefox instead of Safari the app icon isn't used. A default icon is assigned instead.

## Development

The code base uses `nodejs` to handle some tasks and manage packages. It was developed against version `24.13.1` but any newer (and most older) versions should also work. It uses `webpack`, `mocha`, `eslint`, and `html-server` which can be installed using `npm install`. Once installed you can use `npm` to do the following.

* `npm run build` packages the Javascript in the `/src` folder using `webpack` and puts the resulting `.js` file in the `/dev` folder.
* `npm run debug` performs the same function as above, and then will use `html-server` to start a local http server serving the files in the `/dev` folder and open the site in the default web browser.
* `npm run test` runes the unit tests using `mocha`.
* `npm run deploy` performs the same steps as the `build` script and then copies the contents of the `/dev` folder into the `/docs` folder. The app is hosted using GitHub Pages so files in the `/docs` folder will be live once they are committed and pushed back to origin.
