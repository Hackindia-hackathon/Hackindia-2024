// IPFS & Polygon Smart Contract Interaction
import { storeCIDOnPolygon } from './contract.js';  // Smart contract interaction

const form = document.getElementById('fileForm');
const fileInput = document.getElementById('fileInput');
const resultDiv = document.getElementById('result');
const cidSpan = document.getElementById('cid');
const storeCIDBtn = document.getElementById('storeCID');
const messageDiv = document.getElementById('message');

// Upload File to IPFS
async function uploadToIPFS(file) {
  try {
    const ipfsClient = window.IpfsHttpClient('https://ipfs.infura.io:5001/api/v0');
    const addedFile = await ipfsClient.add(file);
    return addedFile.path;  // Return the IPFS CID
  } catch (error) {
    console.error('Error uploading to IPFS:', error);
    throw error;
  }
}

// Handle form submission
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const file = fileInput.files[0];

  if (file) {
    try {
      // Step 1: Upload file to IPFS
      const cid = await uploadToIPFS(file);
      console.log(`File uploaded to IPFS with CID: ${cid}`);

      // Step 2: Show the CID in the result section
      cidSpan.textContent = cid;
      resultDiv.classList.remove('hidden');

      // Step 3: Store CID on Polygon (when clicked)
      storeCIDBtn.onclick = async () => {
        await storeCIDOnPolygon(cid);
        messageDiv.textContent = 'CID successfully stored on Polygon!';
        messageDiv.classList.remove('hidden');
      };
    } catch (error) {
      console.error('Error:', error);
      messageDiv.textContent = 'Error uploading file to IPFS or storing CID on Polygon.';
      messageDiv.classList.remove('hidden');
    }
  }
});
