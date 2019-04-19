import {Component, Input, OnInit} from '@angular/core';
import * as html2canvas from 'html2canvas';
import * as jsPDF from 'jspdf'

@Component({
  selector: 'app-fiche-printer',
  templateUrl: './fiche-printer.component.html',
  styleUrls: ['./fiche-printer.component.css']
})
export class FichePrinterComponent implements OnInit {
  @Input() fiche: any;

  constructor() { }

  ngOnInit() {
  }

  printToCart(printSectionId: string, fiche) {
    this.fiche=fiche;
    console.log(this.fiche);
    return setTimeout( () => {  let popupWinindow
      popupWinindow = window.open('', '_blank', 'width=600,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
      popupWinindow.document.open();
      let innerContents = document.getElementById(printSectionId).innerHTML;
      popupWinindow.document.write('<html><head><style>ol {\n' +
        '  margin: 0;\n' +
        '  padding: 0\n' +
        '}\n' +
        '\n' +
        'table td, table th {\n' +
        '  padding: 0\n' +
        '}\n' +
        '\n' +
        '.c10 {\n' +
        '  border-right-style: solid;\n' +
        '  padding: 5pt 5pt 5pt 5pt;\n' +
        '  border-bottom-color: #000000;\n' +
        '  border-top-width: 1pt;\n' +
        '  border-right-width: 1pt;\n' +
        '  border-left-color: #000000;\n' +
        '  vertical-align: top;\n' +
        '  border-right-color: #000000;\n' +
        '  border-left-width: 1pt;\n' +
        '  border-top-style: solid;\n' +
        '  border-left-style: solid;\n' +
        '  border-bottom-width: 1pt;\n' +
        '  width: 61.5pt;\n' +
        '  border-top-color: #000000;\n' +
        '  border-bottom-style: solid\n' +
        '}\n' +
        '\n' +
        '.c18 {\n' +
        '  border-right-style: solid;\n' +
        '  padding: 5pt 5pt 5pt 5pt;\n' +
        '  border-bottom-color: #000000;\n' +
        '  border-top-width: 1pt;\n' +
        '  border-right-width: 1pt;\n' +
        '  border-left-color: #000000;\n' +
        '  vertical-align: top;\n' +
        '  border-right-color: #000000;\n' +
        '  border-left-width: 1pt;\n' +
        '  border-top-style: solid;\n' +
        '  border-left-style: solid;\n' +
        '  border-bottom-width: 1pt;\n' +
        '  width: 108pt;\n' +
        '  border-top-color: #000000;\n' +
        '  border-bottom-style: solid\n' +
        '}\n' +
        '\n' +
        '.c15 {\n' +
        '  border-right-style: solid;\n' +
        '  padding: 5pt 5pt 5pt 5pt;\n' +
        '  border-bottom-color: #000000;\n' +
        '  border-top-width: 1pt;\n' +
        '  border-right-width: 1pt;\n' +
        '  border-left-color: #000000;\n' +
        '  vertical-align: top;\n' +
        '  border-right-color: #000000;\n' +
        '  border-left-width: 1pt;\n' +
        '  border-top-style: solid;\n' +
        '  border-left-style: solid;\n' +
        '  border-bottom-width: 1pt;\n' +
        '  width: 384pt;\n' +
        '  border-top-color: #000000;\n' +
        '  border-bottom-style: solid\n' +
        '}\n' +
        '\n' +
        '.c19 {\n' +
        '  border-right-style: solid;\n' +
        '  padding: 5pt 5pt 5pt 5pt;\n' +
        '  border-bottom-color: #000000;\n' +
        '  border-top-width: 1pt;\n' +
        '  border-right-width: 1pt;\n' +
        '  border-left-color: #000000;\n' +
        '  vertical-align: top;\n' +
        '  border-right-color: #000000;\n' +
        '  border-left-width: 1pt;\n' +
        '  border-top-style: solid;\n' +
        '  border-left-style: solid;\n' +
        '  border-bottom-width: 1pt;\n' +
        '  width: 139.5pt;\n' +
        '  border-top-color: #000000;\n' +
        '  border-bottom-style: solid\n' +
        '}\n' +
        '\n' +
        '.c5 {\n' +
        '  border-right-style: solid;\n' +
        '  padding: 5pt 5pt 5pt 5pt;\n' +
        '  border-bottom-color: #000000;\n' +
        '  border-top-width: 1pt;\n' +
        '  border-right-width: 1pt;\n' +
        '  border-left-color: #000000;\n' +
        '  vertical-align: top;\n' +
        '  border-right-color: #000000;\n' +
        '  border-left-width: 1pt;\n' +
        '  border-top-style: solid;\n' +
        '  border-left-style: solid;\n' +
        '  border-bottom-width: 1pt;\n' +
        '  width: 183pt;\n' +
        '  border-top-color: #000000;\n' +
        '  border-bottom-style: solid\n' +
        '}\n' +
        '\n' +
        '.c17 {\n' +
        '  -webkit-text-decoration-skip: none;\n' +
        '  color: #000000;\n' +
        '  font-weight: 700;\n' +
        '  text-decoration: underline;\n' +
        '  vertical-align: baseline;\n' +
        '  text-decoration-skip-ink: none;\n' +
        '  font-size: 11pt;\n' +
        '  font-family: "Arial";\n' +
        '  font-style: normal\n' +
        '}\n' +
        '\n' +
        '.c9 {\n' +
        '  color: #000000;\n' +
        '  font-weight: 700;\n' +
        '  text-decoration: none;\n' +
        '  vertical-align: baseline;\n' +
        '  font-size: 11pt;\n' +
        '  font-family: "Arial";\n' +
        '  font-style: normal\n' +
        '}\n' +
        '\n' +
        '.c4 {\n' +
        '  color: #000000;\n' +
        '  font-weight: 400;\n' +
        '  text-decoration: none;\n' +
        '  vertical-align: baseline;\n' +
        '  font-size: 11pt;\n' +
        '  font-family: "Arial";\n' +
        '  font-style: normal\n' +
        '}\n' +
        '\n' +
        '.c1 {\n' +
        '  padding-top: 0pt;\n' +
        '  padding-bottom: 0pt;\n' +
        '  line-height: 1.15;\n' +
        '  orphans: 2;\n' +
        '  widows: 2;\n' +
        '  text-align: left;\n' +
        '  height: 11pt\n' +
        '}\n' +
        '\n' +
        '.c3 {\n' +
        '  padding-top: 0pt;\n' +
        '  padding-bottom: 0pt;\n' +
        '  line-height: 1.15;\n' +
        '  orphans: 2;\n' +
        '  widows: 2;\n' +
        '  text-align: left\n' +
        '}\n' +
        '\n' +
        '.c12 {\n' +
        '  padding-top: 0pt;\n' +
        '  padding-bottom: 0pt;\n' +
        '  line-height: 1.15;\n' +
        '  orphans: 2;\n' +
        '  widows: 2;\n' +
        '  text-align: center\n' +
        '}\n' +
        '\n' +
        '.c2 {\n' +
        '  padding-top: 0pt;\n' +
        '  padding-bottom: 0pt;\n' +
        '  line-height: 1.0;\n' +
        '  text-align: left;\n' +
        '  height: 11pt\n' +
        '}\n' +
        '\n' +
        '.c14 {\n' +
        '  padding-top: 0pt;\n' +
        '  padding-bottom: 0pt;\n' +
        '  line-height: 1.0;\n' +
        '  text-align: left\n' +
        '}\n' +
        '\n' +
        '.c11 {\n' +
        '  border-spacing: 0;\n' +
        '  border-collapse: collapse;\n' +
        '  margin-right: auto\n' +
        '}\n' +
        '\n' +
        '.c6 {\n' +
        '  padding-top: 0pt;\n' +
        '  padding-bottom: 0pt;\n' +
        '  line-height: 1.0;\n' +
        '  text-align: center\n' +
        '}\n' +
        '\n' +
        '.c16 {\n' +
        '  max-width: 451.4pt;\n' +
        '  padding: 72pt 72pt 72pt 72pt\n' +
        '}\n' +
        '\n' +
        '.c13 {\n' +
        '  font-size: 18pt;\n' +
        '  font-weight: 700\n' +
        '}\n' +
        '\n' +
        '.c22 {\n' +
        '  font-weight: 700\n' +
        '}\n' +
        '\n' +
        '.c8 {\n' +
        '  height: 63pt\n' +
        '}\n' +
        '\n' +
        '.c21 {\n' +
        '  height: 74pt\n' +
        '}\n' +
        '\n' +
        '.c7 {\n' +
        '  background-color: #ffffff\n' +
        '}\n' +
        '\n' +
        '.c20 {\n' +
        '  height: 42pt\n' +
        '}\n' +
        '\n' +
        '.c0 {\n' +
        '  height: 31pt\n' +
        '}\n' +
        '\n' +
        '.title {\n' +
        '  padding-top: 0pt;\n' +
        '  color: #000000;\n' +
        '  font-size: 26pt;\n' +
        '  padding-bottom: 3pt;\n' +
        '  font-family: "Arial";\n' +
        '  line-height: 1.15;\n' +
        '  page-break-after: avoid;\n' +
        '  orphans: 2;\n' +
        '  widows: 2;\n' +
        '  text-align: left\n' +
        '}\n' +
        '\n' +
        '.subtitle {\n' +
        '  padding-top: 0pt;\n' +
        '  color: #666666;\n' +
        '  font-size: 15pt;\n' +
        '  padding-bottom: 16pt;\n' +
        '  font-family: "Arial";\n' +
        '  line-height: 1.15;\n' +
        '  page-break-after: avoid;\n' +
        '  orphans: 2;\n' +
        '  widows: 2;\n' +
        '  text-align: left\n' +
        '}\n' +
        '\n' +
        'li {\n' +
        '  color: #000000;\n' +
        '  font-size: 11pt;\n' +
        '  font-family: "Arial"\n' +
        '}\n' +
        '\n' +
        'p {\n' +
        '  margin: 0;\n' +
        '  color: #000000;\n' +
        '  font-size: 11pt;\n' +
        '  font-family: "Arial"\n' +
        '}\n' +
        '\n' +
        'h1 {\n' +
        '  padding-top: 20pt;\n' +
        '  color: #000000;\n' +
        '  font-size: 20pt;\n' +
        '  padding-bottom: 6pt;\n' +
        '  font-family: "Arial";\n' +
        '  line-height: 1.15;\n' +
        '  page-break-after: avoid;\n' +
        '  orphans: 2;\n' +
        '  widows: 2;\n' +
        '  text-align: left\n' +
        '}\n' +
        '\n' +
        'h2 {\n' +
        '  padding-top: 18pt;\n' +
        '  color: #000000;\n' +
        '  font-size: 16pt;\n' +
        '  padding-bottom: 6pt;\n' +
        '  font-family: "Arial";\n' +
        '  line-height: 1.15;\n' +
        '  page-break-after: avoid;\n' +
        '  orphans: 2;\n' +
        '  widows: 2;\n' +
        '  text-align: left\n' +
        '}\n' +
        '\n' +
        'h3 {\n' +
        '  padding-top: 16pt;\n' +
        '  color: #434343;\n' +
        '  font-size: 14pt;\n' +
        '  padding-bottom: 4pt;\n' +
        '  font-family: "Arial";\n' +
        '  line-height: 1.15;\n' +
        '  page-break-after: avoid;\n' +
        '  orphans: 2;\n' +
        '  widows: 2;\n' +
        '  text-align: left\n' +
        '}\n' +
        '\n' +
        'h4 {\n' +
        '  padding-top: 14pt;\n' +
        '  color: #666666;\n' +
        '  font-size: 12pt;\n' +
        '  padding-bottom: 4pt;\n' +
        '  font-family: "Arial";\n' +
        '  line-height: 1.15;\n' +
        '  page-break-after: avoid;\n' +
        '  orphans: 2;\n' +
        '  widows: 2;\n' +
        '  text-align: left\n' +
        '}\n' +
        '\n' +
        'h5 {\n' +
        '  padding-top: 12pt;\n' +
        '  color: #666666;\n' +
        '  font-size: 11pt;\n' +
        '  padding-bottom: 4pt;\n' +
        '  font-family: "Arial";\n' +
        '  line-height: 1.15;\n' +
        '  page-break-after: avoid;\n' +
        '  orphans: 2;\n' +
        '  widows: 2;\n' +
        '  text-align: left\n' +
        '}\n' +
        '\n' +
        'h6 {\n' +
        '  padding-top: 12pt;\n' +
        '  color: #666666;\n' +
        '  font-size: 11pt;\n' +
        '  padding-bottom: 4pt;\n' +
        '  font-family: "Arial";\n' +
        '  line-height: 1.15;\n' +
        '  page-break-after: avoid;\n' +
        '  font-style: italic;\n' +
        '  orphans: 2;\n' +
        '  widows: 2;\n' +
        '  text-align: left\n' +
        '}</style></head><body onload="window.print()">' + innerContents + '</html>');
      popupWinindow.document.close();},100 );


  }

  exportAsPDF(node : HTMLElement, fiche) {
    var data = node;
    const options = {
      windowWidth : 456*2,
      windowHeight : 842*2,
      width: 326*2,
      height : 942,
      // allowTaint: true,
      useCORS: true
    }
    html2canvas(data, options).then(canvas => {
      node.style.display ='none'

// Few necessary setting options
      var imgWidth = 600;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;
      // document.body.appendChild(canvas);
      const contentDataURL = canvas.toDataURL('image/png')
      // let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
      // var position = 2;
      // pdf.addImage(contentDataURL, 'PNG', 0,  position, imgWidth, imgHeight)
      // pdf.save(fiche['nom']+fiche['prenom']+'_'+fiche['modele']+'.pdf'); // Generated PDF
      const downloadLink = document.getElementById("testa");
      console.log(downloadLink)
      const fileName = fiche['nom']+fiche['prenom']+' '+fiche['modele']+'.png';
      // const fileName = 'toto.png';

      downloadLink['href'] = contentDataURL;
      downloadLink['download'] = fileName;
      downloadLink.click();
      console.log(downloadLink)

    });
  }

  downloadAsPDF(fiche) {
    this.fiche = fiche;
    return setTimeout( () => {
      if(fiche['type'] == 'consignement') {
        let node = document.getElementById('consignment')
        node.style.display = 'inherit';
        this.exportAsPDF(node,fiche)


      } else if (fiche['type'] == 'cash receipt') {
        let node = document.getElementById( 'cash receipt')
        node.style.display = 'inherit';
        let img = document.getElementById('my_img')
        this.exportAsPDF(node,fiche)


      }


      else {
        const node = document.getElementById( 'direct cash out')
        node.style.display = 'inherit';
        this.exportAsPDF(node,fiche)
      };},10);
  }

  getTransaction(fiche) {
    if(fiche['transaction'] == 'dropoff') {
      return 'C. Meetup'
    } else if (fiche['transaction'] == 'invoice') {
      return 'B. Invoice & Ship'
    } else if (fiche['transaction'] == 'gift') {
      return 'A. Ship & gift'
    } else {
      return 'Old Fiche'
    }
  }
}
