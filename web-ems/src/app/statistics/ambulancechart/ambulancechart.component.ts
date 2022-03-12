import { Component, OnInit } from '@angular/core';
import {
  Chart,registerables
} from 'chart.js';

import ChartDataLabels from 'chartjs-plugin-datalabels';
import { PatientVictimChartService } from '../patientchart/patientchart.service';
@Component({
  selector: 'app-ambulancechart',
  templateUrl: './ambulancechart.component.html',
  styleUrls: ['./ambulancechart.component.css']
})
export class AmbulancechartComponent implements OnInit {


  chart: any=[]
  constructor(private triageservice:PatientVictimChartService) {
    Chart.register(...registerables)
    Chart.register(ChartDataLabels);
  }

  ngOnInit(): void {

    this.triageservice.victimChart()
    .subscribe(res=>{
      console.log(res);


      let DateTime = res.map(res=>res.ModifiedDate);
      let Tri= res.map(res=>res.Ambulance)

      console.log(Tri)


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

//Testing Triage
let immediate=[];
let immediatecount=0;
let urgent=[];
let urgentcount=0;



Tri.forEach((res)=>{

  if(res.includes("Yes")){
    immediatecount= immediatecount+1;


  }
  if(res.includes("No")){
    urgentcount=urgentcount+1;
  }

})
immediate.push(immediatecount);

urgent.push(urgentcount);





//Testing cases to remove a string from a number to plot the number only.


        this.chart = new Chart('canvas',{

          type:'pie',
          data:{
            labels:['Yes','No' ],

            datasets:[

              {
                datalabels: {
                  color: 'black',
                  backgroundColor: '#ccc',
                  borderRadius: 4,

                  font: {
                    size: 14,
                    weight:'bold'
                  }
                },

                label:"Number of Persons who were treated on site or taken to the Hopsital",

                data:[immediate,urgent],

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

                    size: 14,
                    style: 'normal',
                    weight: 'bold',
                    lineHeight: 1.2
                  },

                },

                title:{
                  display:true,
                  //text:'Triage Catergory in Year 2022',
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
                 // text:"Number of Persons Per Triage Catergory",
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
