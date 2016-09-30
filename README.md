# angular2 playground

The folder structure is pretty similar to the one we use on oneflow-production:

*   /src/app/clients
*   /src/app/components
*   /src/app/shared

If a resource have a lot of files, we could nest some folder inside:

*   /src/app/clients
*   /src/app/clients/client-list/
*   /src/app/clients/client-edit/
*   /src/app/clients/shared/
*   /src/app/clients/shared/client.service.js

Every resource is declared as a NgModule, and it's organized into a block of functionality. A resource module will include routes, components, styles and html. The entry point of a resource module, is the corresponding *.module.js

*   /src/app/clients/client-edit.component.js
*   /src/app/clients/client-edit.component.html
*   /src/app/clients/client-edit.component.scss
*   /src/app/clients/client-edit.module.js
*   /src/app/clients/client-edit.routes.js

The module file is something like:
```
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {ClientsRouting} from './clients.routes';
import {ClientListComponent} from './client-list.component';
import {ClientEditComponent} from './client-edit.component';
import {ComponentsModule} from '../components/components.module';

@NgModule({
  imports: [
    FormsModule,
    ClientsRouting,
    ComponentsModule
  ],
  declarations: [
    ClientListComponent,
    ClientEditComponent
  ]
})
export class ClientsModule {}
```

*   **imports** makes the exported declarations of other modules available in the current module
*   **declarations** are to make directives from the current module available to other directives in the current module. Selectors of directives, components or pipes are only matched against the HTML if they are declared or imported.
*   **exports** makes the components, directives, and pipes available in other modules
*   **providers** are to make services and values known to dependency injection. They are added to the root scope and they are injected to other services or directives that have them as dependency.

     source: http://stackoverflow.com/a/39063231/962135

