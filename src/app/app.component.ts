import { Component } from '@angular/core';
import axios, { AxiosPromise } from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'user-data';

  name="";
  username="";
  email="";
  type="";
  city="";

  users:any = [];

  //Edit form
  editform : any = {};

  ngOnInit(){
    this.getUsers();
  }

  

  submit(){
    
     //Make post request to the API
    //  axios.post('https://jsonplaceholder.typicode.com/users', {
      
    //   name : this.name,
    //   username : this.username,
    //   emails: this.email,
    //   type: this.type,
    //   color: this.color
    // })
    // .then( (response) => {
    //   console.log(response);
    //   this.users.push(response.data)
    // })
    // .catch(function (error) {
    //   console.log(error);
    // })

   (async () => {
      try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/users',{
          name : this.name,
            username : this.username,
            email: this.email,
            type: this.type,
            city: this.city
        });
        console.log(response);
        this.users.push(response.data);
      }catch (error) {
        console.error(error);
      }
    })()


     // Get the new user from the response
    // this.users.push(response.data)

     //Push it to the users
    //  this.users.push(user);
    //  console.log(user)
  }

  openEditDialogue(user:any){
    console.log(user)
    //this.editform = Object.assign(user);
    this.editform = {...user};
  };

  saveNewEdit(user:any){
      this.users.forEach(user)
      if(this.editform.name == this.users.name){
      this.users.replace(user)}
      else{
        alert("Data duplication");
      }
    }

    getUsers =  async  () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        console.log(response);
        this.users = response.data;
      } catch (error) {
        console.error(error);
      }
    }
    
  
  }

