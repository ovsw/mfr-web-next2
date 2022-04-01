module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.mariannasfundraisers.com",
  generateRobotsTxt: true, // (optional)
  // ...other options
  exclude: [
    "/accessibility-statement",
    "/accessibility-policy",
    "/privacy-policy",
    "/terms-and-conditions",
  ],
}
