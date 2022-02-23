import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  // },
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full',
  },
  {
    path: 'products',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./products/products.module').then(
            (m) => m.ProductsPageModule
          ),
      },
      {
        path: 'new',
        loadChildren: () =>
          import('./products/new-product-input/new-product-input.module').then(
            (m) => m.NewProductInputPageModule
          ),
      },
      {
        path: ':id',
        loadChildren: () =>
          import('./products/products-detail/products-detail.module').then(
            (m) => m.ProductsDetailPageModule
          ),
      },
    ],
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('./cart/cart.module').then((m) => m.CartPageModule),
  },
  {
    path: 'new-product-input',
    loadChildren: () =>
      import('./products/new-product-input/new-product-input.module').then(
        (m) => m.NewProductInputPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
