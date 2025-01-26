import { createThirdwebClient, getContract } from "thirdweb";
import { defineChain } from "thirdweb/chains";
// Replace this with your client ID string
// refer to https://portal.thirdweb.com/typescript/v5/client on how to get a client ID
const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;

if (!clientId) {
    throw new Error("No client ID provided");
}

export const client = createThirdwebClient({
    clientId: clientId,
});

export const contract = getContract({
    client,
    chain: defineChain(84532),
    address: "0x15738D3Db5eDB1eF86342eFB4De26D319b9e3eD6"
});