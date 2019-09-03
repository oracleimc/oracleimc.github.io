import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { MatButtonModule, MatCheckboxModule, MatIconModule, MatStepperModule, MatInputModule, MatFormFieldModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';



import { AngularDualListBoxModule } from 'angular-dual-listbox';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatButtonModule, MatCheckboxModule, MatIconModule, MatStepperModule, MatFormFieldModule, MatInputModule,
    BrowserAnimationsModule, MatToolbarModule,
    FormsModule, ReactiveFormsModule, AngularDualListBoxModule, MatTabsModule, MatButtonToggleModule, MatSelectModule,
    MatTableModule, HttpClientModule, AngularEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
