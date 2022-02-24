import { Component, OnInit } from '@angular/core';
import { ChartService } from './statistics.service';
import {
  Chart,registerables
} from 'chart.js';
@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})

export class StatisticsComponent implements OnInit {


chart: any=[]
  constructor(private chartservice:ChartService) {
    Chart.register(...registerables)
  }

  ngOnInit() {
    this.chartservice.MissingpersonChart()
    .subscribe(res=>{
      console.log(res);

      let Gender = res.map(res=>res.Gender)
      let DateTime = res.map(res=>res.DateTime)
      let Height= res.map(res=>res.Height)





      let weatherDates = []
        DateTime.forEach((res) =>{
          let jsdate =  new Date(res)
          weatherDates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric'}))
          console.log(jsdate)
          console.log(res)
        })


        let Gen=[]
        let malecount=0;
        let femalecount=0;
        let othercount=0;
        Gender.forEach((res)=>{
          if (res.includes("Male")){
            malecount=malecount+1;

          }
          if (res.includes("Female")){
            femalecount=femalecount+1;

          }
          if (res.includes("Other")){
            othercount=othercount+1;

          }
        })
        Gen.push(malecount)
        Gen.push(femalecount)
        Gen.push(othercount)


      let Heightdate= []
      Height.forEach((res)=>{
       let heightemp= res;
       let he = heightemp;
       if (heightemp.includes("cm")){
       he= heightemp.replace("cm"," ")

       Heightdate.push(he)
       console.log("yes")
       }
       console.log(Heightdate)

     })


        this.chart = new Chart('canvas',{
          type:'bar',
          data:{
            labels: DateTime,
            datasets:[
              {
                label:'DateTime',
                data:Gen,
                backgroundColor:'red',
                borderColor: 'blue',


              },{
                label:'Gender',
                data:Heightdate,
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

        console.log(weatherDates)
      console.log(Gender)
      console.log(DateTime)
    })
  }

}
