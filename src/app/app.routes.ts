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

export const routes: Routes = [
    {
        path: '',
        component:Login
    },
    {
        path: 'twoway',
        component:TwoWayDataBinding
    },
    {
        path: 'Chaild-component',
        component:Chaild
    },
    {
        path: 'computed-signal',
        component:ComputedSignal
    },
    {
        path: 'datagrid',
        component:DataGrid
    },
    {
        path: 'efects',
        component:Effects
    },
    {
        path: 'events',
        component:Events
    },
    {
        path: 'functions',
        component:Functions
    },
    {
        path: 'looping',
        component:Looping
    },
    {
        path: 'parent',
        component:Parent
    },
    {
        path: 'signals',
        component:Signalss
    },
    {
        path: 'signin',
        component:SigninComponent
    },
    {
        path: 'todo',
        component:ToDoApp
    },
];
