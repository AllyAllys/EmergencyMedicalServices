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


        let Male=[]
        let Female=[]
        let Other=[]
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
        Male.push(malecount)
        Female.push(femalecount)
        Other.push(othercount)
        console.log(Male)


      let Heightdate= []
      Height.forEach((res)=>{
       let heightemp= res;
       let he = heightemp;
       if (heightemp.includes("cm")){
       he= heightemp.replace("cm"," ")

       Heightdate.push(he)
       }

     })

        this.chart = new Chart('canvas',{

          type:'bar',
          data:{
            labels:['January','Feburary','March','April','May','June','July','August','September','October','November','December'],

            datasets:[
              {
                label:"Time",
                data:[Male,Female],
                backgroundColor: [
                  'rgb(105, 97, 216)',
                  'rgb(54, 44, 73)',
                  ,

                ],


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
