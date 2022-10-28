import { Auctions , CreateAuction} from "@liqnft/candy-shop";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { candyShop } from "../utils/candy-shop";
import styled from "styled-components";

const AuctionsView: React.FC = () => {
  const wallet = useAnchorWallet();
  console.log(wallet)
  return (
    <DesContainer>
      <h1 style={{ marginTop: 40, marginBottom: 15 }}>Auctions</h1>
      

      <CreateAuction
          candyShop={candyShop}
          wallet={wallet}
          walletConnectComponent={<WalletMultiButton />}
        cacheUserNFT={true}
      />
      <br />
      <br />
      <h1>Current NFT'S In Auctions</h1>
      <Auctions candyShop={candyShop} wallet={wallet} walletConnectComponent={<WalletMultiButton />} />
    </DesContainer>
  );
};

export default AuctionsView;
const DesContainer = styled.div`
  width: 100%;

  p > a {
    color: #fff;
    text-decoration: underline;
  }
`;
