import DashboardIcon from "@mui/icons-material/Dashboard";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

export const links = [
  { title: "Dashboard", path: "/dashboard", icon: DashboardIcon },
  { title: "Expenses", path: "/expenses", icon: RequestQuoteIcon },
  { title: "Budget", path: "/budget", icon: AccountBalanceWalletIcon },
  { title: "Profile", path: "/profile", icon: "", hidden: true },
];
