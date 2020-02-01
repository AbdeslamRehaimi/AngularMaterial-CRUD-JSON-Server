import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialogConfig, MatDialog } from '@angular/material';
import { PeriodicElement } from 'src/app/periodic-element';
import { ElementService } from 'src/app/element.service';
import { UserComponent } from '../user/user.component';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { MatSnackBar} from '@angular/material/snack-bar';

import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  dataSource = new MatTableDataSource<PeriodicElement>();
  displayedColumns: string[] = ['id', 'fullName', 'email', 'mobile', 'city', 'gender', 'departement', 'hireDate', 'isPermanent', 'actions'];
  dialog: MatDialog;

  //users : users [] = [];

  constructor(private service: UserService, private rout: Router, public notification: MatSnackBar) { }

  ngOnInit() {
    this.fetchElements();
  }

  fetchElements() {
    this.service.getAll().subscribe(res => {
      if (!res) { return; }
      console.log(res);
      this.dataSource = new MatTableDataSource(res as any);
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  onDelete(id){
    if(confirm('Are you sure?')){
      this.delete(id);
    }
  }

  delete(id){
    this.service.delete(id).subscribe(()=>{
      this.notification.open('Succes Delete ...');
      this.fetchElements();
    })
  }

  onEdit(row){
    this.service.populateform(row);
    this.rout.navigateByUrl('/add');
  }


}
