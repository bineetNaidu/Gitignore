#!/usr/bin/env node

const program = require("caporal");
const fs = require("fs");
const chalk = require("chalk");
const log = console.log;

// Servise LIST
const { node, react } = require("./serviceLists");

program
  .version("1.0.0")
  .argument("[type_of_service]", "Name of the service. etc- Node,  React")
  .action(async ({ typeOfService }) => {
    if (typeOfService == "react") {
      addGitIgnore("Reactjs", react);
    } else {
      addGitIgnore("Node", node);
    }
  });

async function addGitIgnore(service, data) {
  try {
    fs.writeFile(".gitignore", data, () => {
      log(chalk.green(`Successfully created .gitignore for ${service}`));
    });
  } catch (error) {
    log(chalk.red(error.message));
  }
}

program.parse(process.argv);
