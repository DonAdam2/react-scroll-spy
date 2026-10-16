const hasJsxRuntime = (() => {
  if (process.env.DISABLE_NEW_JSX_TRANSFORM === 'true') {
    return false;
  }

  try {
    require.resolve('react/jsx-runtime');
    return true;
  } catch {
    return false;
  }
})();

module.exports = (api) => {
  api.cache.using(() => process.env.NODE_ENV);

  return {
    presets: [
      '@babel/preset-env',
      ['@babel/preset-react', { runtime: hasJsxRuntime ? 'automatic' : 'classic' }],
    ],
    plugins: [
      '@babel/plugin-transform-runtime',
      // Applies the react-refresh Babel plugin on non-production modes only
      ...(api.env() === 'development' ? ['react-refresh/babel'] : []),
    ],
  };
};
