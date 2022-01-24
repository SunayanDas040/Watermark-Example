import { Component, OnInit, Output } from '@angular/core';
import { jsPDF } from "jspdf";

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  name: string = "Sugar"
  details: string = ""

  constructor() { }

  ngOnInit(): void {
  }

  print() {

    // console.log(`Product name is : ${this.name}`)
    // console.log(`Product details is : ${this.details}`)
    // const obj = {
    //   nam: this.name,
    //   det: this.details
    // }
    // window.print();

    let doc = new jsPDF({
      orientation: "p",
      unit: "pt",
      format: "a4"
    });

    // let elementHTML = document.querySelector("#contentToPrint")?.innerHTML;

    // let specialElementHandler = {
    //   "#elementH": function(element:any, renderer:any) {
    //     return true;
    //   }
    // }

    doc = this.addWaterMark(doc);
    doc.html(document.body,{
      callback: function(d1) {
        d1.save("a3.pdf");
      }
    });

    // doc.fromHTML(

    // );
    // doc.text(`Product name is : ${this.name} and Product Details is : ${this.details}`, 10, 10);
    // doc.save("a5.pdf");
    
  }

  addWaterMark(doc:any) {
    var totalPages = doc.internal.getNumberOfPages();
  
    for (let i = 1; i <= totalPages; i++) {
      doc.setPage(i);
      //doc.addImage(imgData, 'PNG', 40, 40, 75, 75);
      doc.setTextColor(150);
      // doc.setTextColor(0,0,255);
      doc.text(120, doc.internal.pageSize.height - 100, 'Developed By Blu Cocoon Digital Private Limited');
      // doc.text(120, doc.internal.pageSize.height - 100, 'Developed By Blu Cocoon Digital Private Limited',20, 140, null, 10);
      // doc.text("10 degrees rotated", 20, 140, null, 10);
    }
  
    return doc;
  }

}
