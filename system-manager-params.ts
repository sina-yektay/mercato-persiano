const { getParameterFromSSM } = require("./helper");

const secret = (async () => {
  const secretValue = await getParameterFromSSM("TORINASIA_AWS_ACCESS_KEY_ID");
  console.log("6666666666666660000009999999999999999999")
  console.log(secretValue)
  return secretValue;
})();

module.exports = {
  secret,
};
