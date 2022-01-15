module.exports = {
  clearMocks: true,
  moduleFileExtensions: [
    "js",
    "vue"
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.js$": "babel-jest",
    ".*\\.(vue)$": "@vue/vue3-jest"
  }
};
