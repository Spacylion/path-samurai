/** @type {import('jest').Config} */
module.exports = {
    verbose: true,
    setupFilesAfterEnv: ["@testing-library/react"],
    moduleNameMapper: {
        "\\.(css|less)$": "identity-obj-proxy",
    },
    testEnvironment: 'jsdom',
};