module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    // Пример отключения некоторых правил для React
    'react/prop-types': 'off', // Отключите проверку prop-types, если не используете PropTypes
    'react/react-in-jsx-scope': 'off', // Отключите, если используете новые версии React с `jsx-runtime`
    'react-hooks/rules-of-hooks': 'error', // Включите правила хуков
    'react-hooks/exhaustive-deps': 'warn' // Поставьте предупреждение для зависимостей useEffect
  }
};
