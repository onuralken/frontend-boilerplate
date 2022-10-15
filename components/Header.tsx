import { PeraWalletConnect } from "@perawallet/connect";
import MyAlgoConnect from "@randlabs/myalgo-connect";

type Props = {
  connectData: {
    address: string;
    provider: string;
  } | null;
  setConnectData: React.Dispatch<
    React.SetStateAction<{
      address: string;
      provider: string;
    } | null>
  >;
};

const Header = ({ connectData, setConnectData }: Props) => {
  const peraWallet = new PeraWalletConnect();

  const connectWithMyAlgo = async () => {
    const myAlgoConnect = new MyAlgoConnect();
    try {
      const accounts = await myAlgoConnect.connect();
      const data = {
        address: accounts[0].address,
        provider: "MyAlgo",
      };
      setConnectData(data);
      localStorage.setItem("connectData", JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  };

  const connectWithPera = async () => {
    try {
      const accounts = await peraWallet.connect();
      const data = {
        address: accounts[0],
        provider: "Pera",
      };
      setConnectData(data);
      localStorage.setItem("connectData", JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  };

  const disconnect = () => {
    if (connectData?.provider === "Pera") peraWallet.disconnect();
    setConnectData(null);
    localStorage.removeItem("connectData");
  };

  return <></>;
};

export default Header;
