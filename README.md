### Chuck Norris GitHub app

This is a simple test application built to learn more about GitHub applications. 
The application pulls a random quote from the [Chucknorris api](https://api.chucknorris.io/) when an issue is opened on any repository connected to the app


# chucknorris-app

> A GitHub App built with [Probot](https://github.com/probot/probot) that get local weather

## Setup

```sh
# Install dependencies
npm install

# Run the bot
npm start
```

## Docker

```sh
# 1. Build container
docker build -t chuck-norris-app .

# 2. Start container
docker run -e APP_ID=<app-id> -e PRIVATE_KEY=<pem-value> weather-app
```

## Contributing

If you have suggestions for how weather-app could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

[ISC](LICENSE) © 2022 Alexander <undefined>
