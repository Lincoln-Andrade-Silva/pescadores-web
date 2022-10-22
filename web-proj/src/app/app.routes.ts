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
        path: 'cadastrar/comprador',
        loadChildren: () => import('./cadastrar-comprador/cadastrar-comprador.module').then(x => x.CadastrarCompradorModule)
    }
]
