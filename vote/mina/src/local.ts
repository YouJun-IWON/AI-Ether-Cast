import { AccountUpdate, Mina, PrivateKey } from 'o1js';
import { Add } from './Add.js';

const Local = Mina.LocalBlockchain();
Mina.setActiveInstance(Local);

// Local.testAccounts is an array of 10 test accounts that have been pre-filled with Mina
// let feePayer = Local.testAccounts[0].privateKey;
const { privateKey: senderKey, publicKey: sender } = Local.testAccounts[0];

const fee = 0.1 * 1e9; // in nanomina (1 billion = 1.0 mina)

// zkapp account
let zkAppPrivateKey = PrivateKey.random();
let zkAppAddress = zkAppPrivateKey.toPublicKey();
let zkAppInstance = new Add(zkAppAddress);

let txn = await Mina.transaction({ sender: sender, fee }, () => {
    AccountUpdate.fundNewAccount(sender);
    zkAppInstance.deploy({ zkappKey: zkAppPrivateKey });
  });
  
const txPromise = await  txn.send();
/*
`txn.send()` returns a promise with two closures - `.wait()` and `.hash`
`.hash` returns the transaction hash, as the name might indicate
`.wait()` automatically resolves once the transaction has been included in a block. this is redundant for the LocalBlockchain, but very helpful for live testnets
*/
await txPromise.wait();

// console.log('compile the contract...');
// await Add.compile();

// try {
//   // call update() and send transaction
//   console.log('build transaction and create proof...');
//   let tx = await Mina.transaction({ sender: feepayerAddress, fee }, () => {
//     zkApp.update();
//   });
//   await tx.prove();

//   console.log('send transaction...');
//   const sentTx = await tx.sign([feepayerKey]).send();
//   if (sentTx.status === 'pending') {
//     console.log(
//       '\nSuccess! Update transaction sent.\n' +
//         '\nYour smart contract state will be updated' +
//         '\nas soon as the transaction is included in a block:' +
//         `\n${getTxnUrl(config.url, sentTx.hash)}`
//     );
//   }
// } catch (err) {
//   console.log(err);
// }

function getTxnUrl(graphQlUrl: string, txnHash: string | undefined) {
  const txnBroadcastServiceName = new URL(graphQlUrl).hostname
    .split('.')
    .filter((item) => item === 'minascan' || item === 'minaexplorer')?.[0];
  const networkName = new URL(graphQlUrl).hostname
    .split('.')
    .filter((item) => item === 'berkeley' || item === 'testworld')?.[0];
  if (txnBroadcastServiceName && networkName) {
    return `https://minascan.io/${networkName}/tx/${txnHash}?type=zk-tx`;
  }
  return `Transaction hash: ${txnHash}`;
}