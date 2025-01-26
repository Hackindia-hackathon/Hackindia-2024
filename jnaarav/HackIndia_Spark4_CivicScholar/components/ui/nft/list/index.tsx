import { useListedNfts } from "@hooks/web3";
import { FunctionComponent } from "react";
import NftItem from "../item";


const NftList: FunctionComponent = () => {
  const {nfts} = useListedNfts();

  return (
    <div className=" translate-y-[15%] translate-x-[12%] rounded-lg h-[10vh] w-[80%] grid grid-cols-3 [grid-auto-rows:minmax(400px,auto) gap-5">
      { nfts.data?.map( nft => (
        <div key={nft.meta.image} className="grid [grid-template-rows:55%_45%] rounded-lg shadow-lg">
          <NftItem 
            item={nft}
            buyNft={nfts.buyNft} />
        </div>
      ))}
    </div>
  )
}

export default NftList