//@ts-check
var __extend = (this && this.__extend) || function (a, b) {
    a.prototype = !b ? Object.create(null) : Object.create(b.prototype);
    a.prototype.constructor = a;
};
var Logger = (function () {
    function Logger(source) {
        this.source = source;
    }
    Logger.prototype.log = function (message, severity) {
        throw new Error("Not implemented");
    };
    return Logger;
})();

var ConsoleLogger = (function (_super) {
    __extend(ConsoleLogger, _super);
    function ConsoleLogger(source) {
        _super.apply(this, source);
    }
    ConsoleLogger.prototype.log = function (message, severity = "info") {
        // @ts-ignore
        let formattedMessage = `${new Date()} - ${this.source} - ${severity} - ${message}`;
        switch (severity.toLowerCase()) {
            case "error":
                console.error(formattedMessage);
                break;
            case "warning":
                console.warn(formattedMessage);
                break;
            case "info":
                console.info(formattedMessage);
                break;
            default:
                console.log(formattedMessage);
                break;
        }
    };
    return ConsoleLogger;
})(Logger);

/**
 * Returns logger
 * @param {string} type logger type
 */
function factory(type){
    switch (type) {
        case "console":
            return new ConsoleLogger();
            break;
        case "fıleLogger":
            return new Object();
        default:
            break;
    }
}

+

var consoleLogger = new ConsoleLogger("AuthController");
// caller doesnt need to know whats happening when call the log method.
consoleLogger.log(`Something happened, but we dont know why`);