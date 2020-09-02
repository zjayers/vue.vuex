// -------- Home Route -------- //
import Home from "@/components/Home";

// -------- Lazy Loaded Routes -------- //
const Portfolio = () => import("@/components/portfolio/Portfolio");
const Stocks = () => import("@/components/stocks/Stocks");

// -------- Page Name Constants -------- //
export const HOME_PAGE = "HOME_PAGE";
export const PORTFOLIO_PAGE = "PORTFOLIO_PAGE";
export const STOCK_PAGE = "STOCK_PAGE";

export const HOME_ROUTE = "/";
export const PORTFOLIO_ROUTE = "/portfolio";
export const STOCKS_ROUTE = "/stocks";
export const WILDCARD_ROUTE = "*";

// -------- Route Setup -------- //
export const routes = [
  { path: HOME_ROUTE, component: Home, name: HOME_PAGE },
  { path: PORTFOLIO_ROUTE, component: Portfolio, name: PORTFOLIO_PAGE },
  { path: STOCKS_ROUTE, component: Stocks, name: STOCK_PAGE },
  { path: WILDCARD_ROUTE, redirect: { name: HOME_PAGE } },
];
