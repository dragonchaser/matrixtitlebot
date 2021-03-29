# matrixtitlebot

Matrix feeder is a matrix bot that listens for links posted in the channels it is present in and extracts the titles & displays them

## License

MIT see [LICENSE](https://github.com/dragonchaser/matrixtitlebot/blob/master/LICENSE) file in this repository.

## Install & Run

- dependencies

  ```bash
  $> git clone https://github.com/dragonchaser/matrixtitlebot
  $> cd matrixtitlebot
  $> npm install

- copy `config/config-example.json` to `config/config.json` & edit

- run

  ```bash
  $> node titlebot.js
  ```

- invite the bot to the channels of your choice

### Docker

#### run

- x86_64

  ```bash
  $> docker run \
     -v/path/to/you/config.json:/matrixTitleBot/config/config.json \
     dragonchaser/matrixtitlebot:latest
  ```

- arm32v7 (raspberry pi 2 & 3)

  ```bash
  $> docker run \
     -v/path/to/you/config.json:/matrixTitleBot/config/config.json \
     dragonchaser/matrixtitlebot:latest-arm32v7
  ```

#### build

  ```bash
  $> git clone https://github.com/dragonchaser/matrixtitlebot
  $> cd matrixtitlebot
  $> docker build -f docker/Dockerfile -t <imagename>:<tag> .
  ```
