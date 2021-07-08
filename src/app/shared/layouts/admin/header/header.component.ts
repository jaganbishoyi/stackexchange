import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { GeneralService } from "src/app/shared/services/general.service";
import { LocalStoreService } from "src/app/shared/services/local-storage.service";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  constructor(
    public generalService: GeneralService,
    public store: LocalStoreService,
    public route: Router
  ) {}
  sites = [];
  selectedSite: any;
  selected: any;
  ngOnInit() {
    this.getSites();
    this.selected = this.store.getItem("site");
  }

  getSites() {
    this.generalService.getSites().subscribe((res: any) => {
      this.sites = res.items;
      this.selectedSite = this.sites[0];
      this.selected = this.sites[0].api_site_parameter;
      this.store.setItem("site", this.selected);
    });
  }

  change(value) {
    this.selectedSite = this.sites.find(
      (site) => site.api_site_parameter === value
    );
    this.selected = value;
    this.store.setItem("site", this.selected);
  }

  navigateHome(): void {
    this.route.navigate(["/"]);
    this.store.setItem("site", this.selected);
  }

  errorHandler(event) {
    event.target.src = "/assets/images/header/logo.png";
  }
}
