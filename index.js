//@ts-check
let express = require(`express`);
let fs = require(`fs`).promises;
let lstatSync = require(`fs`).lstatSync;
let readdirSync = require(`fs`).readdirSync;
let path = require(`path`);

(async function () {
    const basePath = path.resolve(`./`, __dirname);
    const publicPath = path.resolve(basePath, `./public`);

    let app = express();
    app.set('view engine', 'pug')
    app.use(express.static('public'))

    let publicContent = await fs.readdir(publicPath);
    let folders = publicContent.filter(folder => lstatSync(path.join(publicPath, folder)).isDirectory());
    let filesWithFolder = folders.map(folder => ({ [folder]: readdirSync(path.join(publicPath, folder)).map(file => path.basename(file, '.js')) })).reduce((prev, curr) => Object.assign(prev, curr), {});

    app.get(`/:folder/:file`, async (req, res) => {
        let content = await fs.readFile(`./public/${req.params.folder}/${req.params.file}.js`)
        res.render('index', { folder: req.params.folder, file: req.params.file, filesWithFolder: filesWithFolder, content: content.toString(`utf-8`) });
    })
    app.get(`/`, (req, res) => {
        res.render(`index`, { filesWithFolder: filesWithFolder })
    });

    app.listen(8000, () => console.log(`app started to listen on port ${8000}`))
})()


        