import { getStore, storeKeys } from "./apis/constants";
import { AddCash, Battle, CreateBattle, Dashboard, ForgotPassword, GameHistory, GetStarted, Login, Notification, Profile, Signup, TermsAndPolicies, TransactionHistory, Wallet } from "./pages";

export interface AppRoutingOptions {
    path: string;
    exact: boolean;
    Component: React.FunctionComponent
};

export const AppRoutes: AppRoutingOptions[] = [
    {
        path: '/login',
        exact: true,
        Component: Login
    },
    {
        path: '/signup',
        exact: true,
        Component: Signup
    },
    {
        path: '/dashboard',
        exact: true,
        Component: Dashboard
    },
    {
        path: '/profile',
        exact: true,
        Component: Profile
    },
    {
        path: '/notifications',
        exact: true,
        Component: Notification
    },
    {
        path: '/forgot-password',
        exact: true,
        Component: ForgotPassword
    },
    {
        path: '/add-cash',
        exact: true,
        Component: AddCash
    },
    {
        path: '/wallet',
        exact: true,
        Component: Wallet
    },
    {
        path: '/battle',
        exact: true,
        Component: Battle
    },
    {
        path: '/create-battle',
        exact: true,
        Component: CreateBattle
    },
    {
        path: '/terms-policies',
        exact: true,
        Component: TermsAndPolicies
    },
    {
        path: '/game-history',
        exact: true,
        Component: GameHistory
    },
    {
        path: '/transaction-history',
        exact: true,
        Component: TransactionHistory
    }
];

const isLoggedIn = (): boolean => {
    if (getStore(storeKeys.access_token)) {
        return true;
    }
    return false;
};

(() => {
    if (isLoggedIn())
        AppRoutes.push({
            path: "/",
            exact: true,
            Component: Dashboard
        });
    else
        AppRoutes.push({
            path: "/",
            exact: true,
            Component: GetStarted
        });
})();