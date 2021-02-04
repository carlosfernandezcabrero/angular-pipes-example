import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {registerLocaleData} from '@angular/common';
import localEs from '@angular/common/locales/es';
import localFr from '@angular/common/locales/fr';

registerLocaleData(localEs);
registerLocaleData(localFr);

import { AppComponent } from './app.component';
import { MyCustomPipePipe } from './pipes/my-custom-pipe.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { DisplaycodePipe } from './pipes/displaycode.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyCustomPipePipe,
    DomseguroPipe,
    DisplaycodePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
