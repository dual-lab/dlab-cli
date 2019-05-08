const { packages } = require("../lib/packages");

export default async function (args: any, root: string, logger: any) {
    const pkgNames = Object.keys(packages);

    logger.info("\t\tMonolythic Repo \n");
    logger.info("      _   _           _ _ _ _           _          \n");
    logger.info("     | | | |                 |         | |        \n");
    logger.info("     | | | |                 |         | |        \n");
    logger.info("     | | | |                 |         | |        \n");
    logger.info("     | | | |          _ _ _ _|         | |_ _ _ _ \n");
    logger.info(" _ _ | | | |         |        \\        |         |\n");
    logger.info("|      | | | _ _ _   |         \\       |         |\n");
    logger.info("|_ _ _ | | _ _ _ _ | | _ _ _ _ _\\_ _   | _ _ _ _ |\n");

    logger.info("                                                   \n");
    logger.info(`\t\tPackages #${pkgNames.length}\n`);
    pkgNames.forEach((name) => {
        logger.info(`\t\t\t -${name}\n`);
        logger.info(`\t\t\t   *${packages[name]["description"]} \n`);
    });
    
    return 0;
}