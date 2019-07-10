import { h } from 'preact'
import { connect } from 'unistore/preact'
import { Link } from 'preact-router/match'
import Expiration from './expiration.js'
import {ROUTES} from '../constants.js'
import {NETWORKS} from 'shared/constants.js'

export default connect([
  'fundraiserContract',
  'grantBalance',
  'expiration',
  'raised',
  'matched',
  'selectedToken',
  'networkId'
])(({
  fundraiserContract,
  expiration,
  raised,
  matched,
  grantBalance,
  selectedToken,
  networkId
}) => {
  let progress = null

  const networkName = NETWORKS.get(networkId).name

  if (matched && matched.value) {
    progress = (
      <div class="progressCont">
        <p>Sponsor matched {matched.value} {matched.token}.</p>
        <progress value={matched.value} max={grantBalance.value}></progress>
      </div>
    )
  }
  // else {
  //   progress = (
  //     <div class="progressCont">
  //       <p>Waiting for sponsorship grant.</p>
  //     </div>
  //   )
  // }

  return (
    <div>
      {networkId !== 1 && (
        <div className="networkTitle">On {networkName}</div>
      )}
      <Expiration at={expiration}/>

      <div class="matchDetails">
        <p class="offer">The sponsor matches every {selectedToken.token} you give, up to {grantBalance ? grantBalance.value : 0} {grantBalance.token}.</p>

        {raised && (raised.value !== null) && (
          <div class="raisedCont">
            <div class="raised">
              <h1>{raised.value} {raised.token}</h1>
              <p>raised so far</p>
            </div>
          </div>
        )}
      </div>

      {progress}

      {fundraiserContract && (
        <Link href={ROUTES.CONTRIBUTION}>DONATE!</Link>
      )}
    </div>
  )
})
