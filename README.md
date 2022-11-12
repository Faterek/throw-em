# Throw 'em
Simple discord bot for simulating dice throws of any kind, you can learn more at [my site](https://fater.cf/project/dice-bot/)
# How to run
To run this bot you need NodeJS, bot is tested on NodeJS version 18.12.1.
First you need to clone this repository and install needed node modules

```sh
> git clone https://github.com/Faterek/throw-em/ && cd throw-em
> npm i
```

Then go to `.env` file and paste in your `token` and `application id`, after that all you need is to run either of this commands

```sh
> node .
```

or

```sh
> npm run start
```

# How it works
Syntax of commands is simple, `x`#`y`d`z` where `x` is number of times repeat a throws, `y` is number of sides in dice.
So throm like
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