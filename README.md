# FlightSurety

Flight Surety is a sample application project for Udacity's Blockchain Nanodegree Programme.
By: Vinay N Sudrik

## Install

This repository contains Smart Contract code in Solidity (using Truffle), tests (also using Truffle), dApp scaffolding (using HTML, CSS and JS) and server app scaffolding.

To install, download or clone the repo, then:

`npm install`

`truffle compile`

<p align="center">
<br>
<img src="screenshots/Truffle_compile.png" width=900 >
</p>


## Ganache

<p align="center">
<br>
<img src="screenshots/Ganache.png" width=900 >
</p>


## Develop Client

To run truffle tests:


`truffle test ./test/oracles.js`
<p align="center">
<br>
<img src="screenshots/Oracles.png" width=900 >
</p>


`truffle test ./test/flightSurety.js`
<p align="center">
<br>
<img src="screenshots/SurveyTest.png" width=900 >
</p>
<br>

To use the dapp:

`truffle migrate --reset` 
<p align="center">
<br>
<img src="screenshots/truffle_migrate_1.png" width=900 >
</p>

<p align="center">
<br>
<img src="screenshots/truffle_migrate_2.png" width=900 >
</p>

`npm run dapp`
<p align="center">
<br>
<img src="screenshots/dapp.png" width=900 >
</p>
To view dapp:

`http://localhost:8000`

## Develop Server

`npm run server`
<p align="center">
<br>
<img src="screenshots/server.png" width=900 >
</p>


