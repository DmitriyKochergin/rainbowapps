module.exports = options => {
  const plugins = [
    require('tailwindcss')('./tailwind.config.js'),
    require('autoprefixer'),
    require('cssnano')({
      preset: [
        'default',
        {
          discardComments: {
            removeAll: true,
          },
        },
      ],
    }),
  ];

  if (options.env === 'production') {
    plugins.push(
      require('@fullhuman/postcss-purgecss')({
        content: ['./public/**/*.html', './src/**/*.{html,js,jsx,ts,tsx}'],
        defaultExtractor: content => content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [],
      }),
    );
  }

  return { plugins };
};
