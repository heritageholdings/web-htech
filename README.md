# HTECH Website

## How to make changes for non developers

### Changing files

Use the [Github online edit](https://docs.github.com/en/repositories/working-with-files/managing-files/editing-files) feature to change files.

Note: when you commit your changes (step 7 of the guide above), make sure to create a new pull request instead of committing directly to the `main` branch.

### Deploy changes

1. Go to the [Build and deploy workflow](https://github.com/heritageholdings/web-htech/actions/workflows/gatsby-deploy.yaml) dashboard.
1. Click on the `Run workflow` dropdown and then on the `Run workflow` green button.
1. There's no step 3, the workflow will start, build the site and deploy it live.

## Development

### Prerequisites

- nodenv
- yarn

### Setup

```
$ yarn install
```

### Develop

```
$ yarn develop
```

### Deploy

```
$ yarn deploy
```
