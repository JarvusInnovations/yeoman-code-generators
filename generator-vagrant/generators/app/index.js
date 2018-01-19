var Generator = require('yeoman-generator');

module.exports = class extends Generator {
  
  constructor(args, opts)
  {
    super(args, opts);
  }

  //Writing Logic here
  writing() {
    this.fs.copyTpl(
        this.templatePath('_Vagrantfile'),
        this.destinationPath('Vagrantfile'), {
            hostname: "ourTest"
        }
    );
  }
};
