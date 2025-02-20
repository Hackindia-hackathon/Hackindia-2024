# Buy Me A Coffee DApp

A DApp that let's others send me coffee with crypto! ☕️
* View verified smart contract on Mumbai: https://mumbai.polygonscan.com/address/0xD9eA50f537bDc8A5c3cFBD5dfef04Dea846212d5#code
### Road to Web3 Week 2 Challenge: Build "Buy Me a Coffee" DeFi DApp
* https://docs.alchemy.com/docs/how-to-build-buy-me-a-coffee-defi-dapp
* I followed the smart contract portion exactly as the tutorial instructed. The only difference was that I deployed to Mumbai. 
* On the front-end, I free-styled it. 

## Features ✨
Below I explain all the features I added to the front-end + what I used to build it. 
### Landing Page
![Figure 1](images/Landing.png)
* Connect Wallet using Rainbow Kit
* Created the landing page using this Chakra Template w/ some modifications: https://chakra-templates.dev/templates/page-sections/hero/callToActionWithAnnotation
### Send Coffee Modal
![Figure 2](images/SendCoffeeModal.png)
* Used the Chakra UI Modal & Form Components to create this "Form Modal"
  * Modal: https://chakra-ui.com/docs/components/modal/usage
  * Form: https://chakra-ui.com/docs/components/form-control/usage
* Using Chakra UI + Tailwind CSS has definately made front-end development a faster process, I recommend. 👍
* Added two options for sending coffee: Regular or Large using Chakra UI's Button Component
* Utilized wagmi React Hooks to send transactions. 
  * useContract() https://wagmi.sh/docs/hooks/useContract
    * This react hook allowed me to connect to my smart-contract & to trigger transactions. 

### All Coffees Recieved
![Figure 3](images/AllCoffeesRecieved.png)
* Used this Chakra UI template to display all my memos recieved: https://chakra-templates.dev/templates/page-sections/testimonials/gridBlurredBackdrop
* Avatar Images are stored on IPFS using Web3Storage. Checkout `packages/next-app/helpers/getRandomImage.js` to see all image URLs.
* In case you don't have on-chain data yet, you can use the test data in `packages/next-app/utils/testimonials.js`.
* The backgrounds for each card are in `packages/next-app/utils/backgrounds.js`, the backgrounds are svg. 
  * If you want to play around with the background, checkout this website: https://www.svgbackgrounds.com/set/free-svg-backgrounds-and-patterns/
    * Export as inline SVG
    * Then go here: https://yoksel.github.io/url-encoder/ & paste into 'Insert SVG'
    * Copy the 'Ready for CSS' URL & add it to the array in `backgrounds.js`

### Withdraw Funds Modal
![Figure 4](images/Withdraw.png)
![Figure 5](images/WithdrawModal.png)
* Used Chakra UI Button / Modal Components for the owner to be able to withdraw their funds. This works similarly to the "Send Coffee Modal".
* Only the owner can withdraw their funds - but everyone can click the button. 

### Future Improvemnts
* Only show the "Withdraw Funds" button if the owner is connected. 
* In the 'Withdraw Funds' Modal, add more useful information such as the total balance of the smart-contract.
* Save image CID on-chain (The images are on IPFS but it would be better to also store them on-chain too).
* Be able to sort all recieved coffees from oldest to latest (Using The Graph).
* Add pages to the 'coffees recieved' data so that it only displays 4 memos per page.
* Support being able to reciebe multiple cryptocurrencies & stablecoins.
* Allow custom donation amount, not just 'coffee' or 'large coffee'
* Allow the owner to be able to change 'coffee' to any food/drink that they enjoy like pizza, sushi or tea. Not everyone likes coffee.
#   D i v y a n g U G i t H u b  
 #   c o d e p o o l  
 