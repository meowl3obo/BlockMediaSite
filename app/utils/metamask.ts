export const connectMetamask = async (): Promise<string> => {
  let address = ''
  if (window.ethereum === undefined || !window.ethereum.isMetaMask) return address
  const addresses = await window.ethereum.request({
    method: 'eth_requestAccounts',
  })
  if (addresses.length > 0) address = addresses[0]
  return address
}