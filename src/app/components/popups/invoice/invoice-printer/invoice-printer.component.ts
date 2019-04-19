import {Component, Input, OnInit} from '@angular/core';
import {AngularFirestore} from "angularfire2/firestore";
import * as html2canvas from 'html2canvas'


@Component({
  selector: 'app-invoice-printer',
  templateUrl: './invoice-printer.component.html',
  styleUrls: ['./invoice-printer.component.css']
})
export class InvoicePrinterComponent implements OnInit {

  @Input() invoice: any;


  constructor(private db: AngularFirestore) {

  }

  ngOnInit() {

  }




  openPrintPopup(invoice) {
    return setTimeout(() => {
      let popupWinindow
      popupWinindow = window.open('', '_blank', 'width=600,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
      popupWinindow.document.open();
      let innerContents = document.getElementById('fiche_template').innerHTML;
      popupWinindow.document.write('<html><head><style type="text/css">ol{margin:0;padding:0}table td,table th{padding:0}.c9{border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:112.9pt;border-top-color:#000000;border-bottom-style:solid}.c16{border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:middle;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:112.9pt;border-top-color:#000000;border-bottom-style:solid}.c14{color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:18pt;font-family:"Arial";font-style:normal}.c11{color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:6pt;font-family:"Arial";font-style:normal}.c3{color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:11pt;font-family:"Arial";font-style:italic}.c0{color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:11pt;font-family:"Arial";font-style:normal}.c5{color:#000000;font-weight:700;text-decoration:none;vertical-align:baseline;font-size:11pt;font-family:"Arial";font-style:normal}.c7{padding-top:0pt;padding-bottom:0pt;line-height:1.15;orphans:2;widows:2;text-align:center}.c2{padding-top:0pt;padding-bottom:0pt;line-height:1.15;orphans:2;widows:2;text-align:left}.c8{padding-top:0pt;padding-bottom:0pt;line-height:1.15;orphans:2;widows:2;text-align:right}.c1{padding-top:0pt;padding-bottom:0pt;line-height:1.0;text-align:left;height:11pt}.c15{padding-top:0pt;padding-bottom:0pt;line-height:1.15;text-align:left}.c12{padding-top:0pt;padding-bottom:0pt;line-height:1.0;text-align:left}.c10{border-spacing:0;border-collapse:collapse;margin-right:auto}.c4{background-color:#ffffff;max-width:451.4pt;padding:72pt 72pt 72pt 72pt}.c6{height:11pt}.c13{height:0pt}.title{padding-top:0pt;color:#000000;font-size:26pt;padding-bottom:3pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}.subtitle{padding-top:0pt;color:#666666;font-size:15pt;padding-bottom:16pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}li{color:#000000;font-size:11pt;font-family:"Arial"}p{margin:0;color:#000000;font-size:11pt;font-family:"Arial"}h1{padding-top:20pt;color:#000000;font-size:20pt;padding-bottom:6pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h2{padding-top:18pt;color:#000000;font-size:16pt;padding-bottom:6pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h3{padding-top:16pt;color:#434343;font-size:14pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h4{padding-top:14pt;color:#666666;font-size:12pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h5{padding-top:12pt;color:#666666;font-size:11pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h6{padding-top:12pt;color:#666666;font-size:11pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;font-style:italic;orphans:2;widows:2;text-align:left}</style><link href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></head><body onload="window.print()">' + innerContents + '</html>');
      popupWinindow.document.close();
    }, 100);
  }

  getFiches(invoice, type) {
    let total = 0
    for (let article of invoice['articles']) {
      this.db.collection('fiches').doc(article['fiche_id']).valueChanges().subscribe(
        res => {
          article['fiche'] = res
          total = total + 1;
          if (res['type'] != 'cash receipt') {
            let temp = parseFloat(article['prix']) - parseFloat(article['fiche']['prix'])
            article['tva'] = temp - temp / 1.2
            invoice['onMargin'].push(article)
          } else {
            article['tva'] = (parseFloat(article['prix'])) / 1.2
            invoice['classical'].push(article)

          }
          if (total == invoice['articles'].length) {
            console.log('margin', invoice['onMargin'])
            console.log('classical', invoice['classical']);
            if (type == 'print') {
              return this.openPrintPopup(invoice)
            } else {
              return this.exportAsPDF(invoice)

            }
          }

        },
        err => {
          console.log(err);
          total = total + 1
        }
      )
    }
  }

  export(invoice) {
    invoice['onMargin'] = [];
    invoice['classical'] = [];
    this.getFiches(invoice, 'download')
  }

  exportAsPDF(fiche) {
    return setTimeout(() => {
      document.getElementById('fiche_template').style.display = 'inherit';
      var data = document.getElementById('fiche_template');
      const options = {
        windowWidth: 1096,
        windowHeight: 842,
        width: 856,
        height: 1262,
        useCORS: true,
      };
      html2canvas(data, options).then(canvas => {
        document.getElementById('fiche_template').style.display = 'none';
// Few necessary setting options
        var imgWidth = 288;
        var pageHeight = 295;
        var imgHeight = canvas.height * imgWidth / canvas.width;
        var heightLeft = imgHeight;
        document.body.appendChild(canvas);
        const contentDataURL = canvas.toDataURL('image/png');
        const downloadLink = document.getElementById("testa");
        const fileName = fiche['client']['name'] + fiche['number'] + '_' + fiche['date'] + '.png';
        downloadLink['href'] = contentDataURL;
        downloadLink['download'] = fileName;
        downloadLink.click();
      });
    }, 100);

  }

  getTotal (field) {
    let res = {ttc: 0, tva: 0}
    for (let article of this.invoice['articles']) {
      if (article[field]) {
        res['ttc'] =  res['ttc'] + parseInt(article['prix']);
        res['tva'] =  res['tva'] + parseInt(article[field]);

      }
    }
    if (res['ttc'] !== 0) {
      return res
    } else {
      for (let article of this.invoice['articles']) {
          res['ttc'] =  res['ttc'] + parseInt(article['prix']);


        }
      return res
    }

  }

  tableToShow() {
    let res = {margin: false, intracom: false}
    if (this.invoice['articles']) {
      for (let article of this.invoice['articles']) {
        if (article['tva_margin'] || !article['fiche']) {
          res['margin'] = true;
        }
        if (article['tva_intracom']) {
          res['intracom'] = true;
        }
      }
    }
    return res
    }
}