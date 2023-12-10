const express = require('express');
const app = express();
const port = 3000;
import { readFileSync, readdirSync, writeFileSync } from "fs"

export class FsErr {
    createaServer() {

        app.get('/', (req, res) => {
            res.send('Hello World!');
            writeFileSync('./err.json', JSON.stringify({}))
        });
        app.listen(port, () => {
            console.log(`Example app listening at http://localhost:${port}`);
        });

    }
}
module.exports = FsErr
