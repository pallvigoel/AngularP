import { NgModule } from '@angular/core';

import {
  MatButtonModule} from '@angular/material/button'
  import {
    MatCardModule} from '@angular/material/card'
    import {
        MatTableModule} from '@angular/material/table'
        import {MatToolbarModule} from '@angular/material/toolbar'
        import {MatIconModule}  from '@angular/material/icon'
        import {MatTabsModule}  from '@angular/material/tabs'
        import {MatFormFieldModule}  from '@angular/material/form-field'
        import {MatSidenavModule} from '@angular/material/sidenav'
        import {MatListModule} from '@angular/material/list'
        import { MatInputModule } from '@angular/material/input';

 @NgModule({
  imports: [
    MatButtonModule,
    MatCardModule,MatTableModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,MatToolbarModule,MatIconModule,MatTabsModule,MatFormFieldModule,MatListModule,MatInputModule
  ]
})

export class MaterialModule {}