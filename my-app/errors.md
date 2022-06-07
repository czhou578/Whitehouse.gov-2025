- how to install latest dependency

  - if not working, search around online, away from github or the official docs
  - npm install --save-dev webpack@5, for specific version

- support for experimental jsx isn't currently enabled

  - create .babelrc file and add the following: "presets": ["@babel/preset-env", "@babel/preset-react"]

- svg loader?

  - install svg-inline-loader

- video loader?

  - install file-loader, set options name and file output path, which could be just dist.

- importing semantic ui error

  - had to go into semantic.min.css and delete some semicolons in the big files

- React is not defined after trying to compile with webpack 5
  - add specific presets to the babelrc file. Look it up on stackoverflow.
