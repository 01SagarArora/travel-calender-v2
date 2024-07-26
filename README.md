# What's Inside

Core:

- **React** 18+
- **webpack** 5+ (with optional **SWC** support and SSR or static build)
- **TypeScript** (with strict rules, including  webpack configuration)

SSR:

- **Express** (with render to stream option including helmet data and initial state pushing)

State:

- **Redux** 4+

Router:

- **React Router**

Code Splitting:

- **Loadable Components** (SSR compatible)

API:

- **RTK Query**

Styles:

- **(S)CSS modules** (with TypeScript support)

Linters:

- **ESLint**
- **Stylelint** (including rules order)


Other:

- API request caching (powered by RTK Query)
- Data prefetching on server side
- Hot reload (including state, style and server code hot reloading)
- VSCode support with error highlight and on save fixes
- Script for fast component creation
- Optional Service worker and offline status detector
- Webpack Bundle Analyzer

## How to Use

### Quick Start (SSR with hot reload)

1. Clone this repo:

   `http://gitlab.yatra.com/CorpUITeam/corp-ui-new-theme/travel-calendar-v2.git`

2. Install all packages:

   `npm i`

3. Run project in a development mode:

   `npm run start`

4. Application Health URL:

   `https://dev.yatra.com/travel-calendar-v2/home`

### Build and run a server (SSR)

1. Build the project (production bundle will be in the `"travel-calendar-v2"` folder):

    `npm run build`

    or with Webpack Bundle Analyzer report server:

    `npm run build:report`

2. Run a server:

    `npm run run`

3. You can test the server locally:

    `http://localhost:3000/`

### Static development mode with hot reload

- Just run the next command and browser will open automatically:

  `npm run start:static`

### Static production

- Run the next command and get a production bundle in the `"dist"` folder:

  `npm run build:static`

  or with Webpack Bundle Analyzer report server:

  `npm run build:static:report`

### Updating packages

All packages in this project are pinned to latest versions at the time of publishing to exclude version-based conflicts and errors and to guarantee proper work of the code in this repository.

If you want to update packages, do next:

```
npm install -g npm-check-updates
ncu -u
npm i
```

## Basic App Configuration

All configuration is available in files with constants:

- `webpack\constants.ts` - contains working directories, SWC option and other related to bundling staff
- `src\constants` - a directory with app files with configuration constants
- `src\server\constants.ts` - contains a server port and render to stream options