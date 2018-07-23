import { LayoutComponent } from './../layout/layout.component';
export const routes = [

    {
        path: '',
        component: LayoutComponent,
        canActivate: [],
        children: [
           
        ]
    },

    { path: '**', redirectTo: '' }

];