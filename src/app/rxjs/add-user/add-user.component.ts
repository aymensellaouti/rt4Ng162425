import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { APP_ROUTES } from 'src/app/config/app-routes.config';
import { ApiService, User } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  apiService = inject(ApiService);
  router = inject(Router);
  addUser(newUser: Partial<User>) {
   this.apiService.addUser(newUser).subscribe({
    next: (newCv) => {
      //alert(`User ${newCv.email} added successfully`);
      this.router.navigate([APP_ROUTES.listUser]);
    },
    error: (error) => {
      alert('il y a un problème');
      console.log({error});

    }
   })
  }

}
