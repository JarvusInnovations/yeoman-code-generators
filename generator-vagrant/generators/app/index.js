const path = require('path');
var Generator = require('yeoman-generator');

module.exports = class extends Generator {
  
  constructor(args, opts)
  {
    super(args, opts);

    this._cwd = opts.env.cwd;
  }

  writing()
  {
    var parentDir = path.basename(this._cwd);

    this.fs.copyTpl(
        this.templatePath('_Vagrantfile'),
        this.destinationPath('Vagrantfile'), {
            hostname: parentDir
        }
    );
  }
};