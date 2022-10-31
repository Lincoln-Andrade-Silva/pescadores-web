import { Component, OnInit } from '@angular/core';
import { Person } from '../models/Person';
import { Response } from '../models/Response';
import { LocalStorageService } from '../service/local-storage.service';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  persons: Person[] = [];
  groups: any[] = [];
  token?: string;
  search: string = '';
  field: string = 'fishes';
  keyword: string = 'fishes'

  constructor(private service: ServiceService, private localService: LocalStorageService) { }

  ngOnInit(): void {
    this.list()
    this.token = this.localService.getData('token')!;
  }
  list() {
    this.service.listar()
      .subscribe((data : Response<any>) => {
        this.persons = data.data;
        this.groups = this.service.group_by(this.persons, "region")
      })
    }
    goToWpp(personNumber: string){
      var number;
      var string;
      
      number = personNumber.replace("(", "");
      number = number.replace("-", "");
      number = number.replace(")", "");
      string = "https://api.whatsapp.com/send?phone=+55"+number+"&text=Olá%20vim pelo Site !"
      return string;
    }
}
