
import { UserService } from 'src/app/services/user.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

import {AfterViewInit, Component, ViewChild,OnInit} from '@angular/core';



export interface User {
  
  id: number;
  first_name: string;
  last_name: string;
  email: string;
}
 
// const ELEMENT_DATA: User[] = [];



@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  listUsers : any= [];
  pageSize : number;

  displayedColumns: string[] = ['id', 'first_name', 'last_name', 'email', 'actions'];
  dataSource: MatTableDataSource<User>;



  constructor( private userService: UserService,) { 
    this.dataSource = new MatTableDataSource<User>(this.listUsers.data);
    this.userService.getlistUsers().subscribe(data =>{
    this.listUsers= data;
    this.dataSource.data = this.listUsers.data;
    console.log(this.listUsers.data);
    this.paginator.length= this.dataSource.data.length;

  });
  }
  

   applyFilter(event: Event) { 
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  
  ngOnInit(): void {
    // this.paginator.pageSize = 10;
    
    //this.dataSource.paginator = this.paginator;
    //this.dataSource.sort = this.sort;
    this.pageSize = 10;
  }

  ngAfterViewInit(): void{
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }





} 
