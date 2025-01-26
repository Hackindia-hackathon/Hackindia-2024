document.getElementById('connectButton').addEventListener('click', async () => {
    if (typeof window.ethereum !== 'undefined') {
        try {
            await ethereum.request({ method: 'eth_requestAccounts' });
            alert('MetaMask connected!');
            loadImagesFromIPFS();
        } catch (error) {
            console.error(error);
            alert('Connection to MetaMask failed');
        }
    } else {
        alert('MetaMask is not installed. Please install it to use this feature.');
    }
});

document.getElementById('displayButton').addEventListener('click', function () {
    document.getElementById('generatedImage').style.display = 'block';
});

async function loadImagesFromIPFS() {
    const ipfsHashes = [
        'QmRKbqB2zvyaTTywxx4fzHQgK2dqWo462nYuYBJhXQ4bm7',
    ];

    const imageGallery = document.getElementById('imageGallery');
    imageGallery.innerHTML = '';

    ipfsHashes.forEach(hash => {
        const img = document.createElement('img');
        img.src = `http://ipfs.io/ipfs/${hash}`;
        img.alt = 'IPFS Image';
        imageGallery.appendChild(img);
    });
}