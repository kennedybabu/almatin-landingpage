import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/core/shared/dialog/dialog/dialog.component';



const data = [
  {
      "id": 1,
      "name": "MR. ALEX KAMAI MADADI",
      "bio": "Alex holds a Master of Arts Degree in Gender and Development Studies (Kenyatta University) and a second Master of Arts Degree in Project Planning and Management from The University of Nairobi. He also holds a Bachelor's Degree in Education (Geography) and has undertaken various courses in strategic development and business management.  He is a strategic project management professional with over 8 years’ experience in stakeholder management, project planning and KPI delivery by maintaining an in-depth understanding of business drivers and project reporting standards. He possesses knowledge and understanding of donor/client requirements that are used as a basis to oversee and manage projects. Alex has amassed extensive experience in project management with a focus on the entire project life cycle starting with planning, implementation and reporting. He has worked for International organizations, including Education for Life and The United Nations where he has handled projects related to Health, HR, Procurement, Grants among others.",
      "role": "DIRECTOR",
      "avatar": "assets/images/alex.png"
  },
  {
      "id": 2,
      "name": "MRS. JOYCE KEMUNTO",
      "bio": "Joyce Kemunto has vast experience in administration,  business planning and management, and customer relations. She holds a Diploma in Business Administration and a certificate in secretarial studies. Joyce has a career stemming from the Ministry of Mining (Migori Office) and has worked with several other agencies and businesses in Nairobi where she has gained experience in customer service, sales and business strategic development and growth. With over  7 years experience in customer service and sales, Joyce drives business development for Almatin and is at the heart of business acquisition alongside other senior and junior staff.",
      "role": "DIRECTOR",
      "avatar": "assets/images/joyce.png"
  },
  {
      "id": 3,
      "name": "MR. JOLLIFF OCHIENG",
      "bio": "Mr. Jolliff Ochieng holds a Bachelor’s Degree in Economics from Egerton University and is a local and international capital mobilization methodologies expert with long term hands-on experience on training, business development skills coaching and mentorship. Jolliff is also skilled in advanced project cycle management with ability to adopt participatory approaches in designing, implementing, monitoring and evaluating development projects. Jolliff has distinguished himself as a project monitoring and evaluation expert with ability to develop and utilize intervention results frameworks, create and deploy digital data collection forms on KoBoToolbox and Google as well as visualize, analyze and manage the generated data/information using Power BI.",
      "role": "BUSINESS DEVELOPMENT LEAD",
      "avatar": "assets/images/jolliff.png"
  },
  {
      "id": 4,
      "name": "MR. BRIAN OTIENO OFWA",
      "bio": "Brian Holds a Bachelor’s Degree in Finance and Accounting and a Diploma in Economics. He has 10 years of experience in the fields of finance and Internal Audit in multinational organizations including the United Nations. He possesses core competencies in financial reporting, planning, modeling and forecasting, budgeting, strategic planning and analysis, tax compliance and optimization, internal control monitoring and system development, risk management, audit planning, execution and reporting.",
      "role": "FINANCE OFFICER",
       "avatar": "assets/images/brian.png"
  },
  {
      "id": 5,
      "name": "MR. IBRAHIM MATIN",
      "bio": "Mr. Matin holds a Master of Arts Degree in Education from Rongo University and has amassed extensive experience in training and social capital development accumulated over a period extending beyond 15 years. He has been extensively involved in developing organizational training strategy, training manuals, development of training curricular and execution of training events for all cadres of participants. Matin has attended and obtained various certifications related to human resource development and mentorship. He is a strategic think tank with vast knowledge in human resource development.",
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
