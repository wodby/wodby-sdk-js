# Wodby 2.0 SDK for JavaScript and TypeScript

[![Build](https://github.com/wodby/wodby-sdk-js/actions/workflows/build.yml/badge.svg?branch=2.0)](https://github.com/wodby/wodby-sdk-js/actions/workflows/build.yml?query=branch%3A2.0)

JavaScript and TypeScript client for the Wodby 2.0 public API. This branch maintains SDK 4.x.

## Version compatibility

| Wodby platform | SDK version | Branch | API reference |
| --- | --- | --- | --- |
| Wodby 1.0 | Not supported | — | [Wodby 1.0 API](https://wodby.com/docs/1.0/api/) |
| Wodby 2.0 | 4.x | [2.0](https://github.com/wodby/wodby-sdk-js/tree/2.0) | [Wodby 2.0 API](https://wodby.com/docs/2.0/api/) |

The JavaScript and TypeScript SDK starts at 4.x and supports Wodby 2.0 only. Wodby 1.0 has 3.x SDKs for PHP, Go, and Python.

## Package

- [npm: `@wodby/sdk`](https://www.npmjs.com/package/@wodby/sdk)
- npm package: `@wodby/sdk`

## Documentation

- [API reference](https://wodby.com/docs/2.0/api/)
- [OpenAPI schema](https://wodby.com/docs/2.0/api/openapi.json)

## Usage

Install the package:

```bash
npm install @wodby/sdk@^4
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
