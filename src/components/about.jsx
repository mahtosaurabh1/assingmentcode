import './about.css'

function About(){
    return(
       <div className="about">
         <div className='about-cont'>
        <h4>We encourage you to explore and fork these queries </h4>
        <h5>All these queries utilize the easy to use Dune DEX table dex.trades and we highly encourage you to explore and fork the queries in this dashboard.</h5>
        <p>The way this table is created can be seen on our GitHub here. If you would like your project to be added to this dashboard you can do a PR.</p>
        <h5>Notes on methods used</h5>
        <ul>
            <li><p>We multiply the amount from one side of the trade with the USD price for the relevant token to get USD price. We do not have USD volume for all tokens so some volume will be omitted if the traded pair consists of two obscure tokens.</p></li>
            <li><p>Volume is trades executed with the smart contracts from different DEXs. Note that a trade done with Kyber can pull liquidity from for instance Uniswap and Oasis and will then be counted twice.</p></li>
            <li><p>Number of traders is counted from the project's smart contracts directly. If traders interact with a smart contract through a proxy contract then that is counted as 1 trader (i.e. the proxy contract).</p></li>
        </ul>
        </div>
       </div>
    )
}

export default About
