import { Component, OnInit } from '@angular/core';
import { ChartService } from './statistics.service';
import {
  Chart,registerables
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})

export class StatisticsComponent implements OnInit {


chart: any=[]
  constructor(private chartservice:ChartService) {
    Chart.register(...registerables)
    Chart.register(ChartDataLabels);

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

          weatherDates.push(jsdate.toLocaleTimeString('en', {  month: 'short'}))

        })
        console.log(weatherDates)

//----------------------------------------Gets the Month from function weatherDate-------------------------------
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
        weatherDates.forEach((res)=>{
          if (res.includes("Jan")){
            January=January + 1;  //Determines Number of reports submitted in January from the backend ( converts string to numbers to plot)

          }
          if (res.includes("Feb")){
            February=February + 1;   //Determines the number of reports submitting in January from the backend

          }
          if (res.includes("Mar")){
            March=March + 1;   //Determines the number of reports submitting in January from the backend

          }
          if (res.includes("Apr")){
            April=April + 1;   //Determines the number of reports submitting in January from the backend

          }
          if (res.includes("May")){
            Maycount=Maycount + 1;   //Determines the number of reports submitting in January from the backend

          }
          if (res.includes("Jun")){
            June=June + 1;   //Determines the number of reports submitting in January from the backend

          }
          if (res.includes("Jul")){
            July=July + 1;   //Determines the number of reports submitting in January from the backend

          }
          if (res.includes("Aug")){
            August=August + 1;   //Determines the number of reports submitting in January from the backend

          }
          if (res.includes("Sep")){
            September=September+ 1;   //Determines the number of reports submitting in January from the backend

          }
          if (res.includes("Oct")){
            October=October + 1;   //Determines the number of reports submitting in January from the backend

          }
          if (res.includes("Nov")){
            November=November + 1;   //Determines the number of reports submitting in January from the backend

          }
          if (res.includes("Dec")){
            December= December + 1;   //Determines the number of reports submitting in January from the backend

          }

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

        console.log(Feb)

//-----------------------------------------------------------------------------------------------------------------

//Testing cases to count number of Males and Females each.

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



        let counter=[]
        let Femalecounter=0;
        Gender.forEach((res)=>{
          if(res.includes("Female")){
            Femalecounter=Femalecounter+1

          }
          counter.push(Femalecounter,malecount)

        })


//Testing cases to remove a string from a number to plot the number only.
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
            labels:['January 2022','February 2022','March 2022','April 2022','May 2022','June 2022','July 2022','August 2022','September 2022','October 2022','November 2022','December 2022' ],

            datasets:[

              {
                datalabels: {
                  color: 'black',
                  backgroundColor: '#ccc',
                  borderRadius: 1,

                  font: {
                    size: 14,
                    weight:'bold'
                  }
                },

                label:"Number of Persons",

                data:[Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec],
                backgroundColor:'rgb(0, 96, 160)',
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
                        size: 20,
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
                  text:"Number of Missing Persons",
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
