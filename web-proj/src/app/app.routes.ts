import { Routes } from "@angular/router";


export const AppRotas :  Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: () => import('./login/login.module').then(x => x.LoginModule)
    },
    {
        path: 'home',
        loadChildren: () => import('./dashboard/dashboard.module').then(x => x.DashboardModule)
    },
    {
        path: 'cadastrar/pescador',
        loadChildren: () => import('./cadastrar/cadastrar.module').then(x => x.CadastrarModule)
    },
    {
        path: 'editar/pescador/:id',
        loadChildren: () => import('./cadastrar/cadastrar.module').then(x => x.CadastrarModule)
    }
]
