/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';
import { AuthUtils } from 'app/core/auth/auth.utils';

export const defaultNavigation: FuseNavigationItem[] = [
    
    {
        id   : 'Home',
        title: 'Home',
        type : 'basic',
        icon : 'heroicons_outline:home',
        link : '/home'
    }, {
        id   : 'Leaderboard',
        title: 'League Leaderboard',
        type : 'basic',
        icon : 'heroicons_outline:view-boards',
        link : '/leaderboard'
    },{
        id   : 'Leaderboard',
        title: 'User Leaderboard',
        type : 'basic',
        icon : 'heroicons_outline:users',
        link : '/user-leaderboard'
    },  {
        id   : 'Teams',
        title: 'Teams',
        type : 'basic',
        icon : 'heroicons_outline:user-group',
        link : '/teams'
    },{
        id   : 'Instructions',
        title: 'Instructions',
        type : 'basic',
        icon : 'heroicons_outline:information-circle',
        link : '/instructions'
    }, {
        id   : 'contat-us',
        title: 'Contact Us',
        type : 'basic',
        icon : 'heroicons_outline:chat-alt',
        link : '/contact-us'
    },{
        id   : 'AdminPanel',
        title: 'User Management',
        type : 'basic',
        icon : 'heroicons_outline:users',
        link : '/admin-panel',
        hidden: function () {
            
            let token = localStorage.getItem('accessToken');
            let userInfo = AuthUtils._decodeToken(token);
            if (userInfo && userInfo.jti == 1) {
                return false;
            }
            else {
                return true;
            }
        }
    },
    // , {
    //     id   : 'signOut',
    //     title: 'Sign Out',
    //     type : 'basic',
    //     icon : 'heroicons_outline:logout',
    //     link : '/sign-out',
    //     hidden: function () {
    //         const usersData = (localStorage.getItem('accessToken'));
    //         if (usersData != null) {
    //             return false;
    //         }
    //         else {
    //             return true;
    //         }
    //     }
    // },
    // {
    //     id   : 'signIn',
    //     title: 'Sign In',
    //     type : 'basic',
    //     icon : 'heroicons_outline:login',
    //     link : '/sign-in',
    //     hidden: function () {
    //         const usersData = (localStorage.getItem('accessToken'));
    //         if (usersData == null) {
    //             return false;
    //         }
    //         else {
    //             return true;
    //         }
    //     }
    // }

];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id   : 'Home',
        title: 'Home',
        type : 'basic',
        icon : 'heroicons_outline:home',
        link : '/home'
    }, {
        id   : 'Leaderboard',
        title: 'League Leaderboard',
        type : 'basic',
        icon : 'heroicons_outline:view-boards',
        link : '/leaderboard'
    },{
        id   : 'Leaderboard',
        title: 'User Leaderboard',
        type : 'basic',
        icon : 'heroicons_outline:users',
        link : '/user-leaderboard'
    },  {
        id   : 'Teams',
        title: 'Teams',
        type : 'basic',
        icon : 'heroicons_outline:user-group',
        link : '/teams'
    },{
        id   : 'Instructions',
        title: 'Instructions',
        type : 'basic',
        icon : 'heroicons_outline:information-circle',
        link : '/instructions'
    }, {
        id   : 'contat-us',
        title: 'Contact Us',
        type : 'basic',
        icon : 'heroicons_outline:chat-alt',
        link : '/contact-us'
    }, {
        id   : 'AdminPanel',
        title: 'User Management',
        type : 'basic',
        icon : 'heroicons_outline:users',
        link : '/admin-panel',
        hidden: function () {
            
            let token = localStorage.getItem('accessToken');
            let userInfo = AuthUtils._decodeToken(token);
            if (userInfo && userInfo.jti == 1) {
                return false;
            }
            else {
                return true;
            }
        }
    },
    // ,{
    //     id   : 'signOut',
    //     title: 'Sign Out',
    //     type : 'basic',
    //     icon : 'heroicons_outline:logout',
    //     link : '/sign-out',
    //     hidden: function () {
    //         const usersData = (localStorage.getItem('accessToken'));
    //         if (usersData != null) {
    //             return false;
    //         }
    //         else {
    //             return true;
    //         }
    //     }
    // },
    // {
    //     id   : 'signIn',
    //     title: 'Sign In',
    //     type : 'basic',
    //     icon : 'heroicons_outline:login',
    //     link : '/sign-in',
    //     hidden: function () {
    //         const usersData = (localStorage.getItem('accessToken'));
    //         if (usersData == null) {
    //             return false;
    //         }
    //         else {
    //             return true;
    //         }
    //     }
    // }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id   : 'Home',
        title: 'Home',
        type : 'basic',
        icon : 'heroicons_outline:home',
        link : '/home'
    }, {
        id   : 'Leaderboard',
        title: 'League Leaderboard',
        type : 'basic',
        icon : 'heroicons_outline:users',
        link : '/leaderboard'
    },
    {
        id   : 'Leaderboard',
        title: 'User Leaderboard',
        type : 'basic',
        icon : 'heroicons_outline:view-boards',
        link : '/user-leaderboard'
    }, {
        id   : 'Teams',
        title: 'Teams',
        type : 'basic',
        icon : 'heroicons_outline:user-group',
        link : '/teams'
    },    
    {
        id   : 'Instructions',
        title: 'Instructions',
        type : 'basic',
        icon : 'heroicons_outline:information-circle',
        link : '/instructions'
    }, {
        id   : 'contat-us',
        title: 'Contact Us',
        type : 'basic',
        icon : 'heroicons_outline:chat-alt',
        link : '/contact-us'
    }, {
        id   : 'AdminPanel',
        title: 'User Management',
        type : 'basic',
        icon : 'heroicons_outline:users',
        link : '/admin-panel',
        hidden: function () {
            
            let token = localStorage.getItem('accessToken');
            let userInfo = AuthUtils._decodeToken(token);
            if (userInfo && userInfo.jti == 1) {
                return false;
            }
            else {
                return true;
            }
        }
    },
    
    // ,{
    //     id   : 'signOut',
    //     title: 'Sign Out',
    //     type : 'basic',
    //     icon : 'heroicons_outline:logout',
    //     link : '/sign-out',
    //     hidden: function () {
    //         const usersData = (localStorage.getItem('accessToken'));
    //         if (usersData != null) {
    //             return false;
    //         }
    //         else {
    //             return true;
    //         }
    //     }
    // },
    // {
    //     id   : 'signIn',
    //     title: 'Sign In',
    //     type : 'basic',
    //     icon : 'heroicons_outline:login',
    //     link : '/sign-in',
    //     hidden: function () {
    //         const usersData = (localStorage.getItem('accessToken'));
    //         if (usersData == null) {
    //             return false;
    //         }
    //         else {
    //             return true;
    //         }
    //     }
    // }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id   : 'Home',
        title: 'Home',
        type : 'basic',
        icon : 'heroicons_outline:home',
        link : '/home'
    }, {
        id   : 'Leaderboard',
        title: 'League Leaderboard',
        type : 'basic',
        icon : 'heroicons_outline:view-boards',
        link : '/leaderboard'
    },{
        id   : 'Leaderboard',
        title: 'User Leaderboard',
        type : 'basic',
        icon : 'heroicons_outline:users',
        link : '/user-leaderboard'
    }, {
        id   : 'Teams',
        title: 'Teams',
        type : 'basic',
        icon : 'heroicons_outline:user-group',
        link : '/teams'
    },
    {
        id   : 'Instructions',
        title: 'Instructions',
        type : 'basic',
        icon : 'heroicons_outline:information-circle',
        link : '/instructions'
    },{
        id   : 'contat-us',
        title: 'Contact Us',
        type : 'basic',
        icon : 'heroicons_outline:chat-alt',
        link : '/contact-us'
    },{
        id   : 'AdminPanel',
        title: 'User Management',
        type : 'basic',
        icon : 'heroicons_outline:users',
        link : '/admin-panel',
        hidden: function () {
            
            let token = localStorage.getItem('accessToken');
            let userInfo = AuthUtils._decodeToken(token);
            if (userInfo && userInfo.jti == 1) {
                return false;
            }
            else {
                return true;
            }
        }
    },
    // , {
    //     id   : 'signOut',
    //     title: 'Sign Out',
    //     type : 'basic',
    //     icon : 'heroicons_outline:logout',
    //     link : '/sign-out',
    //     hidden: function () {
    //         const usersData = (localStorage.getItem('accessToken'));
    //         if (usersData != null) {
    //             return false;
    //         }
    //         else {
    //             return true;
    //         }
    //     }
    // },
    // {
    //     id   : 'signIn',
    //     title: 'Sign In',
    //     type : 'basic',
    //     icon : 'heroicons_outline:login',
    //     link : '/sign-in',
    //     hidden: function () {
    //         const usersData = (localStorage.getItem('accessToken'));
    //         if (usersData == null) {
    //             return false;
    //         }
    //         else {
    //             return true;
    //         }
    //     }
    // }
];
