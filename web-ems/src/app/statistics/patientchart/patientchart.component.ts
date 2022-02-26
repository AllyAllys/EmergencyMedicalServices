import { Component, OnInit } from '@angular/core';
import {
  Chart,registerables
} from 'chart.js';
import { PatientVictimChartService } from './patientchart.service';
@Component({
  selector: 'app-patientchart',
  templateUrl: './patientchart.component.html',
  styleUrls: ['./patientchart.component.css']
})
export class PatientchartComponent implements OnInit {

  chart: any=[]
  constructor(private patientservice:PatientVictimChartService) {
    Chart.register(...registerables)
  }

  ngOnInit(): void {

    this.patientservice.victimChart()
    .subscribe(res=>{
      console.log(res);


      let DateTime = res.map(res=>res.ModifiedDate)


      let weatherDates = []
        DateTime.forEach((res) =>{
          let jsdate =  new Date(res)

          weatherDates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short'}))

        })
        console.log(weatherDates)

//----------------------------------------Gets the Month from function weatherDate-------------------------------
        let year=[];
        let yearcount=0;
        let year2=[];
        let yearcount2=0;
        let year3=[];
        let yearcount3=0;
        let Jan=[];
        let Feb=[];
        let Mar=[];
        let Apr=[];
        let May=[];
        let Jun=[];
        let Jul=[];
        let Aug=[];
        let Sep=[];
        let Oct=[];
        let Nov=[];
        let Dec=[];
        let Nov2=[];
        let Dec2=[];
        let January=0;
        let February=0;
        let March=0;
        let April=0;
        let Maycount=0;
        let June=0;
        let July=0;
        let August=0;
        let September=0;
        let October=0;
        let November=0;
        let December=0;
        let November2=0;
        let December2=0;
        weatherDates.forEach((res)=>{
          if (res.includes("Jan")){
            January=January + 1;  //Determines Number of reports submited in January from the backend ( converts string to numbers to plot)

          }
          if (res.includes("Feb")){
            February=February + 1;   //Determines the number of reports submited in January from the backend

          }
          if (res.includes("Mar")){
            March=March + 1;   //Determines the number of reports submited in January from the backend

          }
          if (res.includes("Apr")){
            April=April + 1;   //Determines the number of reports submited in January from the backend

          }
          if (res.includes("May")){
            Maycount=Maycount + 1;   //Determines the number of reports submited in January from the backend

          }
          if (res.includes("Jun")){
            June=June + 1;   //Determines the number of reports submited in January from the backend

          }
          if (res.includes("Jul")){
            July=July + 1;   //Determines the number of reports submited in January from the backend

          }
          if (res.includes("Aug")){
            August=August + 1;   //Determines the number of reports submited in January from the backend

          }
          if (res.includes("Sep")){
            September=September+ 1;   //Determines the number of reports submited in January from the backend

          }
          if (res.includes("Oct")){
            October=October + 1;   //Determines the number of reports submited in January from the backend

          }
          if (res.includes("Nov 2021")){
            November=November + 1;   //Determines the number of reports submited in Nov from the backend

          }

          if (res.includes("Dec 2021")){
            December= December + 1;   //Determines the number of reports submited in Dec from the backend

          }

          if (res.includes("Nov 2022")){
            November2=November2 + 1;   //Determines the number of reports submited in Nov from the backend

          }

          if (res.includes("Dec 2022")){
            December2= December2 + 1;   //Determines the number of reports submited in Dec from the backend

          }
         // if (res.includes("2021")){
         //   yearcount= yearcount;   //Determines the number of reports submited in January from the backend

          //}


        })
        Jan.push(January);
        Feb.push(February);
        Mar.push(March);
        Apr.push(April);
        May.push(Maycount);
        Jun.push(June);
        Jul.push(July);
        Aug.push(August);
        Sep.push(September);
        Oct.push(October);
        Nov.push(November);
        Dec.push(December);
        Nov2.push(November2);
        Dec2.push(December2)
        //year.push(yearcount,November);
        //year2.push(yearcount2,December);

        console.log(Feb)

//-----------------------------------------------------------------------------------------------------------------

//Testing cases to count number of Males and Females each.
//Testing cases to remove a string from a number to plot the number only.


        this.chart = new Chart('canvas',{

          type:'bar',
          data:{
            labels:['January 2022','February 2022','March 2022','April 2022','May 2022','June 2022','July 2022','August 2022','September 2022','October 2022','November 2022','December 2022' ],

            datasets:[

              {
                label:"Number of Patients",

                data:[Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov2,Dec2],
                backgroundColor:'rgb(159, 24, 172)',
                //fill:false,
                borderColor:'rgb(0, 99, 132)',
              },
            ]

          },
          options: {
            plugins: {


              legend: {
                  labels: {
                      // This more specific font property overrides the global property
                      color:'black',
                      font: {
                        family: 'Times',
                        size: 22,
                        style: 'normal',
                        weight: 'bold',
                        lineHeight: 1.2

                      }
                  },


              }


          },
            scales: {

              xAxes: {
                ticks:{

                  color: 'black',
                  font: {

                    size: 12,
                    style: 'normal',
                    weight: 'bold',
                    lineHeight: 1.2
                  },

                },

                title:{
                  display:true,
                  text:'Months',
                  color:'black',
                  font: {
                    family: 'Times',
                    size: 20,
                    style: 'normal',
                    weight: 'bold',
                    lineHeight: 1.2
                  },



                }

               // beginAtZero:true


              },
              yAxes: {
                ticks:{

                  color: 'black',
                  font: {
                    size: 14,
                    style: 'normal',
                    weight: 'bold',
                    lineHeight: 1.2
                  },

                },
                display: true,
                title:{
                  display:true,
                  text:"Number of Patients ",
                  color:"black",
                  font:{
                    family: 'Times',
                    size: 20,
                    style: 'normal',
                    weight: 'bold',
                    lineHeight: 1.2
                  },
                }
                //beginAtZero:true
              }
        }
      }

        })


    })
  }
}
