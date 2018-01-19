const path = require('path');
var Generator = require('yeoman-generator');

module.exports = class extends Generator {
  
  constructor(args, opts)
  {
    super(args, opts);
  }

  //Writing Logic here
  writing() {
    
    var parentDir = path.basename(path.dirname("."));

    this.fs.copyTpl(
        this.templatePath('_Vagrantfile'),
        this.destinationPath('Vagrantfile'), {
            hostname: parentDir
        }
    );
  }
};