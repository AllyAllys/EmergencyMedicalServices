import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { PieService } from './piechart.service';
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {
  chart: any=[]
  constructor(private chartservice:PieService) {
  Chart.register(...registerables)
  Chart.register(ChartDataLabels);

}

ngOnInit() {
  this.chartservice.Incidents()
  .subscribe(res=>{
    console.log(res);

    let Gender = res.map(res=>res.Userclass)

   console.log(Gender)





   let Pub=[]
   let Publicount=0;
   let Admin=[]
   let Admincount=0;
   let Law=[]
   let Lawcount=0;
   let Ems=[]
   let Emscount=0;
   let disaster=[];
   let first=[]
   let emer=[]
   let vol=[]
   let health=[]
   let disastercount=0;
   let firstcount=0;
   let emercount=0;
   let volcount=0;
   let healthcount=0

   Gender.forEach((res)=>{
     if (res.includes("Public")){
       Publicount = Publicount+1;

     }
     if(res.includes("Adminstrator")){
       Admincount= Admincount+1;
     }
     if (res.includes("Law Enforcement")){
      Lawcount = Lawcount+1;

    }
    if(res.includes("EMS Dispatcher")){
      Emscount= Emscount+1;
    }
    if (res.includes("First Responder")){
      firstcount = firstcount+1;

    }
    if(res.includes("Volunteer")){
      volcount= volcount+1;
    }
    if (res.includes("Emergency Responder")){
     emercount = emercount+1;

   }
   if(res.includes("Health staff")){
     healthcount= healthcount+1;
   }
   if(res.includes("Disaster Manager")){
    disastercount= disastercount+1;
  }

    })

   Pub.push(Publicount);
   Admin.push(Admincount);
   Law.push(Lawcount);
   health.push(healthcount);
   Ems.push(Emscount);
   disaster.push(disastercount);
   first.push(firstcount);
   emer.push(emercount);
   vol.push(volcount);
   console.log(Pub)


      this.chart = new Chart('canvas',{
        type:'pie',
        data:{
          labels:["Public","Admin","Law Enforcement","Health staff","EMS Dispatcher","Disaster Manager","First Responder","Emergency Responder","Volunteer"],

          datasets:[
           {
            datalabels: {
              color: 'black',
              backgroundColor: '#ccc',
              borderRadius: 4,

              font: {
                size: 18,
                weight:'bold'
              }
            },
              label:'Public',
              data:[Pub,Admin,Law,health,Ems,disaster,first,emer,vol],
              backgroundColor: [
                'rgb(105, 97, 216)',
                'rgb(54, 44, 73)',
                'rgb(230, 255, 4)',
                'rgb(33, 81, 172) ',
                'rgb(213, 128, 54)',
                'rgb(144, 6, 6)',
                'rgb(135, 221, 36)',
                'rgb(103, 178, 225)',
                'rgb(87, 22, 93) '
              ],
              hoverOffset: 4


            },
          ]
        },
        options: {


          scales: {
            xAxes: {
              display: true
            },
            yAxes: {
              display: true
            }
      }
    }

      })


  })
}
}


