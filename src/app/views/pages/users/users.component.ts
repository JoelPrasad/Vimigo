import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, FormBuilder} from '@angular/forms';
import { UserModel } from './users.model';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  genders = ['Male', 'Female'];
  constructor(private http: HttpClient, private modalService: NgbModal, private AddUser: UsersService) { }

  public usersData : any;
  private header;
  userModel = new UserModel('Name', 'email2@gmail.com', 'male', 'active');

  private url = 'https://gorest.co.in/public/v2/users';

  getUser () {
    return this.http.get(this.url).subscribe(response =>{
      this.usersData = response;
      console.log(this.usersData);
    })
  }

  openModal(content) {
    this.modalService.open(content, {}).result.then((result)=>{
    }).catch((res) => {});
  }

  ngOnInit() {
    this.getUser();
  }

  headerValidation() {
    let header = new HttpHeaders({ 'Authorization': 'Bearer 94eca09edff8313d5c26bf94fc5dc2ba095b295aa5939d0baac82586ff4c0d9f' });
    this.header = header;
  }

  onDeleteUser (id: string) {
    this.headerValidation();
    this.http.delete('https://gorest.co.in/public/v2/users/' + id, {headers:this.header})
    .subscribe();
    this.getUser();
  }

  onSubmit() {
    this.AddUser.addUser(this.userModel)
    .subscribe(
      data => console.log('Success!', data),
      error => console.log('Error! ', error)
    )
    this.getUser();
  }

}
