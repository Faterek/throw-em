# Instead use https://github.com/EssenceBot/essence-bot with dice roller module

# Throw 'em
Simple discord bot for simulating dice throws of any kind.
# How to run
To run this bot you need NodeJS, bot is tested on NodeJS version 18.12.1.
First you need to clone this repository and install needed node modules

```sh
> git clone https://github.com/Faterek/throw-em/ && cd throw-em
> npm i
```

Then go to `.env` file and paste in your `token`, after that build bot with

```sh
> npm run build
```

And run bot with

```sh
> npm run start
```

# How it works
Syntax of commands is simple, `x`#`y`d`z` where `x` is number of times to repeat throws, `y` is number of dices and `z` is number of sides in dice.
So throw 'em like that
```
/r 2#3d6
```
could give you results of
```
 5  ⟵ [1, 2, 2]
 11  ⟵ [5, 4, 6]
```

# License
This project is licensed under CC BY-SA 4.0.
