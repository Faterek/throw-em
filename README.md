# Throw 'em
Simple discord bot for simulating dice throws of any kind, you can learn more at [my site](https://fater.cf/project/dice-bot/)
# How to run
To run this bot you need NodeJS, bot is tested on NodeJS version 16.18.0 and 18.12.1.
First you need to clone this repository and install needed node modules

```sh
> git clone https://github.com/Faterek/throw-em/ && cd throw-em
> npm i
```

Then go to `.env` file and paste in your `token` and `application id`, after that register slash commands with

```sh
> npm run register
```

or

```sh
> node deploy-commands.js
```

And finaly run bot with

```sh
> node .
```

or

```sh
> npm run start
```

# How it works
Syntax of commands is simple, `x`#`y`d`z` where `x` is number of times to repeat throws, `y` is number of dices and `z` is number of sides in dice.
So throw 'em like that
```
2#3d6
```
could give you results of
```
 5  ⟵ [**1**, 2, 2]
 11  ⟵ [5, 4, 6]
```

# License
This bot is licensed under CC BY-SA 4.0