import { Home, Swap ,Launchpad,Liquidity,Openmarket,Migrate,Imports,Gameasserts,Farm,Farms,ETH,Explore,Browse} from "../../pages";

export const routes = [
  { path: "/", component: <Home /> },
  { path: "/swap", component: <Swap /> },
  { path: "/launchpad", component: <Launchpad /> },
  { path: "/liquidity", component: <Liquidity /> },
  { path: "/openmarket", component: <Openmarket /> },
  { path: "/migrate", component: <Migrate /> },
  { path: "/imports", component: <Imports /> },
  { path: "/gameasserts", component: <Gameasserts /> },
  { path: "/farm", component: <Farm /> },
  { path: "/farms", component: <Farms /> },
  { path: "/ETH", component: <ETH /> },
  { path: "/explore", component: <Explore /> },
  { path: "/browse", component: <Browse /> },
];
