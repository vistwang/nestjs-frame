静态文件

Fusion design

Prefix: /api/v1/

- block
   - block/${id}
   - blocks?miner=[xxx]

- address
  - address/{id}/balances
  - address/{id}/tickets
  - adress/{id}/blocks
  - address/{id}/transaction(s?)

- transaction(s?)
   - transaction/{id}
   - transition(s?)
   - transactions?address=[xxx]

- token
  - token/${id}/holders
  - token/${id}/information
  - token/${id}/transaction

- fsnprice