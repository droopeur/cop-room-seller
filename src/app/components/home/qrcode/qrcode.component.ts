import { Component, OnInit } from '@angular/core';
import * as html2canvas from 'html2canvas';
import * as jsPDF from 'jsPDF'
import {ActivatedRoute} from "@angular/router";
import {Base64} from "../../../services/base64";
@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.css']
})
export class QrcodeComponent implements OnInit {
  public id;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      console.log('http://localhost:4100/'+this.id)
      let node = document.getElementById("id");
      return this.exportAsPDF(node);
    } else {
      window.location.assign('https://cop-room.com');

    }


  }
  exportAsPDF(node : HTMLElement) {
    node.style.display ='block'

    var data = node;
    const options = {
      windowWidth : 856,
      windowHeight : 842,
      width: 596,
      height : 842,
      // allowTaint: true,
      useCORS: true
    }
    return html2canvas(data, options).then(canvas => {
      node.style.display ='none'

// Few necessary setting options
      var imgWidth = 208;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;
      // document.body.appendChild(canvas);
      const contentDataURL = canvas.toDataURL("image/jpeg", 1.0);
      var pdf = new jsPDF();

      pdf.addImage(contentDataURL, 'JPEG', 0, 0);
      var string = pdf.output('datauristring');
      var iframe = "<iframe width='100%' height='100%' src='" + string + "'></iframe><style>body{margin:0},*{border:none!important;}</style>"
     return document.write(iframe);
      // pdf.output("datauri");
      // window.open("data:application/pdf;base64," + Base64.encode(out));
      // let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
      // var position = 2;
      // pdf.addImage(contentDataURL, 'PNG', 0,  position, imgWidth, imgHeight)
      // pdf.save(fiche['nom']+fiche['prenom']+'_'+fiche['modele']+'.pdf'); // Generated PDF
      // const downloadLink = document.getElementById("testa");
      // console.log(downloadLink)
      // const fileName = 'test.pdf';
      // // const fileName = 'toto.png';
      //
      // downloadLink['href'] = contentDataURL;
      // // downloadLink['download'] = fileName;
      // downloadLink.click();
      // console.log(downloadLink)

    });
  }

  // downloadAsPDF(fiche) {
  //   return setTimeout( () => {
  //     if(fiche['type'] == 'consignement') {
  //       let node = document.getElementById('consignment')
  //       node.style.display = 'inherit';
  //       this.exportAsPDF(node,fiche)
  //
  //
  //     } else if (fiche['type'] == 'cash receipt') {
  //       let node = document.getElementById( 'cash receipt')
  //       node.style.display = 'inherit';
  //       let img = document.getElementById('my_img')
  //       this.exportAsPDF(node,fiche)
  //
  //
  //     }
  //
  //
  //     else {
  //       const node = document.getElementById( 'direct cash out')
  //       node.style.display = 'inherit';
  //       this.exportAsPDF(node,fiche)
  //     };},10);
  // }

}
