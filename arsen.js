//moduller
const { LoadCommands, AoiClient } = require("aoi.js")
const { ApplicationCommandManager } = require("aoi-command-manager")
const arsen = require("./src/handler/bot.js")
const { Util } = require("aoi.js")
const { setup } = require("@akarui/aoi.parser")
const { join } = require("path")
setup(Util)

//ayarlar
const client = new AoiClient({
    token: arsen.token,
    prefix: arsen.prefix,
    intents: arsen.intents, 
    events: arsen.events,
    database: {
        type: "aoi.db",
        db: require("@akarui/aoi.db"),
        tables: ["main"],
        path: "./database/",
        extraOptions: {dbType: "KeyValue"}
}})

//handler
client.variables(require("./src/handler/ayarlar.js"))

//komut handler
const loader = new LoadCommands(client)
loader.load(client.cmd,"./src/commands/")

const apps = new ApplicationCommandManager(client)
apps.load(join(__dirname, './src/interaction'), true).then(() => {
    setTimeout(function () {
        if (client.isReady()) {
            apps.sync()
            console.log('Developed by ArseN ❤️')
        }
    }, 5000)
})

//status
client.status({name: "Made by ArseN with 🤍", status: "idle", type: "CUSTOM", time: 12})