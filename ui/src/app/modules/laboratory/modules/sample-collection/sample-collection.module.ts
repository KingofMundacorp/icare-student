import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SampleCollectionRoutingModule } from "./sample-collection-routing.module";
import { collectionPages } from "./pages";
import { collectionComponents } from "./components";
import { SharedModule } from "src/app/shared/shared.module";
import { SharedLabModule } from "../../shared/modules/shared-lab.module";

@NgModule({
  declarations: [...collectionPages, ...collectionComponents],
  imports: [
    CommonModule,
    SampleCollectionRoutingModule,
    SharedModule,
    SharedLabModule,
  ],
})
export class SampleCollectionModule {}
