# Astuto

Astuto is a free, open source, self-hosted customer feedback tool.
It has been heavely inspired by [Canny.io](https://canny.io/) ("astuto", indeed, is the italian translation of the word "canny").
If you are interested, you can check out a [demo of Astuto](http://116.203.226.196/).

## Requirements

* Docker (installation instructions [here](https://docs.docker.com/v17.09/engine/installation/))
* Docker Compose (installation instructions [here](https://docs.docker.com/compose/install/))

## Installation

1. Ensure that you have the required software installed.
2. Download Astuto by cloning this repo or from [here](#).
3. In the root directory, create a file named `.env` and fill it with the required environment variables (see `.env-example` for an example and check [this page](https://github.com/riggraz/astuto/wiki/Required-environment-variables) for an explanation of the variables).
4. Run `script/docker-update-and-run.sh`.
5. You should now have a running instance of Astuto at `localhost:3000`. A default user account has been created with credentials email: `admin@example.com`, password: `password`.

## Post-installation notes

* When you want to launch Astuto you have to run `script/docker-run.sh`. If you installed new gems, packages or updated the database schema, you first need to run `script/docker-update.sh` and then `script/docker-run.sh`. You can run them together with `script/docker-update-and-run.sh`.
* You can always run `script/docker-update-and-run.sh` if unsure whether you should update or not. However, please note that `script/docker-update-and-run.sh` takes more time to run than `script/docker-run.sh`.
* If you changed some environment variables in `.env` you have to restart the instance for these changes to take effect.

## Contributing

Astuto is licensed under the [GNU GPLv3](https://github.com/riggraz/astuto/blob/master/LICENSE) license. You are welcome to contribute:
* You can suggest new features from the [Astuto demo](http://116.203.226.196/).
* You can find a [todo list](https://github.com/riggraz/astuto/wiki/Improving-Astuto) of what we would like to work on next.
* You should take a look at the [contribution guidelines](https://github.com/riggraz/astuto/wiki/Contribution-Guidelines).
* You should take a look at the [technologies](https://github.com/riggraz/astuto/wiki/Technologies) used to build Astuto. If you know at least one of them you are welcome to contribute to Astuto's codebase!
* You can run the test suite by typing `rspec`.
* If you just have some suggestions you can [create an issue](https://github.com/riggraz/astuto/issues) or [email us directly](mailto:riccardo.graziosi97@gmail.com).
