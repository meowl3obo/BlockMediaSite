interface IMetamaskResponse {
  address: string
  message: string
  isSuccess: boolean
}

export const connectMetamask = async (): Promise<IMetamaskResponse> => {
  const response: IMetamaskResponse = {
    address: "",
    message: "",
    isSuccess: false,
  }
  if (window.ethereum === undefined || !window.ethereum.isMetaMask) {
    response.message = '請安裝 MetaMask 插件'
    return response
  }
  try {
    const addresses = await window.ethereum.request({
      method: 'eth_requestAccounts',
    })
    if (addresses.length > 0) {
      response.isSuccess = true
      response.address = addresses[0]
    } else response.message = 'MetaMask 連接失敗'
  } catch (err) {
    console.log(err)
    response.message = 'MetaMask 連接失敗'
  }
  return response
}