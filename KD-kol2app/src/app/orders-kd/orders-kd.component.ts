import { Component, OnInit } from '@angular/core';
import {DataService} from "../services/kd-data.service";

@Component({
  selector: 'app-orders-kd',
  templateUrl: './orders-kd.component.html',
  styleUrls: ['./orders-kd.component.css']
})
export class OrdersKDComponent implements OnInit {

  public Items$: any;

  constructor(private service: DataService) {
  }


  ngOnInit(): void {
    this.getComponents();
  }

  getComponents() {
    this.service.getItems().subscribe(response => {
      this.Items$ = response;
    });
  }

}
