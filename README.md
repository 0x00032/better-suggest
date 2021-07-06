# better-suggest
## Installation

Clone this repo or download the zip file to get started!
```
git clone https://github.com/0x00032/better-suggest.git
```
After cloning, run an
```
npm install
```
to snag all of the dependencies. Of course, you need [node](https://nodejs.org/en/) installed. I also strongly recommend [nodemon](https://www.npmjs.com/package/nodemon) as it makes testing *much* easier.

## Setting Up

You have to edit the `config.json` file its located in the storage directory. Your file should look something like this:
```
module.exports = {

    colours: {
        defualt: '#7dfce9',
        error: '#c20000'
    },

    discord: {
        token: 'yourBotTokenHere',
        prefix: '?',
        activity: 'with your suggestions',
    },
};
```

After your `config.json` file is built, you have enable `Privileged Intents` on your Discord [developer portal](https://discordapp.com/developers/applications/). You can find these intents under the "Bot" section, and there are two ticks you have to switch on. For more information on Gateway Intents, check out [this](https://discordjs.guide/popular-topics/intents.html#the-intents-bit-field-wrapper) link.

## Donating

- Ethereum (ETH):`0x0C28Ef808638903B672E8B0Cb8dad5171483a9E2`
- Bitcoin (BTC): `bc1q7cgkpljrw0u2uj004dw2tugfswcp287n9uxtvm`
- Bitcoin Cash (BTH): `qqh8e6sq336cg35wv8a2kzlc2dwwmch9zuzvpnydyy`

## License

This project is licensed under the MIT LICENSE - see the [LICENSE](LICENSE) file for details
