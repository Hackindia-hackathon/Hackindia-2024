import { PinataSDK } from "pinata"

export const pinata = new PinataSDK({
  pinataJwt: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJkYjAzZjNhOS1mODg0LTRkZWYtOGY4OC03OTUyOWY4NmQ5NGEiLCJlbWFpbCI6InN5ZWRkYW5pc2gyNzE5OTJAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjEsImlkIjoiRlJBMSJ9LHsiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjEsImlkIjoiTllDMSJ9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6IjY3ZjM5Nzk4YzhmZjQ3NmM1MGZiIiwic2NvcGVkS2V5U2VjcmV0IjoiMWY3ZDFkNDAxNTFmMjZhMjBiZTgxMWJlM2YxZGIyN2YwYzM5YTI5MzhjM2E5ZjE1MDY1ZTZkMWIzMjI0ZGZiYiIsImV4cCI6MTc1NTIzMDQ0M30.h_N4hUaJ5GLr9ZNKXSJhOVbRVUDyxx6os3tgdgPQ5rw`,
  pinataGateway: `red-generous-salamander-113.mypinata.cloud`
})
