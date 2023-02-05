# javascript-demo-todolist

A simple toodo list demo with es6 frontend and bdd tests with cypress.

## Getting Started

### Prerequisites

| Software | Min. version | Info                     | 
|----------|--------------|--------------------------|
| NodeJS   | 18           | Usage for npm.           |
| Chromium | 80           | Usage for cypress tests. |

### Installing

Checkout this repository and go into the directory:

```
git clone https://github.com/thierryiseli/javascript-demo-todolist-cypress.git
cd javascript-demo-todolist-cypress
```

Install with npm: 

```
npm install
```

### Running

Run todo demo:

```
npm run dev
```

### Testing

Run the tests in a new terminal:

```
npm run test
```

#### Cucumber steps

Cucumber steps are placed in the path `./test/bdd/steps`.

#### Feature files

Feature files are placed in the path `./test/bdd/features`.

## Configuration

### Change browser

Change the parameter `--brwoser` in the `package.json` inside script command `dev`.