'use strict';
const Generator = require('yeoman-generator');
module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.log('Initializing...');
  }
  start() {
    this.prompt([
        {
          type    : 'input',
          name    : 'name',
          message : 'Project Name: '
        },
        {
            type    : 'input',
            name    : 'description',
            message : 'Description: '
          },
          {
            type    : 'input',
            name    : 'gitRepoUrl',
            message : 'Git Repo URL: '
          }
      ]).then( (answers) => {
        this.fs.copyTpl(
            this.templatePath('package-library'),
            this.destinationPath(answers.name),
            {
                projectName: answers.name,
                description: answers.description,
                gitRepoUrl: answers.gitRepoUrl
            }
          );
      });
  }
};