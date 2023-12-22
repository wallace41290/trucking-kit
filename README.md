# TruckingKit

## Setup

1. Clone the repository
2. Navigate to the directory in your terminal.
3. Install [nvm](https://github.com/nvm-sh/nvm).
4. Invoke: `nvm use` to install and set the correct node version defined in [.nvmrc](./.nvmrc).
5. Install dependencies by invoking `npm i`.

## Local Sandbox
It is possible to run a local aws sandbox for the development.

### Pre-reqs
Set up AWS Account: TODO

1. Run `npx nx sandbox trucking-kit-backend`


## Start the app

To start the development server run `nx serve trucking-kit`. Open your browser and navigate to http://localhost:4200/. Happy coding!

## Generate code

If you happen to use Nx plugins, you can leverage code generators that might come with it.

Run `nx list` to get a list of available plugins and whether they have generators. Then run `nx list <plugin-name>` to see what generators are available.

Learn more about [Nx generators on the docs](https://nx.dev/plugin-features/use-code-generators).

## Running tasks

To execute tasks with Nx use the following syntax:

```
nx <target> <project> <...options>
```

You can also run multiple targets:

```
nx run-many -t <target1> <target2>
```

..or add `-p` to filter specific projects

```
nx run-many -t <target1> <target2> -p <proj1> <proj2>
```

Targets can be defined in the `package.json` or `projects.json`. Learn more [in the docs](https://nx.dev/core-features/run-tasks).
