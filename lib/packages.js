const { existsSync } = require("fs");
const { join, resolve, dirname } = require("path");

const { workspaces: { packages }, version } = require("../package.json");

const model = {
    name: "",
    description: "",
    main: "",
    root: "",
    bin: {},
    version
};

const projectRoot = resolve(__dirname, "..");
const registry = packages
    .map((p) => join(projectRoot, "packages", p, "package.json"))
    .filter((jsonFile) => existsSync(jsonFile))
    .map((existingJsonFile) => ({ pkgRoot: dirname(existingJsonFile), pJson: require(existingJsonFile) }))
    .reduce(
        (store, pkg) => {
            const pkgJson = pkg.pJson;
            const name = pkgJson["name"];

            store[name] = {
                ...model,
                name,
                description: pkgJson["description"],
                main: join(pkg.pkgRoot, "src", "index.ts"),
                root: pkg.pkgRoot,
                bin: Object.keys(pkgJson["bin"] || {}).reduce((bin, key) => {
                    bin[key] = join(pkg.pkgRoot, pkgJson["bin"][key])
                    return bin;
                }, {})
            };

            return store;
        }, {});

exports.packages = registry;