module.exports = {
  arrowParens: 'avoid',
  bracketSameLine: true,
  bracketSpacing: true,
  singleQuote: true,
  trailingComma: 'all',
  semi: true,

  plugins: [require('@trivago/prettier-plugin-sort-imports')],
  importOrder: [
    '^react',
    '^(r|@r)eact-navigation(.*)',
    '^(r|@r)eact-native',
    '^(r|@r)eact(.*)',
    'antd/(.*)',
    '<THIRD_PARTY_MODULES>',
    '@/(.*)',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
