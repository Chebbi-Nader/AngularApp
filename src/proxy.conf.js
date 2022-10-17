const PROXY_CONFIG = [
  {
    context: [
      "/weatherforecast",
    ],
    target: "https://localhost:44362",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
