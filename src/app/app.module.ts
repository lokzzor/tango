import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Material
import { MatSliderModule} from '@angular/material/slider';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatExpansionModule} from '@angular/material/expansion';
import { MatSelectModule} from '@angular/material/select';
import { MatTabsModule} from '@angular/material/tabs';
import { MatDialogModule} from '@angular/material/dialog';
import { MatProgressBarModule} from '@angular/material/progress-bar';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatInputModule} from '@angular/material/input';
import { MatIconModule} from '@angular/material/icon';
import { MatListModule} from '@angular/material/list';
import { MatButtonModule} from '@angular/material/button';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatMenuModule} from '@angular/material/menu';
import { MatSidenavModule} from '@angular/material/sidenav'; 
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { ToolbarComponent } from './main/toolbar/toolbar.component';
import { HomeComponent } from './pages/home/home.component';
import { MatSlideToggleModule} from '@angular/material/slide-toggle';



import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,MatSlideToggleModule,MatSelectModule, MatNativeDateModule, MatIconModule,MatProgressSpinnerModule, MatButtonModule, MatToolbarModule, MatMenuModule, MatSidenavModule, MatCardModule, MatDialogModule, MatTabsModule, MatProgressSpinnerModule, MatInputModule, MatListModule, MatProgressBarModule, MatExpansionModule, MatDatepickerModule, MatFormFieldModule, MatCheckboxModule, MatSliderModule,
    AppRoutingModule
  ],
  exports: [
    MatSlideToggleModule,MatIconModule,MatProgressSpinnerModule, MatListModule, MatButtonModule, MatToolbarModule, MatMenuModule, MatSidenavModule, MatCardModule, MatDialogModule, MatProgressSpinnerModule, MatInputModule, MatProgressBarModule, MatTabsModule, MatExpansionModule, MatFormFieldModule, MatCheckboxModule, MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
