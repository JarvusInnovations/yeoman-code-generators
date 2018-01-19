var Generator = require('yeoman-generator');

module.exports = class extends Generator {
  
  constructor(args, opts)
  {
    super(args, opts);
  }

  //Writing Logic here
  writing() {

    //return {
        // config = function() {
        //     throw Error("getting trigged?");
            this.fs.copyTpl(
                this.templatePath('_Vagrantfile'),
                this.destinationPath('Vagrantfile'), {
                }
            );
        // }
    //};
    //Copy the configuration files
  
    //Copy application files
  
    //Install Dependencies
  }
};
