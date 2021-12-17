import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';
import { ProductsComponent } from './products/products.component';
import { GalleryComponent } from './products/gallery/gallery.component';
import { ItemComponent } from './products/item/item.component';
import { ProductCardComponent } from './products/product-card/product-card.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { CountdownComponent } from './countdown/countdown.component';
import { ProductFeaturesComponent } from './product-features/product-features.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UsersComponent } from './users/users.component';
import { SellersComponent } from './sellers/sellers.component';
import { SellerPanelComponent } from './sellers/seller-panel/seller-panel.component';
import { InfoComponent } from './users/info/info.component';
import { ShopComponent } from './shop/shop.component';
import { ShoppingListComponent } from './shop/shopping-list/shopping-list.component';
import { ShoppingListItemComponent } from './shop/shopping-list/shopping-list-item/shopping-list-item.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { FavoritesComponent } from './shop/favorites/favorites.component';
import { DiscounterComponent } from './products/discounter/discounter.component';
import { SearchComponent } from './search/search.component';
import { SellerLoginComponent } from './login/seller-login/seller-login.component';
import { UserLoginComponent } from './login/user-login/user-login.component';
import { UserSignupComponent } from './signup/user-signup/user-signup.component';
import { SellerSignupComponent } from './signup/seller-signup/seller-signup.component';
import { FilterComponent } from './filter/filter.component';
import { BrandsComponent } from './filter/brands/brands.component';
import { PriceComponent } from './filter/price/price.component';
import { CategoryComponent } from './filter/category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    SliderComponent,
    ProductsComponent,
    GalleryComponent,
    ItemComponent,
    ProductCardComponent,
    ProductDetailComponent,
    CountdownComponent,
    ProductFeaturesComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    UsersComponent,
    SellersComponent,
    SellerPanelComponent,
    InfoComponent,
    ShopComponent,
    ShoppingListComponent,
    ShoppingListItemComponent,
    ContactComponent,
    AboutComponent,
    HomeComponent,
    FavoritesComponent,
    DiscounterComponent,
    SearchComponent,
    SellerLoginComponent,
    UserLoginComponent,
    UserSignupComponent,
    SellerSignupComponent,
    FilterComponent,
    BrandsComponent,
    PriceComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
