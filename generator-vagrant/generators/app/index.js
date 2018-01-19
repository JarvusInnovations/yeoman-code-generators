var Generator = require('yeoman-generator');

module.exports = class extends Generator {
  
  constructor(args, opts)
  {
    super(args, opts);
  }

  //Writing Logic here
  writing() {
    throw Error("we are in writing");
    //Copy the configuration files
  
    //Copy application files
  
    //Install Dependencies
  }
};
