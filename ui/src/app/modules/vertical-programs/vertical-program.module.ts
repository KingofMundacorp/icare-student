import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { VerticalProgramRoutingModule } from './verical-program-routing.module';
import { clinicPages } from "./pages";
import { SharedModule } from "../../shared/shared.module";
import { clinicComponents } from "./components";
import { programServices } from "./services";
import { PatientEnrollmentsComponent } from "./components/patient-enrollments/patient-enrollments.component";

@NgModule({
  declarations: [
    ...clinicPages,
    ...clinicComponents,
    PatientEnrollmentsComponent,
  ],
  providers: [...programServices],
  imports: [
    CommonModule, 
    VerticalProgramRoutingModule, 
    SharedModule
  ],
})
export class VerticalProgramsModule {}
