const { getParameterFromSSM } = require("./helper");

const secret = (async () => {
  const secretValue = await getParameterFromSSM("TORINASIA_NEXTAUTH_SECRET");
  return secretValue;
})();

module.exports = {
  secret,
};
