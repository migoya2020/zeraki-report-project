import { Component, OnInit } from '@angular/core';
import *  as myGlobals from  '../../globals'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
public subject_results: any[] = [
    {
      "rank_out_of": 49,
      "subject_name": "English",
      "deviation": 19.0,
      "grade": "B-",
      "comment": "Satisfactory, aim higher",
      "rank": 27,
      "score": 62.0
    },
    {
      "rank_out_of": 49,
      "subject_name": "Kiswahili",
      "deviation": -1.0,
      "grade": "D-",
      "comment": "Chini ya wastani",
      "rank": 48,
      "score": 32.0
    },
    {
      "rank_out_of": 49,
      "subject_name": "Mathematics",
      "deviation": 7.0,
      "grade": "B+",
      "comment": "Good work but aim higher",
      "rank": 15,
      "score": 73.0
    },
    {
      "rank_out_of": 49,
      "subject_name": "Biology",
      "deviation": -1.0,
      "grade": "C+",
      "comment": "Can do better, aim higher",
      "rank": 28,
      "score": 58.0
    },
    {
      "rank_out_of": 49,
      "subject_name": "Physics",
      "deviation": -39.0,
      "grade": "D-",
      "comment": "Weak but has potential",
      "rank": 49,
      "score": 31.0
    },
    {
      "rank_out_of": 49,
      "subject_name": "Chemistry",
      "deviation": 11.0,
      "grade": "B",
      "comment": "Good, can do better",
      "rank": 19,
      "score": 67.0
    },
    {
      "rank_out_of": 49,
      "subject_name": "History",
      "deviation": 13.0,
      "grade": "A",
      "comment": "Excellent work",
      "rank": 14,
      "score": 81.0
    },
    {
      "rank_out_of": 49,
      "subject_name": "Geography",
      "deviation": 37.0,
      "grade": "A",
      "comment": "Excellent work",
      "rank": 7,
      "score": 83.0
    },
    {
      "rank_out_of": 49,
      "subject_name": "C.R.E.",
      "deviation": -32.0,
      "grade": "D+",
      "comment": "Put more effort",
      "rank": 39,
      "score": 41.0
    },
    {
      "rank_out_of": 49,
      "subject_name": "Computer Studies",
      "deviation": 46.0,
      "grade": "A",
      "comment": "Excellent work",
      "rank": 8,
      "score": 83.0
    },
    {
      "rank_out_of": 8,
      "subject_name": "Business Studies",
      "deviation": -33.0,
      "grade": "D",
      "comment": "Put more effort",
      "rank": 8,
      "score": 39.0
    }
  ]

  constructor() { }

  ngOnInit(): void {
this.createTable();

  }

    createTable(){
    var table = myGlobals.GlobalVariable.TABLE;
    var thead = myGlobals.GlobalVariable.THEAD;
    var tbody = myGlobals.GlobalVariable.TBODY;
    var bodytr = myGlobals.GlobalVariable.BODYtr;
    var tdata1 = myGlobals.GlobalVariable.TD1;
    var tdata2 = myGlobals.GlobalVariable.TD2;
    var tdata3 = myGlobals.GlobalVariable.TD3;
    var tdata4 = myGlobals.GlobalVariable.TD4;
    var tdata5 = myGlobals.GlobalVariable.TD5;
    var tdata6 = myGlobals.GlobalVariable.TD6;
    var tdata7 = myGlobals.GlobalVariable.TD7;
    var bodyth = myGlobals.GlobalVariable.BODYth;
    var headtr = myGlobals.GlobalVariable.TR;
    var heding1 = myGlobals.GlobalVariable.THhead1;
    var heding2 = myGlobals.GlobalVariable.THhead2;
    var heding3 = myGlobals.GlobalVariable.THhead3;
    var heding4 = myGlobals.GlobalVariable.THhead4;
    var heding5 = myGlobals.GlobalVariable.THhead5;
    var heding6 = myGlobals.GlobalVariable.THhead6;
    var heding7 = myGlobals.GlobalVariable.THhead7;
    var heding8 = myGlobals.GlobalVariable.THhead8;
    heding1.appendChild(myGlobals.GlobalVariable.TH0);
    heding2.appendChild(myGlobals.GlobalVariable.TH1);
    heding3.appendChild(myGlobals.GlobalVariable.TH2);
    heding4.appendChild(myGlobals.GlobalVariable.TH3);
    heding5.appendChild(myGlobals.GlobalVariable.TH4);
    heding6.appendChild(myGlobals.GlobalVariable.TH5);
    heding7.appendChild(myGlobals.GlobalVariable.TH6);
    heding8.appendChild(myGlobals.GlobalVariable.TH7);

    var theaders: any[] =[heding1, heding2, heding3, heding4, heding5, heding6, heding7,heding8]
    // create table heading
    theaders.forEach(theader => {
    headtr.appendChild(theader)
      })
    thead.appendChild(headtr)
    console.log( thead)
  //  Populate Data according to the Results Array
     var allBodyData: any[] =[];

    this.subject_results.forEach((result, index) =>{
      var rowData: any[] = [];
      var rank = document.createTextNode(index.toString())
      var data1 = document.createTextNode(result["subject_name"])
      var data2 = document.createTextNode(result["grade"])
      var data3 = document.createTextNode(result["score"])
      var data4 = document.createTextNode(result["rank"])
      var data5 = document.createTextNode(result["rank_out_of"])
      var data6 = document.createTextNode(result["deviation"])
      var data7 = document.createTextNode(result["comment"])
      var c1= bodyth.appendChild(rank)
      var c2 = tdata1.appendChild(data1)
      var c3 = tdata2.appendChild(data2)
      var c4 = tdata3.appendChild(data3)
      var c5 = tdata4.appendChild(data4)
      var c6 = tdata5.appendChild(data5)
      var c7 = tdata6.appendChild(data6)
      var c8 = tdata7.appendChild(data7)


bodytr.appendChild( c1)
bodytr.appendChild( c2)
bodytr.appendChild( c3)
bodytr.appendChild( c4)
bodytr.appendChild( c5)
bodytr.appendChild( c6)
bodytr.appendChild( c7)
bodytr.appendChild( c8)

 console.log(bodytr.appendChild( c2))


      });
//     allBodyData.push(bodytr)

}


}

