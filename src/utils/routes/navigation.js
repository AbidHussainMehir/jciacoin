import {  Swap, Liquidity, Browse,ETH, Explore,AllFarms, Farm,Farms, Gameassets, Import, Launchpad, Migrate, Openmarket, Home } from "../../pages";


export const routes = [
  { path: "/", component: <Home/> },
  { path: "/swap", component: <Swap /> },
  { path: "/liquidity", component: <Liquidity /> },
  { path: "/browse", component: <Browse/> },
  { path: "/eth", component: <ETH/> },
  { path:'/explore', component:<Explore/> },
  { path:'/allfarms', component:<AllFarms/> },
  { path:'/farm', component:<Farm/> },
  { path:'/farms', component:<Farms/> },
  { path:'/gameassets', component:<Gameassets/> },
  { path:'/import', component:<Import/> },
  { path:'/launchpad', component:<Launchpad/> },
  { path:'/migrate', component:<Migrate/> },
  { path:'/openmarket', component:<Openmarket/> },

 




  

  
  

];
