import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/users';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
    public users: User[] | undefined;
    private usersRoute = 'http://localhost:3000/users';
  
    constructor(private http: HttpClient) { }
  
    getUsers() {
      this.http.get<User[]>(this.usersRoute).subscribe(users => {
        this.users = users;
        console.log('Users', this.users);
      });
    }
    ngOnInit(): void {
      this.getUsers();
  }

  }

