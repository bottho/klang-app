module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    moduleDirectories: ['node_modules', 'src/'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': [
            'babel-jest',
            {
                presets: [
                    [
                        '@babel/preset-env',
                        {
                            targets: {
                                node: 'current'
                            },
                        },
                    ],
                    [
                        '@babel/preset-react',
                        {
                            runtime: 'automatic',
                        },
                    ],
                    '@babel/preset-typescript',
                ],
            },
        ],
    },
    transformIgnorePatterns: [
        '/node_modules/(?!string-width|emoji-regex)/', // Add any ES modules here
    ],
    testPathIgnorePatterns: [
        'e2e/',
    ]
};