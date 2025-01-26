const sendCoins = async (amount, receiver) => {
    return new Promise((resolve, reject) => {
        const url = `${env.builderUrl}/games/${env.gameId}/tokens/${env.coinId}/transfer/async`
        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Token': `${env.authCode}`
            },
            body: JSON.stringify({
                amount,
                receiver
            }),
        }).then(function (response) {
            if (!response.ok) {
                showNotification('Error sending coins', 'danger');
                reject(response);
            }
            resolve(response);
        });
    });
}

const sendAsset = async (receiver, templateId) => {
    return new Promise((resolve, reject) => {
        const url = `${env.builderUrl}/games/${env.gameId}/nfts/mint-template/${templateId}/async`
        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Token': `${env.authCode}`
            },
            body: JSON.stringify({
                receiver
            }),
        }).then(function (response) {
            if (!response.ok) {
                showNotification('Error sending asset', 'danger');
                reject(response);
            }
            resolve(response);
        });
    })
}
