window.addEventListener('DOMContentLoaded', async () => {
    const contractAddress = '0x1C695D1aA1110c2850F9dDd003Cc090733C87DC8';

    const Tokenabi = [
        { inputs: [], stateMutability: 'nonpayable', type: 'constructor' }, {
            anonymous: false,
            inputs:    [
                {
                    indexed: true, internalType: 'address', name: 'owner', type: 'address',
                }, {
                    indexed: true, internalType: 'address', name: 'approved', type: 'address',
                }, {
                    indexed: true, internalType: 'uint256', name: 'tokenId', type: 'uint256',
                },
            ],
            name: 'Approval',
            type: 'event',
        }, {
            anonymous: false,
            inputs:    [
                {
                    indexed: true, internalType: 'address', name: 'owner', type: 'address',
                }, {
                    indexed: true, internalType: 'address', name: 'operator', type: 'address',
                }, {
                    indexed: false, internalType: 'bool', name: 'approved', type: 'bool',
                },
            ],
            name: 'ApprovalForAll',
            type: 'event',
        }, {
            anonymous: false,
            inputs:    [
                {
                    indexed: false, internalType: 'address', name: 'account', type: 'address',
                },
            ],
            name: 'Paused',
            type: 'event',
        }, {
            anonymous: false,
            inputs:    [
                {
                    indexed: true, internalType: 'bytes32', name: 'role', type: 'bytes32',
                }, {
                    indexed: true, internalType: 'bytes32', name: 'previousAdminRole', type: 'bytes32',
                }, {
                    indexed: true, internalType: 'bytes32', name: 'newAdminRole', type: 'bytes32',
                },
            ],
            name: 'RoleAdminChanged',
            type: 'event',
        }, {
            anonymous: false,
            inputs:    [
                {
                    indexed: true, internalType: 'bytes32', name: 'role', type: 'bytes32',
                }, {
                    indexed: true, internalType: 'address', name: 'account', type: 'address',
                }, {
                    indexed: true, internalType: 'address', name: 'sender', type: 'address',
                },
            ],
            name: 'RoleGranted',
            type: 'event',
        }, {
            anonymous: false,
            inputs:    [
                {
                    indexed: true, internalType: 'bytes32', name: 'role', type: 'bytes32',
                }, {
                    indexed: true, internalType: 'address', name: 'account', type: 'address',
                }, {
                    indexed: true, internalType: 'address', name: 'sender', type: 'address',
                },
            ],
            name: 'RoleRevoked',
            type: 'event',
        }, {
            anonymous: false,
            inputs:    [
                {
                    indexed: true, internalType: 'address', name: 'from', type: 'address',
                }, {
                    indexed: true, internalType: 'address', name: 'to', type: 'address',
                }, {
                    indexed: true, internalType: 'uint256', name: 'tokenId', type: 'uint256',
                },
            ],
            name: 'Transfer',
            type: 'event',
        }, {
            anonymous: false,
            inputs:    [
                {
                    indexed: false, internalType: 'address', name: 'account', type: 'address',
                },
            ],
            name: 'Unpaused',
            type: 'event',
        }, {
            inputs: [], name: 'DEFAULT_ADMIN_ROLE', outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }], stateMutability: 'view', type: 'function',
        }, {
            inputs: [], name: 'MINTER_ROLE', outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }], stateMutability: 'view', type: 'function',
        }, {
            inputs: [], name: 'PAUSER_ROLE', outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }], stateMutability: 'view', type: 'function',
        }, {
            inputs: [], name: 'Supply', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function',
        }, {
            inputs: [], name: 'VERSION', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function',
        }, {
            inputs: [], name: '_receiver', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function',
        }, {
            inputs: [], name: 'alsups', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function',
        }, {
            inputs: [{ internalType: 'address', name: 'to', type: 'address' }, { internalType: 'uint256', name: 'tokenId', type: 'uint256' }], name: 'approve', outputs: [], stateMutability: 'nonpayable', type: 'function',
        }, {
            inputs: [{ internalType: 'address', name: 'owner', type: 'address' }], name: 'balanceOf', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function',
        }, {
            inputs: [], name: 'freeprice', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function',
        }, {
            inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }], name: 'getApproved', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function',
        }, {
            inputs: [{ internalType: 'bytes32', name: 'role', type: 'bytes32' }], name: 'getRoleAdmin', outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }], stateMutability: 'view', type: 'function',
        }, {
            inputs: [{ internalType: 'bytes32', name: 'role', type: 'bytes32' }, { internalType: 'address', name: 'account', type: 'address' }], name: 'grantRole', outputs: [], stateMutability: 'nonpayable', type: 'function',
        }, {
            inputs: [{ internalType: 'bytes32', name: 'role', type: 'bytes32' }, { internalType: 'address', name: 'account', type: 'address' }], name: 'hasRole', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], stateMutability: 'view', type: 'function',
        }, {
            inputs: [{ internalType: 'address', name: 'owner', type: 'address' }, { internalType: 'address', name: 'operator', type: 'address' }], name: 'isApprovedForAll', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], stateMutability: 'view', type: 'function',
        }, {
            inputs: [{ internalType: 'uint256', name: 'amount', type: 'uint256' }], name: 'mint', outputs: [], stateMutability: 'payable', type: 'function',
        }, {
            inputs: [], name: 'mintingActive', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], stateMutability: 'view', type: 'function',
        }, {
            inputs: [], name: 'name', outputs: [{ internalType: 'string', name: '', type: 'string' }], stateMutability: 'view', type: 'function',
        }, {
            inputs: [], name: 'oneprice', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function',
        }, {
            inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }], name: 'ownerOf', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function',
        }, {
            inputs: [], name: 'pause', outputs: [], stateMutability: 'nonpayable', type: 'function',
        }, {
            inputs: [], name: 'paused', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], stateMutability: 'view', type: 'function',
        }, {
            inputs: [{ internalType: 'bytes32', name: 'role', type: 'bytes32' }, { internalType: 'address', name: 'account', type: 'address' }], name: 'renounceRole', outputs: [], stateMutability: 'nonpayable', type: 'function',
        }, {
            inputs: [{ internalType: 'bytes32', name: 'role', type: 'bytes32' }, { internalType: 'address', name: 'account', type: 'address' }], name: 'revokeRole', outputs: [], stateMutability: 'nonpayable', type: 'function',
        }, {
            inputs: [{ internalType: 'address', name: 'from', type: 'address' }, { internalType: 'address', name: 'to', type: 'address' }, { internalType: 'uint256', name: 'tokenId', type: 'uint256' }], name: 'safeTransferFrom', outputs: [], stateMutability: 'nonpayable', type: 'function',
        }, {
            inputs: [{ internalType: 'address', name: 'from', type: 'address' }, { internalType: 'address', name: 'to', type: 'address' }, { internalType: 'uint256', name: 'tokenId', type: 'uint256' }, { internalType: 'bytes', name: '_data', type: 'bytes' }], name: 'safeTransferFrom', outputs: [], stateMutability: 'nonpayable', type: 'function',
        }, {
            inputs: [{ internalType: 'address', name: 'operator', type: 'address' }, { internalType: 'bool', name: 'approved', type: 'bool' }], name: 'setApprovalForAll', outputs: [], stateMutability: 'nonpayable', type: 'function',
        }, {
            inputs: [{ internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' }], name: 'supportsInterface', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], stateMutability: 'view', type: 'function',
        }, {
            inputs: [], name: 'symbol', outputs: [{ internalType: 'string', name: '', type: 'string' }], stateMutability: 'view', type: 'function',
        }, {
            inputs: [{ internalType: 'uint256', name: 'index', type: 'uint256' }], name: 'tokenByIndex', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function',
        }, {
            inputs: [{ internalType: 'address', name: 'owner', type: 'address' }, { internalType: 'uint256', name: 'index', type: 'uint256' }], name: 'tokenOfOwnerByIndex', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function',
        }, {
            inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }], name: 'tokenURI', outputs: [{ internalType: 'string', name: '', type: 'string' }], stateMutability: 'view', type: 'function',
        }, {
            inputs: [], name: 'totalSupply', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function',
        }, {
            inputs: [{ internalType: 'address', name: 'from', type: 'address' }, { internalType: 'address', name: 'to', type: 'address' }, { internalType: 'uint256', name: 'tokenId', type: 'uint256' }], name: 'transferFrom', outputs: [], stateMutability: 'nonpayable', type: 'function',
        }, {
            inputs: [], name: 'treasuryAddress', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function',
        }, {
            inputs: [], name: 'twoprice', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function',
        }, {
            inputs: [], name: 'unpause', outputs: [], stateMutability: 'nonpayable', type: 'function',
        }, {
            inputs: [], name: 'withdrawFees', outputs: [], stateMutability: 'nonpayable', type: 'function',
        },
    ];

    let currentAccount = null;


    if (typeof window.ethereum !== 'undefined') {
        window.web3 = new Web3(window.ethereum);


        ethereum.on('chainChanged', () => window.location.reload());
        ethereum.on('accountsChanged', () => window.location.reload());

        const bolaccaunt = await web3.eth.getAccounts();

        // console.log(bolaccaunt[ 0 ]);


        if (bolaccaunt.length === 0) {
            // MetaMask is locked or the user has not connected any accounts
            // console.log('Please connect to MetaMask.');

            $('#minttogleoff').css('display', 'block');
            $('#minttogleon').css('display', 'none');
            $('#btn_metaoff').css('display', 'none');
            $('#btn_metaon').css('display', 'block');


            $('#minttogleoff').on('click', () => {
                // console.log('Please connect to MetaMask.');
                alert('Please connect to MetaMask.');
            });
        } else if (bolaccaunt[ 0 ] !== currentAccount) {
            currentAccount = bolaccaunt[ 0 ];

            const truncate = function (fullStr, strLen, separator) {
                if (fullStr.length <= strLen) return fullStr;

                separator = separator || '...';

                const sepLen = separator.length;
                const charsToShow = strLen - sepLen;
                const frontChars = Math.ceil(charsToShow / 2);
                const backChars = Math.floor(charsToShow / 2);

                return fullStr.slice(0, frontChars)
                    + separator
                    + fullStr.slice(fullStr.length - backChars);
            };

            const shortAcc = truncate(currentAccount, 12, '...');

            $('#btn_metaon').text(shortAcc);
            $('#btn_mob_connected').text(shortAcc);
            $('#btn_connected').text('Connected');
            $('#minttogleoff').css('display', 'none');
            $('#minttogleon').css('display', 'block');
            $('#btn_metaoff').css('display', 'none');
            $('#btn_metaon').css('display', 'block');


            const contractAddress = '0x49837834c71b63823F5363961D584800AE6B826F'; // Replace with your own contract address
            const chain = 'rinkeby'; // rinkeby or polygon


            // console.log('MetaMask is connected');
        }

        document.getElementById('btn_metaon').addEventListener('click', async () => {
            if (bolaccaunt.length === 0) {
                ethereum.request({ method: 'eth_requestAccounts' });
            } else {
                const permissions = await ethereum.request({
                    method: 'wallet_requestPermissions',
                    params: [
                        {
                            eth_accounts: {},
                        },
                    ],
                });
            }

            window.location.reload();
        });


        // console.log('MetaMask is installed!');
    } else {
        window.setTimeout(offlinebtninitialize, 1000);

        function offlinebtninitialize() {
            const btn_metaoff = document.getElementById('btn_metaoff');
            const minttogleoff = document.getElementById('minttogleoff');


            if (btn_metaoff) {
                btn_metaoff.addEventListener('click', async () => {
                    alert('Please install Metamask!');
                    window.location.href = 'https://metamask.io/';
                    // console.log('Please install Metamask!');
                });
            }

            if (minttogleoff) {
                minttogleoff.addEventListener('click', async () => {
                    alert('Please install Metamask!');
                    window.location.href = 'https://metamask.io/';
                    // console.log('Please install Metamask!');
                });
            }
        }


        // console.log('Please install Metamask!');
    }


    document.getElementById('minttogleon').addEventListener('click', () => {
        window.setTimeout(slowAlert, 1000);


        function slowAlert() {
            const btn = document.getElementById('realmint');
            // console.log(btn);

            if (btn) {
                btn.addEventListener('click', async () => {
                    const accauntmint = await web3.eth.getAccounts();
                    const publicadress = accauntmint[ 0 ];
                    const contract = new web3.eth.Contract(Tokenabi, contractAddress);
                    const Totalsupply = await contract.methods.totalSupply().call();
                    const oneprice = await contract.methods.oneprice().call();
                    const twoprice = await contract.methods.twoprice().call();
                    const freeprice = await contract.methods.freeprice().call();
                    let mintPrice;

                    if (Totalsupply <= 750) {
                        mintPrice = oneprice;
                    }
                    if (Totalsupply > 750) {
                        mintPrice = twoprice;
                    }
                    if (Totalsupply > 2500) {
                        mintPrice = freeprice;
                    }

                    if (Totalsupply < 5000) {
                        const ammount = document.getElementById('mintammount').value;

                        if (ammount > 0) {
                            $('#realmint').html('Please Wait');
                            const value = BigInt(mintPrice) * BigInt(ammount);

                            const mintTransaction = await contract.methods
                                .mint(ammount)
                                .send({ from: publicadress, value: value.toString() });

                            if (mintTransaction) {
                                // console.log(publicadress);
                                // console.log('Minuted successfully!');
                                alert('Minuted successfully!');
                                $('#realmint').html('Mint');
                            }
                        } else {
                            alert('0 invalid value');
                        }
                    } else {
                        alert('Maximum supply reached');
                    }
                });
            }
        }
    });
});
