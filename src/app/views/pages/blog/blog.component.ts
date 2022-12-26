import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor(private http: HttpClient) { }

  private urlPost = 'https://gorest.co.in/public/v2/posts';
  private urlUser = 'https://gorest.co.in/public/v2/users';
  public postsData : any;
  public usersData : any;

  public name : any[] = [];

  getApi () {
    let posts = this.http.get(this.urlPost);
    let users = this.http.get(this.urlUser);
    return forkJoin([posts, users]);
  }

  ngOnInit(){

    this.getApi().subscribe(([posts, users])=>{
      this.postsData = posts;
      this.usersData = users;
      console.log(posts);
      console.log(users);
      console.log(this.name);
    })

  }

  // mergetables () {
  //   this.name = [];
  //   for(const row1 of this.postsData) {
  //     for(const row2 of this.usersData) {
  //       if(row1.user_id === row2.id) {
  //         const mergeRow = {row1.title, row1.body, row2.name};
  //         this.name.push(mergeRow);
  //         break;
  //       }
  //     }
  //   }
  // }

}
