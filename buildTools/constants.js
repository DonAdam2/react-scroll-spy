const protocol = process.env.HTTPS?.trim() === 'true' ? 'https' : 'http';

module.exports = {
  port: 3000,
  protocol,
  devServer: `${protocol}://localhost`,
  rootDirectory: 'src',
  buildToolsDirectory: 'buildTools',
  publicDirectory: 'public',
  outputDirectory: 'dist',
  environmentsDirectory: 'environments',
  jsSubDirectory: 'js/',
  cssSubDirectory: 'css/',
  isCssModules: false,
  metaInfo: {
    //max 60 (recommended)
    title: 'React scroll spy',
    //max 150 (recommended)
    description: 'Scroll spy implementation using React and react-router-dom v6',
    keywords: 'add you keywords',
  },
};
