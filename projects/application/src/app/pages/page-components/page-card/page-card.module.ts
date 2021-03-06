import { ContentModule } from '@app/components/content/content.module';
import { CbSocialModule, CbAvatarModule, CbCardModule } from '@lib';
import { MatChipsModule, MatIconModule, MatButtonModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';

import { PageCardRouting } from './page-card.routing';
import {
  PageCardExampleComponent,
  PageCardApiComponent,
  PageCardComponent
} from './page-card.component';

@NgModule({
  imports: [
    SharedModule,
    PageCardRouting,
    CbCardModule,
    MatChipsModule,
    CbAvatarModule,
    CbSocialModule,
    MatIconModule,
    MatButtonModule,
    ContentModule
  ],
  declarations: [
    PageCardExampleComponent,
    PageCardApiComponent,
    PageCardComponent
  ]
})
export class PageCardModule { }
