/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-waffle");
require("dotenv/config");

const { HARDHAT_PORT, INFURA_PROJECT_ID, PRIVATE_KEY, HARDHAT_PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.7.3",
  defaultNetwork: "ropsten",
  networks: {
    localhost: { url: `http://127.0.0.1:${HARDHAT_PORT}` },
    hardhat: {
      accounts: [{"privateKey":"0x72522f335d58c2450f9863da459acaeaa3b0b57f73771afcb6bd4fc84494140c","balance":"1000000000000000000000"},{"privateKey":"0x5ff8f24c85d01f652d161cc7ce7f1b4ebbaa3da74e3ff09c609bed1c1d3fe152","balance":"1000000000000000000000"},{"privateKey":"0x227912b475bd26f387e6971ce8b8405ec1fff32dbd3d61ed3720ec984d9cdffc","balance":"1000000000000000000000"},{"privateKey":"0x71c99b8283299aa5f90001cca34aed5665d9d0c48664832f82e65042ac6449f5","balance":"1000000000000000000000"},{"privateKey":"0x72e88816228df25cbc1a7af4ff9b25e412656f9f47776981337809ea63354bee","balance":"1000000000000000000000"},{"privateKey":"0xe66554cfbcb921a65e4d2826d370cd8009cddc8f1aee75d3e64d40700f8b2113","balance":"1000000000000000000000"},{"privateKey":"0xecb57fca3cebd94192d44f1e5c79a538aa43d0ab6e74d8cff51691ce55562502","balance":"1000000000000000000000"},{"privateKey":"0x34988c02732a65256864f38dc70d732046beeaf592815969390592cd79596f36","balance":"1000000000000000000000"},{"privateKey":"0x95329b00624975a80a4e1f2d9c02337aee44cd30d2167dcf93b4d4514d87330d","balance":"1000000000000000000000"},{"privateKey":"0xa5a153229dbf7855b429674db8af64fedb46c60efe13167330a796ea2a95cbd5","balance":"1000000000000000000000"}]
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/${INFURA_PROJECT_ID}`,
      accounts: [`${PRIVATE_KEY || HARDHAT_PRIVATE_KEY}`]
    }
  },
  paths: {
    sources: './contracts',
    tests: './__tests__/contracts',
    cache: './cache',
    artifacts: './artifacts',
  },
};