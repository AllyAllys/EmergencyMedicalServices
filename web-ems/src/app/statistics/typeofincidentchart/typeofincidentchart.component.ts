import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { IncidentChartService } from '../incidentchart/incidentchart.service';
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-typeofincidentchart',
  templateUrl: './typeofincidentchart.component.html',
  styleUrls: ['./typeofincidentchart.component.css']
})
export class TypeofincidentchartComponent implements OnInit {
  public chartPlugins = [ChartDataLabels];

  chart: any=[]
  constructor(private incident:IncidentChartService) {
  Chart.register(...registerables)
  Chart.register(ChartDataLabels);

}

ngOnInit() {
  this.incident. Incidentchart()
  .subscribe(res=>{
    console.log(res);

    let Gender = res.map(res=>res.Subject)

   console.log(Gender)


  let other=[];
  let volcano=[];
   let Hurricane=[]
   let Hurricanecount=0;
   let Earthquake=[]
   let Earthquakecount=0;
   let Explosion=[]
   let Explosioncount=0;
   let Fire=[]
   let Firecount=0;
   let Flood=[];
   let Landslides=[]
   let PowerOutage=[]
   let Tsuanmi=[]
   let TropicalStorm=[]
   let drought=[]
   let chemical=[]
   let Tornado=[]
   let Floodcount=0;
   let Landslidescount=0;
   let PowerOutagecount=0;
   let Tsuanmicount=0;
   let TropicalStormcount=0
   let volcanocount=0;
   let othercount=0;
   let droughtcount=0;
   let chemicalcount=0;
   let Tornadocount=0;

   Gender.forEach((res)=>{
     if (res.includes("Hurricane")){
       Hurricanecount = Hurricanecount+1;

     }
     if(res.includes("Earthquake")){
      Earthquakecount= Earthquakecount+1;
     }
     if (res.includes("Explosion")){
      Explosioncount = Explosioncount+1;

    }
    if(res.includes("Fire")){
      Firecount= Firecount+1;
    }
    if (res.includes("Flood")){
      Floodcount = Floodcount+1;

    }
    if(res.includes("Landslides")){
      Landslidescount= Landslidescount+1;
    }
    if (res.includes("Power Outage")){
      PowerOutagecount = PowerOutagecount+1;

   }
   if(res.includes("Tsuanmi")){
    Tsuanmicount= Tsuanmicount+1;
   }
   if(res.includes("Tropical Storm")){
    TropicalStormcount= TropicalStormcount+1;
  }
  if(res.includes("Volcanic Eruption")){
    volcanocount= volcanocount+1;
  }
  if(res.includes("Other")){
    othercount= othercount+1;
  }
  if(res.includes("Drought")){
    droughtcount= droughtcount+1;
  }
  if(res.includes("Drought")){
    chemicalcount= chemicalcount+1;
  }
  if(res.includes("Tornado")){
    Tornadocount= Tornadocount+1;
  }

    })

   Hurricane.push(Hurricanecount);
   Earthquake.push(Earthquakecount);
   Explosion.push(Explosioncount);
   TropicalStorm.push(TropicalStormcount);
   Fire.push(Firecount);
   Flood.push(Floodcount);
   Landslides.push(Landslidescount);
   PowerOutage.push(PowerOutagecount);
   Tsuanmi.push(Tsuanmicount);
   volcano.push(volcanocount);
   other.push(othercount)
   drought.push(droughtcount);
   chemical.push(chemicalcount);
   Tornado.push(Tornadocount);



      this.chart = new Chart('canvas',{
        type:'pie',

        data:{
          labels:["Hurricane","Earthquake"," Explosion","Tropical Storm","Fire","Flood","Landslides","Power Outage","Tsuanmi","Volcanic Eruption","Other","Drought","Chemcial Emergencies","Tornado"],

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
              data:[Hurricane,Earthquake,Explosion,TropicalStorm,Fire,Flood,Landslides,PowerOutage,Tsuanmi,volcano,other,drought,chemical,Tornado],
              backgroundColor: [
                'rgb(105, 97, 216)',
                'rgb(54, 44, 73)',
                'rgb(230, 255, 4)',
                'rgb(33, 81, 172) ',
                'darkgreen',
                'rgb(144, 6, 6)',
                'rgb(135, 221, 36)',
                'rgb(103, 178, 225)',
                'rgb(87, 22, 93) ',
                'red',
                'aqua',
                'black',
                'rgb(231, 119, 100)',
               'rgb(200, 19, 176)'


              ],
              hoverOffset: 4


            },
          ]
        },
        options: {
          plugins:{

            legend:{
              labels:{
                color:'black',
                font: {
                  family: 'Times',
                  size: 17,
                  style: 'normal',
                  weight: 'bold',
                  lineHeight: 1.2
                }


              }

            },

          },


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
