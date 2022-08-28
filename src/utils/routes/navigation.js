import { Home, Swap, Liquidity, Browse, ETH, Explore } from "../../pages";

export const routes = [
  { path: "/", component: <Home /> },
  { path: "/swap", component: <Swap /> },
  { path: "/liquidity", component: <Liquidity /> },
  { path: "/browse", component: <Browse /> },
  { path: "/eth", component: <ETH /> },
  { path: "/explore", component: <Explore /> },
];
