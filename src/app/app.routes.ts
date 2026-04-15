import { Routes } from '@angular/router';
import { Login } from './login/login';
import { TwoWayDataBinding } from './two-way-data-binding/two-way-data-binding';
import { Chaild } from './chaild/chaild';
import { ComputedSignal } from './computed-signal/computed-signal';
import { DataGrid } from './data-grid/data-grid';
import { Effects } from './effects/effects';
import { Events } from './events/events';
import { Functions } from './functions/functions';
import { Looping } from './looping/looping';
import { Parent } from './parent/parent';
import { Signalss } from './signalss/signalss';
import { SigninComponent } from './signin/signin';
import { ToDoApp } from './to-do-app/to-do-app';
import { SignalsWithTemplate } from './signals-with-template/signals-with-template';
import { InputsUsingSignals } from './inputs-using-signals/inputs-using-signals';
import { StoreWithNgrx } from './store-with-ngrx/store-with-ngrx';
import { FormWithSignals } from './form-with-signals/form-with-signals';
import { Dashboard } from './dashboard/dashboard';
import { Profile } from './dashboard/profile/profile';
import { Settings } from './dashboard/settings/settings';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { BuildHome } from './build-home/build-home';
import { PageNotFound } from './page-not-found/page-not-found';
import { SignalDeep } from './signal-deep/signal-deep';
import { authGuard } from './auth-guard';
import { Profiles } from './profiles/profiles';
import { canDeactivateGuard } from './can-deactivate-guard';
import { RouteParamsOne } from './route-params-one/route-params-one';
import { RouteParamsTwo } from './route-params-two/route-params-two';
import { App } from './app';


export const routes: Routes = [
    // {
    //     path: '',
    //     component: Login
    // },
    {
        path: '',
        component: App
    },
    {
        path: 'twoway',
        component: TwoWayDataBinding
    },
     {
        path: 'profiles',
        component: Profiles,
        canDeactivate: [canDeactivateGuard]
    },
    {
        path: 'signal-deep',
        component: SignalDeep,
        canActivate: [authGuard]
    },
    {
        path: 'Chaild-component',
        component: Chaild
    },
    {
        path: 'computed-signal',
        component: ComputedSignal
    },
    {
        path: 'datagrid',
        component: DataGrid
    },
    {
        path: 'efects',
        component: Effects
    },
    {
        path: 'events',
        component: Events
    },
    {
        path: 'functions',
        component: Functions
    },
    {
        path: 'looping',
        component: Looping
    },
    {
        path: 'parent',
        component: Parent
    },
    {
        path: 'signals',
        component: Signalss
    },
    {
        path: 'signin',
        component: SigninComponent
    },
    {
        path: 'todo',
        component: ToDoApp
    },
    {
        path: 'chaild',
        component: Chaild
    },
    {
        path: 'signal-with-template',
        component: SignalsWithTemplate
    },
    {
        path: 'inputs-using-signals',
        component: InputsUsingSignals
    },
    {
        path: 'store-with-ngrx',
        component: StoreWithNgrx
    },
    {
        path: 'form-with-signals',
        component: FormWithSignals
    },
    {
        path: 'route-navigation/:id',
        component: RouteParamsOne,
    },
    {
        path: 'route-navigation-two',
        component: RouteParamsTwo,
    },
    {
        path: 'dashboard',
        component: Dashboard,
        children: [
            {
                path: 'profile',
                component: Profile
            },
            {
                path: 'settings',
                component: Settings
            },
        ]
    },

    {
        path: 'admin',
        loadComponent: () => import('./admin/admin').then(m => m.Admin)
    },

    {
        path: 'build-home',
        component: BuildHome,
        children: [
            {
                path: 'contact',
                component: Contact
            },
            {
                path: 'home',
                component: Home
            },
            {
                path: 'about',
                component: About
            },
        ]
    },
    {
        path: 'home',
        component: Home
    },
    
    // Wildcard route for a 404 page
    {
        path:'**',
        component:PageNotFound
    }

];
