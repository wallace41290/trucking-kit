# TruckingKit

## Setup

1. Clone the repository
2. Navigate to the directory in your terminal.
3. Install [nvm](https://github.com/nvm-sh/nvm).
4. Invoke: `nvm use` to install and set the correct node version defined in [.nvmrc](./.nvmrc).
5. Install dependencies by invoking `npm i`.

## Setup AWS and Amplify

1. Install the amplify cli `npm install -g @aws-amplify/cli`.
2. Install the AWS cli, [see instructions](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html).
3. Sign into your [SSO account](https://d-9067f067ec.awsapps.com/start)
4. Click "Command line or programmatic access".
5. Follow the instructions for "AWS IAM Identity Center credentials (Recommended)"
   - For the session name, I put "truckingkit"
   - Just hit enter for `SSO registration scopes [sso:account:access]:`
   - For `CLI default client Region [None]:` put `us-east-1`
   - For `CLI default output format [None]:` put `json`
   - For `CLI profile name [Developers-789204160597]:` I changed to `will-dev`
6. Edit the aws config file via `code ~/.aws/config`, add to the end of your profile block this line as described in the [docs](https://docs.amplify.aws/angular/start/getting-started/installation/#manually-configure-the-amplify-cli):
   ```
   [profile will-dev]
   ...
   credential_process = aws configure export-credentials --profile will-dev
   ```
   save the config
7. You should now be able to call any of the commands from the amplify cli. Start by:
   - `cd apps/trucking-kit` (you have to run amplify commands from here, not the root)
   - `amplify pull`
   - This should pull down some files that don't get checked into git, now you can run the app.

## Start the app

To start the development server run `nx serve trucking-kit`. Open your browser and navigate to http://localhost:4200/. Happy coding!

## An Assortment of Helpful Commands

- `npm run pr-check` - run this bad boy before a PR - it will check for the following errors: formatting, linting, testing, and building.
- `npm run format` - will fix formatting errors.
- `npx nx serve trucking-kit` - will serve the app on a local dev server

Amplify/AWS - [docs](https://docs.amplify.aws/angular/tools/cli/start/key-workflows/)

- For all of these, you'll need to `cd apps/trucking-kit` and run from the app directory.
- `amplify pull` - command operates similar to a git pull, fetching upstream backend environment definition changes from the cloud\* and update the local environment to match that definition. The command is particularly helpful in team scenarios when multiple team members are editing the same backend, pulling a backend into a new project, or when connecting to multiple frontend projects that share the same Amplify backend environment.
- `amplify push` - Once you have made your category updates, run the command amplify push to update the cloud resources.
- `amplify console` - launches the browser directing you to your cloud project in the AWS Amplify Console. The Amplify Console provides a central location for development teams to view and manage their backend environments, status of the backend deployment, deep-links to the backend resources by Amplify category, and instructions on how to pull, clone, update, or delete environments.
  - for this to work, you'll need to have already signed into the "Management Console" from the SSO url. Alternatively, you can sign in there and search for Amplify to find the apps there.
- `amplify env checkout ENVIRONMENT_NAME` - see [docs](https://docs.amplify.aws/angular/tools/cli/teams/), we will eventually set up a prod environment, right now we only have dev.

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
