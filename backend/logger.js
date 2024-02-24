module.exports.trace = (...args) =>
{
    console.trace(`[${new Date()}] [trace]: ` + args);
}

module.exports.debug = (...args) =>
{
    console.debug(`[${new Date()}] [debug]: ` + args);
}

module.exports.info = (...args) =>
{
    console.info(`[${new Date()}] [info ]: ` + args);
}

module.exports.warn = (...args) =>
{
    console.warn(`[${new Date()}] [warn ]: ` + args);
}

module.exports.error = (...args) =>
{
    console.error(`[${new Date()}] [error]: ` + args);
}

module.exports.fatal = (...args) =>
{
    console.fatal(`[${new Date()}] [fatal]: ` + args);
}
