# dex-smart-contract (uniswap v2 clone)

changes:

1. All the contract names, error names and variable names where Uniswap has used has been replaced with ChillliSwap

2. ChillISwapFactory.sol:
- line number 11, protocolFeeDenominator variable is added
- line number 12, totalFee variable is added
- line number 14, INIT_CODE_PAIR_HASH is added
- line number 64, added a function to set a protocol fee denominator
- line number 71, added a function to change total fee

3. UniswapV2Library.sol
- line number 91, added a function to get totalFee
- line number 92, added a function to use totalFee

3. ChillISwapPair.sol
- line number 94, added a variable to get protocolFeeDenominator from factory 
- line number 102, added a variable to calculate denominator to mint liquidity tokens to the owner address
