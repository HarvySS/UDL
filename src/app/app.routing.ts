import { Route } from '@angular/router';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { NoAuthGuard } from 'app/core/auth/guards/noAuth.guard';
import { LayoutComponent } from 'app/layout/layout.component';
import { InitialDataResolver } from 'app/app.resolvers';

// @formatter:off
// tslint:disable:max-line-length
export const appRoutes: Route[] = [

    // Redirect empty path to '/example'
    {path: '', pathMatch : 'full', redirectTo: 'home'},

    // Redirect signed in user to the '/example'
    //
    // After the user signs in, the sign in page will redirect the user to the 'signed-in-redirect'
    // path. Below is another redirection for that path to redirect the user to the desired
    // location. This is a small convenience to keep all main routes together here on this file.
    {path: 'signed-in-redirect', pathMatch : 'full', redirectTo: 'home'},

    // Auth routes for guests
    {
        path: '',
        canActivate: [NoAuthGuard],
        canActivateChild: [NoAuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {path: 'confirmation-required', loadChildren: () => import('app/modules/auth/confirmation-required/confirmation-required.module').then(m => m.AuthConfirmationRequiredModule)},
            {path: 'forgot-password', loadChildren: () => import('app/modules/auth/forgot-password/forgot-password.module').then(m => m.AuthForgotPasswordModule)},
            {path: 'reset-password', loadChildren: () => import('app/modules/auth/reset-password/reset-password.module').then(m => m.AuthResetPasswordModule)},
            {path: 'sign-in', loadChildren: () => import('app/modules/auth/sign-in/sign-in.module').then(m => m.AuthSignInModule)},
            {path: 'sign-up', loadChildren: () => import('app/modules/auth/sign-up/sign-up.module').then(m => m.AuthSignUpModule)},
        ]
    },

    // Auth routes for authenticated users
    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {path: 'sign-out', loadChildren: () => import('app/modules/auth/sign-out/sign-out.module').then(m => m.AuthSignOutModule)},
            {path: 'unlock-session', loadChildren: () => import('app/modules/auth/unlock-session/unlock-session.module').then(m => m.AuthUnlockSessionModule)}
        ]
    },

    // Landing routes
    {
        path: '',
        component  : LayoutComponent,
        data: {
            layout: 'empty'
        },
        children   : [
            //{path: 'home', loadChildren: () => import('app/modules/landing/home/home.module').then(m => m.LandingHomeModule)},
            //{path: 'home', loadChildren: () => import('app/modules/admin/example/example.module').then(m => m.ExampleModule)},
        ]
    },

    // Admin routes
    {
        path       : '',
        component  : LayoutComponent,
        resolve    : {
            initialData: InitialDataResolver,
        },
        children   : [
            {path: 'home', loadChildren: () => import('app/modules/admin/example/example.module').then(m => m.ExampleModule)},
            
            {path: 'leaderboard', loadChildren: () => import('app/pages/league-scoreboard/league-scoreboard.module').then(m => m.LeagueScoreboardModule)},
            {path: 'contact-us', loadChildren: () => import('app/pages/contact-us/contact-us.module').then(m => m.ContactUsModule)},
            {path: 'teams', loadChildren: () => import('app/pages/teams/teams.module').then(m => m.TeamsModule)},
            {path: 'teams/:team', loadChildren: () => import('app/pages/teams/teams.module').then(m => m.TeamsModule)},
            {path: 'teams-goal', loadChildren: () => import('app/pages/teams-goal/teams-goal.module').then(m => m.TeamsGoalModule)},
            {path: 'user-leaderboard', loadChildren: () => import('app/pages/user-leaderboard/user-leaderboard.module').then(m => m.UserLeaderboardModule)},
            {path: 'admin-panel', loadChildren: () => import('app/pages/admin-panel/admin-panel.module').then(m => m.AdminPanelModule)},
            {path: 'instructions', loadChildren: () => import('app/pages/instructions/instructions.module').then(m => m.InstructionsModule)},
            {path: 'teams', loadChildren: () => import('app/pages/teams/teams.module').then(m => m.TeamsModule)},
            // {path:'admineditdialoge',loadChildren: () => import('app/pages/admineditdialoge/admineditdialoge.module').then(m => m.AdmineditdialogeModule)}
        ]
    }
];
