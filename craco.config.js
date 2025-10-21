// craco.config.js
module.exports = {
  webpack: {
    configure: (config) => {
      // выкидываем стандартное правило CRA для .svg
      config.module.rules = config.module.rules.map(rule => {
        if (Array.isArray(rule.oneOf)) {
          rule.oneOf = rule.oneOf.filter(r => !(r.test && r.test.toString().includes('svg')));
        }
        return rule;
      });

      // добавляем современный SVGR с svgo@3
      config.module.rules.push({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: [{
          loader: require.resolve('@svgr/webpack'),
          options: {
            svgo: true,
            svgoConfig: { plugins: ['preset-default'] }
          }
        }]
      });

      return config;
    }
  }
};