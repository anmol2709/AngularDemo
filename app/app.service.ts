import {Injectable} from '@angular/core'
import {Intern} from "./intern";
@Injectable()
export class AppService{
  interns:Intern[]=[{
    name:'Anmol',
    id:1
  },
    {
      name:'Pankhurie',
      id:2
    },
    {
      name:'Shubhra',
      id:3
    }
  ];

}
