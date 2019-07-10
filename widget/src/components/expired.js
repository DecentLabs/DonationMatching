import { h } from 'preact'
import { connect } from 'unistore/preact'
import Raised from './raised.js'
import Network from './network.js'

export default connect(['matched'])(({matched}) => {
  return (<div class="container">
    <div>
      <Network />
      <h1>Fundraiser has ended</h1>
      <Raised><p>Raised</p></Raised>
      {matched && matched.value ? (<p class="offer">The sponsor offered {matched.value} {matched.token} to match donations.</p>) : ''}

    </div>
  </div>)
})
