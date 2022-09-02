import React, { useEffect } from "react";
import { Settings, Token } from "../../components";
import { Main } from "./_";
import { useDispatch, useSelector } from "react-redux";
import { setWalletData } from "../../redux/actions/wallet";

export const Home = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state?.wallet?.data);

  console.log({ state });

  useEffect(() => {
    // dispatch(setWalletData({ account: "userAddress", web3: "provider" }));
  }, []);
  return (
    <>
      <button
        onClick={() =>
          dispatch(setWalletData({ account: "userAddress", web3: "provider" }))
        }
      >
        click
      </button>
      <Main />
      <Settings />
      <Token />
    </>
  );
};
