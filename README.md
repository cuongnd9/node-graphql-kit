# node-graphql-boilerplate

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg)](#contributors)
[![Hits-of-Code](https://hitsofcode.com/github/cuongw/node-graphql-boilerplate)](https://hitsofcode.com/view/github/cuongw/node-graphql-boilerplate)
[![GitHub](https://img.shields.io/github/license/cuongw/node-graphql-boilerplate.svg)](https://github.com/cuongw/node-graphql-boilerplate/blob/master/LICENSE)

> 🧘🚀 A Node.js boilerplate with GraphQL, Prisma, PostgreSQL, MongoDB and awesome tools.

## Prepare

- [Node](https://nodejs.org/en/)
- [Docker](https://phoenixnap.com/kb/how-to-install-docker-on-ubuntu-18-04)
- [Docker Compose](https://docs.docker.com/compose/install/)

## How to use?

### Step 1: Clone this project and remove `.git` folder

```sh
$ git clone https://github.com/cuongw/node-graphql-boilerplate.git
$ cd node-graphql-boilerplate && rm -rf .git
```

### Step 2: Launch Prisma and the connected database

```sh
$ sudo docker-compose up -d
```

### Step 3: Deploy the Prisma datamodel and generate Prisma client

```sh
$ yarn deploy
```

### Step 4: Install dependencies and run the project

```sh
$ yarn
$ yarn start
```

🙌 Awesome

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table><tr><td align="center"><a href="http://cuongw.me"><img src="https://avatars0.githubusercontent.com/u/34389409?v=4" width="100px;" alt="Cuong Duy Nguyen"/><br /><sub><b>Cuong Duy Nguyen</b></sub></a><br /><a href="https://github.com/cuongw/thinid/commits?author=cuongw" title="Code">💻</a> <a href="https://github.com/cuongw/thinid/commits?author=cuongw" title="Documentation">📖</a> <a href="https://github.com/cuongw/thinid/commits?author=cuongw" title="Tests">⚠️</a> <a href="#review-cuongw" title="Reviewed Pull Requests">👀</a></td></tr></table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## License

MIT © [cuongw](https://github.com/cuongw)
