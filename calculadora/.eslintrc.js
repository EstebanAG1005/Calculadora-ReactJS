module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  plugins: [
    'react',
  ],
  "ignorePatterns": ["*.css", "**/vendor/*.css"],
  rules: {

    "no-shadow": "off",
    "no-eval": "off",
    "react/jsx-filename-extension": [0],
    "import/extensions": "off",
    "no-return-assign":"off",
    "no-console": "off",
    
  },
};
