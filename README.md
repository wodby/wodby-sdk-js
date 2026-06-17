# Wodby SDK for JavaScript and TypeScript

Generated JavaScript and TypeScript SDK for the Wodby API.

## Usage

Install the package:

```bash
npm install @wodby/sdk
```

Use it from TypeScript:

```ts
import { Configuration, OrgsApi } from '@wodby/sdk';

const api = new OrgsApi(new Configuration({
  basePath: 'https://api.wodby.com/v1',
  apiKey: process.env.WODBY_API_KEY,
}));

const orgs = await api.orgsGet();
```

Use it from JavaScript:

```js
const { Configuration, OrgsApi } = require('@wodby/sdk');

const api = new OrgsApi(new Configuration({
  basePath: 'https://api.wodby.com/v1',
  apiKey: process.env.WODBY_API_KEY,
}));
```

Wodby API requests use an API key in the `X-API-KEY` header.

## Development

The SDK is generated from `swagger.json`.

```bash
make build
```

`make build` regenerates TypeScript sources under `src/src/`, installs npm dependencies from the lockfile, and compiles JavaScript plus declaration files into `dist/`.
