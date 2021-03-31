import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.page.html',
  styleUrls: ['./experience.page.scss'],
})
export class ExperiencePage implements OnInit {

  constructor() { }
  reference =[{Name:'Nokwanda',sname:'Maranjane',tel:'+2783 555 1652',email:'nokwanda@mlab.co.za',position:'Facilitator'}];
  reference1 =[{Name:'Molokomme M.A',sname:'',tel:'015 505 0439 / 082 784 6889',email:'',position:'Principal and WIL Montor'}];
  position= [{post:"HTML5"},{post:"CSS"},{post:"PHP"},{post:"SQL server"},
  {post:"VB.NET"},{post:"JAVA"},{post:"JAVASCRIPT"},
  {post:"Angular"},{post:"Ionic"}
];
language= [{langu:"Create New Webpage | Application [Ionic | Angular ]"},
{langu:"Connect Firebase Database With Firebase"},
{langu:"Creating Firebase Project [Firebase Authentication | Storage]"},
{langu:"Firebase Hosting [ PWA ]"}
]
  ngOnInit() {
  }

}
