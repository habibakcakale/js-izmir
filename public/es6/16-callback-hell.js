// NodeJS example
function print(content) { console.log(content) }

(function () {
    let fileSystem = require(`fs`)
    fileSystem.readdir(`./`, (err, files) => {
        if (!err) {
            files.forEach(file => {
                fileSystem.lstat(file, (err, stat) => {
                    if (!err) {
                        if (!stat.isDirectory()) {
                            fileSystem.readFile(file, (err, content) => {
                                if (!err) {
                                    print(`file ${file} - size ${content.length}`)
                                }
                            })
                        }
                    }
                })
            })
        }
    })
})();

(() => {
    let fileSystem = require(`fs`).promises;
    fileSystem.readdir(`./`).then(files => {
        return Promise.all(files.map(file => fileSystem.stat(file).then(stat => ({ file, stat }))));
    }).then(fileStats => {
        return Promise.all(fileStats.filter(fileStat => !fileStat.stat.isDirectory()).map(fileStat => fileSystem.readFile(fileStat.file).then(content => ({ file: fileStat.file, content }))))
    }).then(fileContents => fileContents.forEach(fileContent => print(`file ${fileContent.file} - size ${fileContent.content.length}`)));
})();


(async () => {
    let fileSystem = require(`fs`).promises;

    let files = await fileSystem.readdir(`./`);
    for (let file of files) {
        let stat = await fileSystem.lstat(file);
        if (!stat.isDirectory()) {
            let content = await fileSystem.readFile(file);
            print(`file ${file} - size ${content.length}`)
        }

    }
})()