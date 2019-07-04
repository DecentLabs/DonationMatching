export const NETWORKS = new Map()

const ETH = {
  token: 'ETH',
  tokenAddress: '0x0000000000000000000000000000000000000000',
  decimals: 18
}

const AEUR_TEST = {
  token: 'AEUR',
  tokenAddress: '0x79065a165Ec09E6A89D584a14872802717FE12a3',
  decimals: 2
}


const AEUR_MAIN = {
  token: 'AEUR',
  tokenAddress: '0xc994a2dEb02543Db1f48688438b9903c4b305ce3',
  decimals: 2
}

NETWORKS.set(1, {
  url: 'https://mainnet.infura.io/v3/',
  tokens: [ETH, AEUR_MAIN]
})

NETWORKS.set(4, {
  url: 'https://rinkeby.infura.io/v3/0aac55d3d6bb4b3498e97cbcf7112f6b',
  tokens: [ETH, AEUR_TEST]
})
