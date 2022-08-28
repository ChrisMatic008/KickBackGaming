// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// // export class CrudService {
//   url: string;

//   constructor(private httpClient: HttpClient) {
//     this.url = "http://localhost:3000/users";
//   }
//   public getPosts() {
//     let endPoints = ""
//     this.httpClient.get(this.url + endPoints).subscribe(data => {
//       console.log(data);
//     });
//   }
//   public getPostById() {
//     let id: number = 1;
//     let endPoints = "/posts/" + id;
//     this.httpClient.get(this.url + endPoints).subscribe(data => {
//       console.log(data);
//     });
//   }
//   public addPost(postData: Object) {
//     let endPoints = "/posts"
//     this.httpClient.post(this.url + endPoints, postData).subscribe(data => {
//       console.log(data);
//     });
//   }
//   public updatePost(postData: Object) {
//     let endPoints = "/posts/1"
//     this.httpClient.put(this.url + endPoints, postData).subscribe(data => {
//       console.log(data);
//     });
//   }
//   public deletePost() {
//     let endPoints = "/posts/1"
//     this.httpClient.delete(this.url + endPoints).subscribe(data => {
//       console.log(data);
//     });
//   }
// }

