import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/core/shared/dialog/dialog/dialog.component';



const data = [
  {
      "id": 1,
      "name": "MR. ALEX KAMAI MADADI",
      "bio": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore animi culpa facere iusto qui facilis harum tempore eius! Necessitatibus, natus.",
      "role": "DIRECTOR",
      "avatar": "assets/images/alex.png"
  },
  {
      "id": 2,
      "name": "MRS. JOYCE KEMUNTO",
      "bio": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore animi culpa facere iusto qui facilis harum tempore eius! Necessitatibus, natus.",
      "role": "DIRECTOR",
      "avatar": "assets/images/joyce.png"
  },
  {
      "id": 3,
      "name": "MR. JOLLIFF OCHIENG",
      "bio": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore animi culpa facere iusto qui facilis harum tempore eius! Necessitatibus, natus.",
      "role": "BUSINESS DEVELOPMENT LEAD",
      "avatar": "assets/images/jolliff.png"
  },
  {
      "id": 4,
      "name": "MR. BRIAN OTIENO OFWA",
      "bio": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore animi culpa facere iusto qui facilis harum tempore eius! Necessitatibus, natus.",
      "role": "FINANCE OFFICER",
       "avatar": "assets/images/brian.png"
  },
  {
      "id": 5,
      "name": "MR. IBRAHIM MATIN",
      "bio": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore animi culpa facere iusto qui facilis harum tempore eius! Necessitatibus, natus.",
      "role": "EDUCATION AND TRAINING LEAD",
      "avatar": "assets/images/matin.png"
  }
]

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})

export class TeamComponent {


    dialog = inject(MatDialog);
    data: any = data;
  
    openDialog(user: any) {
      this.dialog.open( DialogComponent, {
        data: user
      })
    }

}
