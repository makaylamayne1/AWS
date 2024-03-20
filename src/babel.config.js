// babel.config.js
module.exports = {
    presets: [
      '@babel/preset-env',
      '@babel/preset-react',
    ],
    plugins: [
      '@babel/plugin-syntax-class-properties',
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-syntax-private-methods',
      '@babel/plugin-proposal-private-methods',
      '@babel/plugin-proposal-private-property-in-object',
    ],
  };