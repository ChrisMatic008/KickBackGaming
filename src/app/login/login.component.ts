import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms'
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm !: FormGroup
  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router : Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:[''],
      password: ['']
    })
  }
  // Login function define
  login(){
    this.http.get<any>("http://localhost:3000/users").subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      })
      if(user){
        alert("Login successful");
        this.loginForm.reset();
        this.router.navigate(['/userdashboard'])
      }else{
        alert("user not found");
      }
    },(err: any)=>{
      alert("Something went wrong")
    })

    // .subscribe({
    //   next: (res: any[])=>{
    //     const user = res.find((a:any)=>{
    //       return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password;
    //     });
    //     if(user){
    //       alert("Login successful");
    //       this.loginForm.reset();
    //       this.router.navigate(['/home'])
    //     }else{
    //       alert("user not found");
    //     }
    //   },

    //   error: (e) => {
    //     alert("Something went wrong")
    //   },
    // })
  }
}
