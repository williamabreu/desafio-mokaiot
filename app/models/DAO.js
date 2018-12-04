class DAO {
    constructor(collection) {
        this.fs = require('fs');
        this.collection = collection;
    }

    insert(element) {
        // console.log('Inserting');
        return new Promise((resolve, reject) => {
            this.fs.appendFile(this.collection, JSON.stringify(element), (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(true);
                }
            });
        });
    }

    list() {
        // console.log('Reading');
        return new Promise((resolve, reject) => {
            this.fs.readFile(this.collection, 'utf8', (err, resp) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(resp);
                }
            });
        });
    }
}

module.exports = DAO;