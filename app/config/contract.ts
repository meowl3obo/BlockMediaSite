export const VideosContract = {
  address: process.env.NEXT_PUBLIC_VIDEOS_CONTRACT_ADDRESS ?? "",
  abi: [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "key",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "author",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "commentContent",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        }
      ],
      "name": "addComment",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "donate",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getBalance",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getInfo",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "Name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "Key",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "Author",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "UploadTimestamp",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "ViewCount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "TotalDonate",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "Balance",
              "type": "uint256"
            },
            {
              "components": [
                {
                  "internalType": "address[]",
                  "name": "Likes",
                  "type": "address[]"
                },
                {
                  "internalType": "address[]",
                  "name": "Unlikes",
                  "type": "address[]"
                }
              ],
              "internalType": "struct VideoContract.React",
              "name": "React",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "uint256",
                  "name": "Floor",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "User",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "CreateTimestamp",
                  "type": "uint256"
                },
                {
                  "internalType": "string",
                  "name": "Content",
                  "type": "string"
                },
                {
                  "components": [
                    {
                      "internalType": "address[]",
                      "name": "Likes",
                      "type": "address[]"
                    },
                    {
                      "internalType": "address[]",
                      "name": "Unlikes",
                      "type": "address[]"
                    }
                  ],
                  "internalType": "struct VideoContract.React",
                  "name": "React",
                  "type": "tuple"
                }
              ],
              "internalType": "struct VideoContract.Comment[]",
              "name": "Comments",
              "type": "tuple[]"
            }
          ],
          "internalType": "struct VideoContract.Video",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]
};
