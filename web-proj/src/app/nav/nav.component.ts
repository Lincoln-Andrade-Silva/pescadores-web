import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../service/local-storage.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  token?: string;

  constructor(private localService: LocalStorageService, private router: Router) { }

  ngOnInit(): void {
    this.token = this.localService.getData('token')!;
  }

  hehe() {
    this.localService.clearData()
    this.router.navigate(['/login']);
  }
}
