module.exports = (api) => {
  api.cache(true);

  return {
    presets: ['@babel/preset-env', 'module:metro-react-native-babel-preset'],
    plugins: ['@babel/plugin-proposal-class-properties'],
  };
};
