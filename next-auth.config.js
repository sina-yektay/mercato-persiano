const { getParameterFromSSM } = require("./helper");

const { getParameterFromSSM } = require("./helper");

module.exports = {
  secret: async () => {
    const secretValue = await getParameterFromSSM("TORINASIA_NEXTAUTH_SECRET");
    return secretValue;
  },
  site: "https://www.torinasia.com",
  baseUrl: "https://www.torinasia.com",
};
