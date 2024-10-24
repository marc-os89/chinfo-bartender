import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideEnvironmentNgxMask } from 'ngx-mask';
import { ControlErrors, FormsModule } from '@bruno-bombonate/ngx-forms';

const controlErrorsCustom: ControlErrors = {
  required: (error: any) => 'Por favor, informe este campo.',
  mask: (error: any) => 'Por favor, informe este campo no formato correto.',
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideEnvironmentNgxMask(),
    importProvidersFrom(FormsModule.forRoot(controlErrorsCustom))
  ],

};
