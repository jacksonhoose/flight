var express = require('express');

export default class Flight {
    /**
     * @param {Object} options A configuration object.
     * - {number} port The port the application should listen on.
     */
    constructor(options = {}){
        /**
         * @type {Object}
         */
        this._options = Object.assign({}, {
            /**
             * The environment the application is running in.
             * @type {String}
             */
            env: 'development',
            /**
             * The default port the application should listen on.
             * @type {number}
             */
            port: 8000,
            
        }, options);

        /**
         * @type {Express}
         */
        this._express = express();
    }

    routes(){

    }

    start(){
        this._express.listen(this._options.port, () =>
                console.log('Application listening on port ' + this._options.port));
    }
}

