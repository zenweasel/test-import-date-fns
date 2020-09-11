module.exports = {
    testEnvironment: "node",
    transform: {
        "\\.js$": [
            "babel-jest",
            {
                rootMode: "upward"
            }
        ]
    }
};
