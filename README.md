# OpenSherlock Website

Built using [Docusaurus 2](https://docusaurus.io/).

To update content, make changes under the [docs](docs) directory, commit, and push to the main branch.

### Setup

```
$ npm ci
```

### Local Development

```
$ npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build static bundle

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Test locally built static bundle

```
$ npm run serve
```

### Deployment

Though this is done automatically using GitHub Actions, use the following command to deploy an update to the `gh-pages` branch manually.

```
$ npm run deploy
```
