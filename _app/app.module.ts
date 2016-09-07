import { NgModule, enableProdMode }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
// import { ArticleWebsiteModule } from '@dagilleland/article-website/article-website/article-website.module';
// import { ArticleWebsiteModule } from './article-website/article-website.module';
import { ArticleWebsiteModule, LayoutConfigService } from '@dagilleland/article-website/index';
import {HttpModule} from '@angular/http'

// enableProdMode();

@NgModule({
  // Declarations: A list of the component, directive and pipe classes that belong to this module.
  //               Do not re-declare a class imported from another module.
  declarations: [
    AppComponent
  ],

  // Imports: The list of modules whose exported components, directives or pipes are
  //          referenced by the component templates declared in this module.
  imports: [
    BrowserModule,
    HttpModule,
    ArticleWebsiteModule
  ],

  // Exports: A list of declarations — component, directive, and pipe classes — that an importing module can use.
  //          Exported declarations are the module's public API.
  exports:      [],
  
  // Providers: A list of dependency injection providers.
  providers:    [
    LayoutConfigService
  ],

  // Bootstrap: A list of components that can be bootstrapped.
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
