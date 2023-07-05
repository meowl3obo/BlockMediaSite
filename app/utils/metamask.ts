export const connectMetamask = async (): Promise<string> => {
  let address = ''
  console.log(window.ethereum)
  console.log(window.ethereum === undefined)
  console.log(!window.ethereum.isMetaMask)
  if (window.ethereum === undefined || !window.ethereum.isMetaMask) return address
  else {
    const addresses = await window.ethereum.request({
      method: 'eth_requestAccounts',
    })
    if (addresses.length > 0) address = addresses[0]
  }
  return address
}