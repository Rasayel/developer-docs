# Rasayel developer documentation

This documentation is built using [Magidoc](https://github.com/magidoc-org/magidoc) an open source GraphQL documentation generator.

## Running docs locally

Make sure you generate a Rasayel API key which is used to run an Introspection query against the Rasayel GraphQL schema, to build the docs.

Place the key in your `.env` file:

```sh
cp .env.example .env
```

Now you can run the docs locally

```sh
yarn serve:dev
```

## Modifying Rasayel docs content

All the documentation lives under `/pages`. This is written in Markdown and will be automatically compiled into the app.

We use numbered file name notation to identify page ordering.

```
01.Introduction
02.Welcome
```

Etc.

## Deploying

The docs are deployed using Netlify. Pushing to master will automatically deploy any new changes.
