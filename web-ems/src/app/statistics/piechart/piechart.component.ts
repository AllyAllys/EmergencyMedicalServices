import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { PieService } from './piechart.service';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {
  chart: any=[]
  constructor(private chartservice:PieService) {
  Chart.register(...registerables)
}

ngOnInit() {
  this.chartservice.Incidents()
  .subscribe(res=>{
    console.log(res);

    let Gender = res.map(res=>res.Userclass)

   console.log(Gender)







      this.chart = new Chart('canvas',{
        type:'pie',
        data:{

          datasets:[
           {
              label:'Gender',
              data:Gender.values,
              backgroundColor:'blue',

              borderColor: 'red',


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
function Userclass(Userclass: any) {
  throw new Error('Function not implemented.');
}

