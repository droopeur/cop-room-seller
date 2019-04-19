import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as easypost from '@easypost/api';
import * as airtable from 'airtable';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
const algoliasearch = require('algoliasearch');
const api = new easypost('EZAK5e840b2647664d8a9fc52cdfd3cef8c5Yxspoc6tMj6Hf1zezAjoiw');
const nodemailer = require('nodemailer');
const cors = require('cors')({
  origin: true,
});

const base = new airtable({apiKey: 'keylegU8gtkkUvl6t'}).base('appNSQ3ETigLiR0VD');

// [START init_algolia]
// Initialize Algolia, requires installing Algolia dependencies:
// https://www.algolia.com/doc/api-client/javascript/getting-started/#install
//
// App ID and API Key are stored in functions config variables
const ALGOLIA_ID = 'OAD8WH001E';
const ALGOLIA_ADMIN_KEY = 'da025ba3be9a6cbd89005d7ddee154a9';
//const ALGOLIA_SEARCH_KEY = 'ab741e79bc30778d384b74b9ec83c927';

const ALGOLIA_INDEX_NAME = 'ProductsV2';
const client = algoliasearch(ALGOLIA_ID, ALGOLIA_ADMIN_KEY);
const index = client.initIndex(ALGOLIA_INDEX_NAME);
const rp = require('request-promise')

admin.initializeApp();

function createEmailHtml(label_url,country_code) {
  console.log(country_code)
  let phone_number = '000000000'
  if (country_code == 'FR') {
    phone_number = '0825100080'
  } else if (country_code == 'DE') {
    phone_number = '004918063453003'
  } else if (country_code == 'GB') {
    phone_number = ' 00448442480844'
  } else if (country_code == 'IT') {
    phone_number = '00390282470288'
  } else if (country_code == 'NL') {
    phone_number = '0880552000'
  } else if (country_code == 'BE') {
    phone_number = '003227155050'
  } else if (country_code == 'US') {
    phone_number = '18002255345'
  } else if (country_code == 'ES') {
    phone_number = '0034902122424'
  } else if (country_code == 'AT') {
    phone_number = '0043820550505'
  } else {
    phone_number = '0825 10 00 80'
  }

  const htmlText = `<!doctype html><html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head> <title></title> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1"> <style type="text/css"> #outlook a{padding: 0;}.ReadMsgBody{width: 100%;}.ExternalClass{width: 100%;}.ExternalClass *{line-height: 100%;}body{margin: 0; padding: 0; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;}table, td{border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;}img{border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic;}p{display: block; margin: 13px 0;}</style> <style type="text/css"> @media only screen and (max-width: 480px){@-ms-viewport{width: 320px;}@viewport{width: 320px;}}</style><!--[if mso]> <xml> <o:OfficeDocumentSettings> <o:AllowPNG/> <o:PixelsPerInch>96</o:PixelsPerInch> </o:OfficeDocumentSettings> </xml><![endif]--><!--[if lte mso 11]> <style type="text/css"> .outlook-group-fix{width: 100% !important;}</style><![endif]--> <style type="text/css"> @media only screen and (min-width: 480px){.mj-column-per-100{width: 100% !important; max-width: 100%;}.mj-column-per-33{width: 33.333333333333336% !important; max-width: 33.333333333333336%;}}</style> <style type="text/css"> @media only screen and (max-width: 480px){table.full-width-mobile{width: 100% !important;}td.full-width-mobile{width: auto !important;}}</style></head><body><div style="display:none;font-size:1px;color:#ffffff;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;"> ##</div><div style=""><!--[if mso | IE]> <table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" > <tr> <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--> <div style="background:#ffffff;background-color:#ffffff;Margin:0px auto;max-width:600px;"> <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;"> <tbody> <tr> <td style="direction:ltr;font-size:0px;padding:40px 0 5px 0;text-align:center;vertical-align:top;"><!--[if mso | IE]> <table role="presentation" border="0" cellpadding="0" cellspacing="0"> <tr> <td class="" style="vertical-align:top;width:600px;" ><![endif]--> <div class="mj-column-per-100 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"> <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"> <tr> <td align="center" style="font-size:0px;padding:10px 25px;padding-bottom:10px;word-break:break-word;"> <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;"> <tbody> <tr> <td style="width:160px;"> <a href="https://www.cop-room.com/" target="_blank"> <img height="auto" src="https://cdn.shopify.com/s/files/1/0006/4353/0817/files/COPROOM_BOXLOGO.png?5669268372177766920" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;" width="160"/> </a> </td></tr></tbody> </table> </td></tr><tr> <td align="center" style="font-size:0px;padding:10px 25px;padding-top:0;word-break:break-word;"> <div style="font-family:Futura;font-size:16px;font-weight:bold;line-height:20px;text-align:center;color:#848484;"> THE FINEST FOR YOU </div></td></tr></table> </div><!--[if mso | IE]> </td></tr></table><![endif]--> </td></tr></tbody> </table> </div><!--[if mso | IE]> </td></tr></table><![endif]--><!--[if mso | IE]> <table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" > <tr> <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--> <div style="background:#ffffff;background-color:#ffffff;Margin:0px auto;max-width:600px;"> <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;"> <tbody> <tr> <td style="direction:ltr;font-size:0px;padding:0;text-align:center;vertical-align:top;"><!--[if mso | IE]> <table role="presentation" border="0" cellpadding="0" cellspacing="0"> <tr> <td class="" style="vertical-align:top;width:600px;" ><![endif]--> <div class="mj-column-per-100 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"> <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"> <tr> <td align="center" style="font-size:0px;padding:10px 25px;padding-top:20px;word-break:break-word;"> <div style="font-family:futura;font-size:28px;line-height:40px;text-align:center;color:#000000;"> <strong></strong>Thanks for selling to Coproom </div></td></tr><tr> <td align="center" vertical-align="middle" style="font-size:0px;padding:10px 25px;word-break:break-word;"> <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;line-height:100%;"> <tr> <td align="center" bgcolor="#cfa9ff" role="presentation" style="border:none;border-radius:3px;cursor:auto;padding:20px 70px;" valign="middle"> <a href="`+label_url+`" style="background:#cfa9ff;color:#ffffff;font-family:Futura;font-size:14px;font-weight:bold;line-height:120%;Margin:0;text-decoration:none;text-transform:none;" target="_blank"> PRINT YOUR SHIPPING LABEL </a> </td></tr></table> </td></tr><tr> <td align="left" style="font-size:0px;padding:20px;word-break:break-word;"> <div style="font-family:futura;font-size:28px;line-height:40px;text-align:left;color:#000000;"> Here are some instructions for shipping: </div></td></tr></table> </div><!--[if mso | IE]> </td></tr></table><![endif]--> </td></tr></tbody> </table> </div><!--[if mso | IE]> </td></tr></table> <table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" > <tr> <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--> <div style="background:#ffffff;background-color:#ffffff;Margin:0px auto;max-width:600px;"> <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;"> <tbody> <tr> <td style="direction:ltr;font-size:0px;padding:40px 0 0 0;text-align:center;vertical-align:top;"><!--[if mso | IE]> <table role="presentation" border="0" cellpadding="0" cellspacing="0"> <tr> <td class="" style="vertical-align:top;width:200px;" ><![endif]--> <div class="mj-column-per-33 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"> <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"> <tr> <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"> <div style="font-family:Futura;font-size:45px;font-weight:bold;line-height:20px;text-align:center;color:#cfa9ff;"> <span style="border:solid 5px #848484;border-radius:50%;padding:10px 25px">1</span> </div></td></tr><tr> <td align="left" style="font-size:0px;padding:40px 25px 40px 20px;word-break:break-word;"> <div style="font-family:Avenir;font-size:18px;line-height:25px;text-align:left;color:#848484;"> Pack your item in a box.<strong style="color:#444444;"> Do not ship directly with the original box.</strong> </div></td></tr></table> </div><!--[if mso | IE]> </td><td class="" style="vertical-align:top;width:200px;" ><![endif]--> <div class="mj-column-per-33 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"> <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"> <tr> <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"> <div style="font-family:Futura;font-size:45px;font-weight:bold;line-height:20px;text-align:center;color:#cfa9ff;"> <span style="border:solid 5px #848484;border-radius:50%;padding:10px 25px">2</span> </div></td></tr><tr> <td align="left" style="font-size:0px;padding:40px 25px 40px 20px;word-break:break-word;"> <div style="font-family:Avenir;font-size:18px;line-height:25px;text-align:left;color:#848484;"> Print your shipping label, and place it on the box. </div></td></tr></table> </div><!--[if mso | IE]> </td><td class="" style="vertical-align:top;width:200px;" ><![endif]--> <div class="mj-column-per-33 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"> <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"> <tr> <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"> <div style="font-family:Futura;font-size:45px;font-weight:bold;line-height:20px;text-align:center;color:#cfa9ff;"> <span style="border:solid 5px #848484;border-radius:50%;padding:10px 25px">3</span> </div></td></tr><tr> <td align="left" style="font-size:0px;padding:40px 25px 0px 20px;word-break:break-word;"> <div style="font-family:Avenir;font-size:18px;line-height:25px;text-align:left;color:#848484;"> Call the <a href="callto:`+phone_number+`">`+phone_number+`</a> to schedule a pick upby DHL at your location.* </div></td></tr></table> </div><!--[if mso | IE]> </td></tr></table><![endif]--> </td></tr></tbody> </table> </div><!--[if mso | IE]> </td></tr></table> <table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" > <tr> <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--> <div style="background:#ffffff;background-color:#ffffff;Margin:0px auto;max-width:600px;"> <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;"> <tbody> <tr> <td style="direction:ltr;font-size:0px;padding:0;text-align:center;vertical-align:top;"><!--[if mso | IE]> <table role="presentation" border="0" cellpadding="0" cellspacing="0"> <tr> <td class="" style="vertical-align:top;width:600px;" ><![endif]--> <div class="mj-column-per-100 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"> <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"> <tr> <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;"> <div style="font-family:Avenir;font-size:16px;line-height:20px;text-align:left;color:#848484;"> * If you can't schedule a pick up, you can drop off your parcel at any of the DHL location, here is <a href="#">the list.</a> </div></td></tr><tr> <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;"> <div style="font-family:Avenir;font-size:16px;line-height:20px;text-align:left;color:#848484;"> If you have any question regarding the invoice, parcel or shipment, please contact the Coproom employee you are in touch with. </div></td></tr><tr> <td align="center" vertical-align="middle" style="font-size:0px;padding:30px 0;word-break:break-word;"> <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;line-height:100%;"> <tr> <td align="center" bgcolor="#848484" role="presentation" style="border:none;border-radius:3px;cursor:auto;padding:20px 80px;" valign="middle"> <a href="https://www.cop-room.com" style="background:#848484;color:#ffffff;font-family:Futura;font-size:14px;font-weight:bold;line-height:120%;Margin:0;text-decoration:none;text-transform:none;" target="_blank"> SHOP NOW </a> </td></tr></table> </td></tr></table> </div><!--[if mso | IE]> </td></tr></table><![endif]--> </td></tr></tbody> </table> </div><!--[if mso | IE]> </td></tr></table><![endif]--><!--[if mso | IE]> <table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" > <tr> <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--> <div style="background:#ffffff;background-color:#ffffff;Margin:0px auto;max-width:600px;"> <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;"> <tbody> <tr> <td style="direction:ltr;font-size:0px;padding:0px;text-align:center;vertical-align:top;"><!--[if mso | IE]> <table role="presentation" border="0" cellpadding="0" cellspacing="0"> <tr> <td class="" style="vertical-align:top;width:600px;" ><![endif]--> <div class="mj-column-per-100 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"> <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"> <tr> <td style="font-size:0px;padding:10px 25px;word-break:break-word;"> <p style="border-top:solid 1px #d1d1d1;font-size:1;margin:0px auto;width:100%;"> </p><!--[if mso | IE]> <table align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 1px #d1d1d1;font-size:1;margin:0px auto;width:550px;" role="presentation" width="550px" > <tr> <td style="height:0;line-height:0;"> &nbsp; </td></tr></table><![endif]--> </td></tr><tr> <td align="center" style="font-size:0px;padding:5px 0;word-break:break-word;"> <div style="font-family:Arial,Sans-Serif;font-size:10px;letter-spacing:1px;line-height:20px;text-align:center;color:#848484;"> <a style="color:#000;text-decoration:none;" href="https://www.cop-room.com/"> WWW.COP-ROOM.COM</a> </div></td></tr></table> </div><!--[if mso | IE]> </td></tr></table><![endif]--> </td></tr></tbody> </table> </div><!--[if mso | IE]> </td></tr></table> <table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" > <tr> <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--> <div style="background:#ffffff;background-color:#ffffff;Margin:0px auto;max-width:600px;"> <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;"> <tbody> <tr> <td style="direction:ltr;font-size:0px;padding:0 15px;text-align:center;vertical-align:top;"><!--[if mso | IE]> <table role="presentation" border="0" cellpadding="0" cellspacing="0"> <tr> <td class="" style="width:570px;" ><![endif]--> <div class="mj-column-per-100 outlook-group-fix" style="font-size:0;line-height:0;text-align:left;display:inline-block;width:100%;direction:ltr;"><!--[if mso | IE]> <table role="presentation" border="0" cellpadding="0" cellspacing="0"> <tr> <td style="vertical-align:top;width:190px;" ><![endif]--> <div class="mj-column-per-33 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:33%;"> <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"> <tr> <td align="right" style="font-size:0px;padding:10px 25px;word-break:break-word;"> <table align="right" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;"> <tbody> <tr> <td style="width:30px;"> <a href="https://www.facebook.com/coproomshop/" target="_blank"> <img height="auto" src="https://cdn.shopify.com/s/files/1/0006/4353/0817/files/Fichier_1_2x_59f6a9d9-e704-4a11-8105-b7b1967a6800.png?11206478977170757687" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;" width="30"/> </a> </td></tr></tbody> </table> </td></tr></table> </div><!--[if mso | IE]> </td><td style="vertical-align:top;width:190px;" ><![endif]--> <div class="mj-column-per-33 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:33%;"> <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"> <tr> <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"> <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;"> <tbody> <tr> <td style="width:30px;"> <a href="https://www.instagram.com/coproom/" target="_blank"> <img height="auto" src="https://cdn.shopify.com/s/files/1/0006/4353/0817/files/Fichier_2_2x_e5c1fb19-5218-4f48-8e1e-747c9f74fb08.png?11206478977170757687" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;" width="30"/> </a> </td></tr></tbody> </table> </td></tr></table> </div><!--[if mso | IE]> </td><td style="vertical-align:top;width:190px;" ><![endif]--> <div class="mj-column-per-33 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:33%;"> <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"> <tr> <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;"> <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;"> <tbody> <tr> <td style="width:30px;"> <a href="https://wa.me/33610586691" target="_blank"> <img height="auto" src="https://cdn.shopify.com/s/files/1/0006/4353/0817/files/whatsapp_2x_92992a03-75b5-4177-8af8-1bc382785db5.png?1185240124725244852" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;" width="30"/> </a> </td></tr></tbody> </table> </td></tr></table> </div><!--[if mso | IE]> </td></tr></table><![endif]--> </div><!--[if mso | IE]> </td></tr></table><![endif]--> </td></tr></tbody> </table> </div><!--[if mso | IE]> </td></tr></table> <table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" > <tr> <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--> <div style="background:#ffffff;background-color:#ffffff;Margin:0px auto;max-width:600px;"> <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;"> <tbody> <tr> <td style="direction:ltr;font-size:0px;padding:0 0 30px 0;text-align:center;vertical-align:top;"><!--[if mso | IE]> <table role="presentation" border="0" cellpadding="0" cellspacing="0"> <tr> <td class="" style="vertical-align:top;width:600px;" ><![endif]--> <div class="mj-column-per-100 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"> <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"> <tr> <td align="center" style="font-size:0px;padding:5px 0;word-break:break-word;"> <div style="font-family:Avenir;font-size:12px;line-height:20px;text-align:center;color:#000;"> © Copyright 2018, Coproom - <a style="color:#000;padding:0" href="https://www.cop-room.com/">www.cop-room.com</a> </div></td></tr></table> </div><!--[if mso | IE]> </td></tr></table><![endif]--> </td></tr></tbody> </table> </div><!--[if mso | IE]> </td></tr></table><![endif]--></div></body></html>`
  return htmlText;
}
function createMail(type, qrcode) {
  const html = `<!doctype html><html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"xmlns:o="urn:schemas-microsoft-com:office:office"><head><title></title><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><style type="text/css"> #outlook a {padding: 0;}.ReadMsgBody {width: 100%;}.ExternalClass {width: 100%;}.ExternalClass * {line-height: 100%;}body {margin: 0;padding: 0;-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;}table, td {border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;}img {border: 0;height: auto;line-height: 100%;outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;}p {display: block;margin: 13px 0;}</style><style type="text/css"> @media only screen and (max-width: 480px) {@-ms-viewport {width: 320px;}@viewport {width: 320px;}}</style><!--[if mso]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]--><!--[if lte mso 11]><style type="text/css"> .outlook-group-fix {width: 100% !important;}</style><![endif]--><style type="text/css"> @media only screen and (min-width: 480px) {.mj-column-per-100 {width: 100% !important;max-width: 100%;}.mj-column-per-33 {width: 33.333333333333336% !important;max-width: 33.333333333333336%;}}</style><style type="text/css"> @media only screen and (max-width: 480px) {table.full-width-mobile {width: 100% !important;}td.full-width-mobile {width: auto !important;}}</style></head><body><div style="display:none;font-size:1px;color:#ffffff;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;">##</div><div style=""><!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="background:#ffffff;background-color:#ffffff;Margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:40px 0 5px 0;text-align:center;vertical-align:top;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;"><![endif]--><div class="mj-column-per-100 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;"width="100%"><tr><td align="center" style="font-size:0px;padding:10px 25px;padding-bottom:10px;word-break:break-word;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"style="border-collapse:collapse;border-spacing:0px;"><tbody><tr><td style="width:160px;"><a href="https://www.cop-room.com/" target="_blank"> <img height="auto" src="https://cdn.shopify.com/s/files/1/0006/4353/0817/files/COPROOM_BOXLOGO.png?5669268372177766920" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;"width="160"/></a></td></tr></tbody></table></td></tr><tr><td align="center" style="font-size:0px;padding:10px 25px;padding-top:0;word-break:break-word;"><div style="font-family:Futura;font-size:16px;font-weight:bold;line-height:20px;text-align:center;color:#848484;">THE FINEST FOR YOU</div></td></tr></table></div><!--[if mso | IE]> </td></tr></table><![endif]--> </td></tr></tbody></table></div><!--[if mso | IE]> </td></tr></table><![endif]--><!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="background:#ffffff;background-color:#ffffff;Margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:0;text-align:center;vertical-align:top;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;"><![endif]--><div class="mj-column-per-100 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;"width="100%"><tr><td align="center" style="font-size:0px;padding:10px 25px;padding-top:20px;word-break:break-word;"><div style="font-family:futura;font-size:28px;line-height:40px;text-align:center;color:#000000;"><strong></strong>Thanks for selling to Coproom</div></td></tr><tr><td align="center" vertical-align="middle" style="font-size:0px;padding:10px 25px;word-break:break-word;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;line-height:100%;"><tr><td align="center" bgcolor="#cfa9ff" role="presentation" style="border:none;border-radius:3px;cursor:auto;padding:20px 70px;" valign="middle"><a href="`+qrcode+`" style="background:#cfa9ff;color:#ffffff;font-family:Futura;font-size:14px;font-weight:bold;line-height:120%;Margin:0;text-decoration:none;text-transform:none;"target="_blank"> PRINT YOUR QR CODE </a></td></tr></table></td></tr><tr><td align="left" style="font-size:0px;padding:20px;word-break:break-word;"><div style="font-family:futura;font-size:28px;line-height:40px;text-align:left;color:#000000;"> Here are some instructions for shipping:</div></td></tr></table></div><!--[if mso | IE]> </td></tr></table><![endif]--> </td></tr></tbody></table></div><!--[if mso | IE]> </td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="background:#ffffff;background-color:#ffffff;Margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"style="background:#ffffff;background-color:#ffffff;width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:40px 0 0 0;text-align:center;vertical-align:top;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:200px;"><![endif]--><div class="mj-column-per-33 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"><tr><td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:Futura;font-size:45px;font-weight:bold;line-height:20px;text-align:center;color:#cfa9ff;"><span style="border:solid 5px #848484;border-radius:50%;padding:10px 25px">1</span></div></td></tr><tr><td align="left" style="font-size:0px;padding:40px 25px 40px 20px;word-break:break-word;"><div style="font-family:Avenir;font-size:18px;line-height:25px;text-align:left;color:#848484;"> Packyour item in a box.<strong style="color:#444444;"> Do not ship directly with the originalbox.</strong></div></td></tr></table></div><!--[if mso | IE]> </td><td class="" style="vertical-align:top;width:200px;"><![endif]--><div class="mj-column-per-33 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;"width="100%"><tr><td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:Futura;font-size:45px;font-weight:bold;line-height:20px;text-align:center;color:#cfa9ff;"><span style="border:solid 5px #848484;border-radius:50%;padding:10px 25px">2</span></div></td></tr><tr><td align="left" style="font-size:0px;padding:40px 25px 40px 20px;word-break:break-word;"><div style="font-family:Avenir;font-size:18px;line-height:25px;text-align:left;color:#848484;"> Print your qr code, and place it in the box.</div></td></tr></table></div><!--[if mso | IE]> </td><td class="" style="vertical-align:top;width:200px;"><![endif]--><div class="mj-column-per-33 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;"width="100%"><tr><td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:Futura;font-size:45px;font-weight:bold;line-height:20px;text-align:center;color:#cfa9ff;"><span style="border:solid 5px #848484;border-radius:50%;padding:10px 25px">3</span></div></td></tr><tr><td align="left" style="font-size:0px;padding:40px 25px 0px 20px;word-break:break-word;"><div style="font-family:Avenir;font-size:18px;line-height:25px;text-align:left;color:#848484;"> Ship the item with your favorite method.</div></td></tr></table></div><!--[if mso | IE]> </td></tr></table><![endif]--> </td></tr></tbody></table></div><!--[if mso | IE]> </td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="background:#ffffff;background-color:#ffffff;Margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"style="background:#ffffff;background-color:#ffffff;width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:0;text-align:center;vertical-align:top;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;"><![endif]--><div class="mj-column-per-100 outlook-group-fix"style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;"width="100%"><tr><td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;"></td></tr><tr><td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:Avenir;font-size:16px;line-height:20px;text-align:left;color:#848484;"> If you have any question regarding the qrcode, parcel or shipment, please contact the Coproom employee youare in touch with.</div></td></tr><tr><td align="center" vertical-align="middle" style="font-size:0px;padding:30px 0;word-break:break-word;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"style="border-collapse:separate;line-height:100%;"><tr><td align="center" bgcolor="#848484" role="presentation"style="border:none;border-radius:3px;cursor:auto;padding:20px 80px;" valign="middle"><a href="https://www.cop-room.com"style="background:#848484;color:#ffffff;font-family:Futura;font-size:14px;font-weight:bold;line-height:120%;Margin:0;text-decoration:none;text-transform:none;"target="_blank"> SHOP NOW </a></td></tr></table></td></tr></table></div><!--[if mso | IE]> </td></tr></table><![endif]--> </td></tr></tbody></table></div><!--[if mso | IE]> </td></tr></table><![endif]--><!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="background:#ffffff;background-color:#ffffff;Margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:0px;text-align:center;vertical-align:top;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;"><![endif]--><div class="mj-column-per-100 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;"width="100%"><tr><td style="font-size:0px;padding:10px 25px;word-break:break-word;"><p style="border-top:solid 1px #d1d1d1;font-size:1;margin:0px auto;width:100%;"></p><!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0"style="border-top:solid 1px #d1d1d1;font-size:1;margin:0px auto;width:550px;"role="presentation" width="550px"><tr><td style="height:0;line-height:0;"> &nbsp;</td></tr></table><![endif]--> </td></tr><tr><td align="center" style="font-size:0px;padding:5px 0;word-break:break-word;"><div style="font-family:Arial,Sans-Serif;font-size:10px;letter-spacing:1px;line-height:20px;text-align:center;color:#848484;"><a style="color:#000;text-decoration:none;" href="https://www.cop-room.com/"> WWW.COP-ROOM.COM</a></div></td></tr></table></div><!--[if mso | IE]> </td></tr></table><![endif]--> </td></tr></tbody></table></div><!--[if mso | IE]> </td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="background:#ffffff;background-color:#ffffff;Margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"style="background:#ffffff;background-color:#ffffff;width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:0 15px;text-align:center;vertical-align:top;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="width:570px;"><![endif]--><div class="mj-column-per-100 outlook-group-fix"style="font-size:0;line-height:0;text-align:left;display:inline-block;width:100%;direction:ltr;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:top;width:190px;"><![endif]--><div class="mj-column-per-33 outlook-group-fix"style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:33%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;"width="100%"><tr><td align="right" style="font-size:0px;padding:10px 25px;word-break:break-word;"><table align="right" border="0" cellpadding="0" cellspacing="0" role="presentation"style="border-collapse:collapse;border-spacing:0px;"><tbody><tr><td style="width:30px;"><a href="https://www.facebook.com/coproomshop/" target="_blank"> <img height="auto"src="https://cdn.shopify.com/s/files/1/0006/4353/0817/files/Fichier_1_2x_59f6a9d9-e704-4a11-8105-b7b1967a6800.png?11206478977170757687"style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;"width="30"/> </a></td></tr></tbody></table></td></tr></table></div><!--[if mso | IE]> </td><td style="vertical-align:top;width:190px;"><![endif]--><div class="mj-column-per-33 outlook-group-fix"style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:33%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;"width="100%"><tr><td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"style="border-collapse:collapse;border-spacing:0px;"><tbody><tr><td style="width:30px;"><a href="https://www.instagram.com/coproom/" target="_blank"> <img height="auto"src="https://cdn.shopify.com/s/files/1/0006/4353/0817/files/Fichier_2_2x_e5c1fb19-5218-4f48-8e1e-747c9f74fb08.png?11206478977170757687"style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;"width="30"/> </a></td></tr></tbody></table></td></tr></table></div><!--[if mso | IE]> </td><td style="vertical-align:top;width:190px;"><![endif]--><div class="mj-column-per-33 outlook-group-fix"style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:33%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;"width="100%"><tr><td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;"><table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation"style="border-collapse:collapse;border-spacing:0px;"><tbody><tr><td style="width:30px;"><a href="https://wa.me/33610586691" target="_blank"> <img height="auto"src="https://cdn.shopify.com/s/files/1/0006/4353/0817/files/whatsapp_2x_92992a03-75b5-4177-8af8-1bc382785db5.png?1185240124725244852"style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;"width="30"/></a></td></tr></tbody></table></td></tr></table></div><!--[if mso | IE]> </td></tr></table><![endif]--> </div><!--[if mso | IE]> </td></tr></table><![endif]--> </td></tr></tbody></table></div><!--[if mso | IE]> </td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="background:#ffffff;background-color:#ffffff;Margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"style="background:#ffffff;background-color:#ffffff;width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:0 0 30px 0;text-align:center;vertical-align:top;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;"><![endif]--><div class="mj-column-per-100 outlook-group-fix"style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;"width="100%"><tr><td align="center" style="font-size:0px;padding:5px 0;word-break:break-word;"><div style="font-family:Avenir;font-size:12px;line-height:20px;text-align:center;color:#000;"> ©Copyright 2018, Coproom - <a style="color:#000;padding:0" href="https://www.cop-room.com/">www.cop-room.com</a></div></td></tr></table></div><!--[if mso | IE]> </td></tr></table><![endif]--> </td></tr></tbody></table></div><!--[if mso | IE]> </td></tr></table><![endif]--></div></body></html>`
  return html
}
function createLabelForExport(address) {
  console.log(address);
  const fromAddress = new api.Address({
    verify: ['delivery'],
    name: address.name,
    street1: address.street1,
    street2: address.street2,
    city: address.city,
    zip: address.zip,
    country: address.country,
    phone: address.phone
  });
  fromAddress.save().then(res => {
    console.log('fromAdress: ', res)
  });
  const toAddress = new api.Address({
    verify: ['delivery'],
    name: 'Room Group Menex',
    street1: '79 Bis rue de Prony',
    city: 'Paris',
    state: 'IDF',
    zip: '75017',
    country: 'FR',
    phone: '0623771287'
  });
  toAddress.save().then(res => console.log('toAddres: ', res));


   let parcelDim = {
      height: 0.39,
      length: 0.39,
      width: 0.39,
      weight: 3.5

  }
  console.log('parcel: ',parcelDim)
  const parcel = new api.Parcel(parcelDim);

  parcel.save().then()
  const CustomItem =  new api.CustomsItem({
    'description': 'Shoes',
    'quantity': 1,
    'weight': 1,
    'value': 50,
    'hs_tariff_number': '654321',
    'origin_country': address.country
  });
  CustomItem.save().then()
  const customsInfo = new api.CustomsInfo({
    eel_pfc: 'NOEEI 30.37(a)',
    customs_certify: true,
    customs_signer: address.name,
    contents_type: 'gift',
    contents_explanation: '',
    restriction_type: 'none',
    restriction_comments: '',
    non_delivery_option: 'return',

    /* customs_items can be passed in as instances or ids.
    *  if the item does not have an id, it will be created. */
    customs_items: [
      CustomItem
    ],
  });
  customsInfo.save().then(results => {
    console.log(results)})

  const shipment = new api.Shipment({
    to_address: toAddress,
    from_address: fromAddress,
    parcel: parcel,
    customs_info: customsInfo

  });

  return shipment.save().then(s => {
    console.log(s.customs_info)
    console.log(s.id)
    s.regenerateRates()
      .then(sh => console.log(sh.rates, {
        depth: null,
      }))
      .catch(e => {
        console.log(e);
      });
    return s.buy(s.lowestRate(), 0); })


    ;



}

export const addShopifyOrders = functions.https.onRequest((request, response) => {
  var orders = JSON.parse(response.req.body.test);
  console.log(orders)

  for (let order of orders) {
    console.log(order)
    let invoice = {};
    invoice['discount'] = order['discount']
    invoice['shipping'] = order['shipping']
    invoice['objectID'] = Math.floor(order['id']).toString();
    invoice['date'] = order['date'];
    invoice['total'] = order['total_price'];
    if (order['paid'] == 'paid') {
      invoice['paid']  = true;
      invoice['paid2'] = true;
    } else {
      invoice['paid'] = order['paid']
    }
    if (order['note']) {
      invoice['note'] = order['note']
    }
    invoice['number'] = 'S'+order['Number']
    invoice['client'] = {};


    invoice['client']['name'] = order['client']['firstname'] ;
    invoice['client']['mail'] = order['client']['mail'];
    invoice['client']['address1'] = order['client']['address_line1'];

     if(order['client']['address_line2']) {invoice['client']['address2'] = order['client']['address_line2']};
    if(order['client']['zip']) {invoice['client']['zip'] = order['client']['zip']};
    invoice['client']['city'] = order['client']['city'];
    invoice['client']['country'] = order['client']['country'];


    invoice['articles'] = []
    for (let article of order.articles) {
      // console.log(article['Order fulfillement status'])
      let inv_art = {};
      inv_art['modele'] = article['title']
      inv_art['prix'] = article.price;
      inv_art['size'] = article['variantTitle']
      inv_art['quantity'] = article.quantity;
      invoice['articles'].push(inv_art);
      inv_art['refunded'] = article['Order fulfillement status']
    }
    console.log(invoice);
    admin.firestore().collection('invoices_v3').doc(invoice['objectID']).set(invoice).then().catch()
  }

});


export const exportRaffle = functions.https.onRequest((request, response) => {
  const json2csv = require("json2csv").parse;
  admin.firestore().collection('').get().then((snap) => {
    const docu = []
    snap.forEach(doc => {docu.push(doc.data())})
    const csv = json2csv(docu)

    response.setHeader(
      "Content-disposition",
      "attachment; filename=report.csv"
    )
    response.set("Content-Type", "text/csv")
    response.status(200).send(csv)
  }).catch()
})


exports.getLabel = functions.https.onRequest((req, res) => {
  return cors(req, res, () => {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'coproom.donotreply@gmail.com',
        pass: '@HERVETokengea1792'
      }
    });
    const params = req.body;
     return rp({
      uri: 'https://recaptcha.google.com/recaptcha/api/siteverify',
      method: 'POST',
      formData: {
        secret: '6LcmiH4UAAAAAOsFtzTHro9vcPw-64ROKcHZcC6v',
        response: params.valid
      },
      json: true
    }).then(result => {
      if (result.success) {
        createLabelForExport(params.address).then(ship => {
            return ship.convertLabelFormat('PDF')
          }

        ).then( sh => {
          const selectedRate = sh.selected_rate;
          const toAddress_final = sh.to_address;
          const fromAddress_final = sh.from_address;
          const parcel_final = sh.parcel;
          const track = sh.tracker;
          const label = sh.postage_label.label_pdf_url;
          const createdAt = sh.created_at;
          const id = sh.id;
          const shipment_final = {id, track, createdAt, selectedRate, toAddress_final, fromAddress_final, parcel_final, label};
          return shipment_final;
        })
          .then( shipment => {
            if (shipment['selectedRate']['rate'] < 140) {
              const mailOptions = {
                from: '"DO NOT REPLY" <shipping@cop-room.com>', // sender address
                to: params.address.email, // list of receivers
                subject: 'Shipping Label to coproom', // Subject line
                text: shipment.label, // plain text body
                html: createEmailHtml(shipment.label,params.address.country) // html body
              };
              transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                  console.log('error:')
                  console.log(error);
                }
                // Preview only available when sending through an Ethereal account
                console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

                // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
                // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
              });
            }

          res.status(200).send(shipment)
            return 'ok'
        })
          .catch(err => {console.log(err);
            res.status(200).send("Error, please try again, your mail or postal adress may have a problem")
          });
      }
      else {
        res.status(200).send("Recaptcha verification failed. Are you a robot?")
      }
    }).catch(reason => {
      console.log("Recaptcha request failure", reason)
      res.send("Recaptcha request failed.")
    })

  }); });

export const importFiches = functions.https.onRequest((request, response) => {
  admin.firestore().collection('fiches').get().then((snap) => {
      snap.forEach(doc => {

        const product = doc.data();

        // Add an 'objectID' field which Algolia requires

          }
      )
    }
  )
    .catch(err => {
      console.log(err)
    })
});

exports.onItemDeleted = functions.firestore.document('fiches/{ficheId}').onDelete((snap, context) => {
  const fiche = snap.data()
  if (fiche['linked']) {
    admin.firestore().collection('invoices_v3').doc(fiche['linked']['order']).get().then(res => {
      var data = res.data()
      delete data['articles'][fiche['linked']['index']]['fiche'];
      if (data['articles'][fiche['linked']['index']]['tva_intracom']) {
        delete data['articles'][fiche['linked']['index']]['tva_intracom']
      }
      if (data['articles'][fiche['linked']['index']]['tva_margin']) {
        delete data['articles'][fiche['linked']['index']]['tva_margin']
      }
      admin.firestore().collection('invoices_v3').doc(fiche['linked']['order']).update(data).then().catch()
    }).catch()
  }


});

exports.onItemUpdated = functions.firestore.document('fiches/{ficheId}').onUpdate((snap, context) => {
  const oldfiche = snap.before.data();
  const newfiche = snap.after.data();
  console.log(newfiche)
  console.log(newfiche['date']);
  console.log(newfiche['date'].toString())
  if (oldfiche['linked']) {
    console.log(oldfiche['linked']['order'])
    admin.firestore().collection('invoices_v3').doc(oldfiche['linked']['order']).get().then(res => {
      var data = res.data()
      data['articles'][oldfiche['linked']['index']]['fiche'] = newfiche;
      if (newfiche['type'] != 'cash receipt') {
        console.log('TVA sur marge')
        data['articles'][oldfiche['linked']['index']]['tva_margin'] = (data['articles'][oldfiche['linked']['index']]['prix']-newfiche['prix'])*0.2
      } else {
        console.log('TVA intracom')
        data['articles'][oldfiche['linked']['index']]['tva_intracom'] = (data['articles'][oldfiche['linked']['index']]['prix'])*0.2;
        data['articles'][oldfiche['linked']['index']]['tva_recup'] = data['articles'][oldfiche['linked']['index']]['prix']*0.2
      }
      admin.firestore().collection('invoices_v3').doc(oldfiche['linked']['order']).update(data).then().catch()
    }).catch()
  }
//   if (oldfiche['airtable_id'] && (oldfiche['modele'] != newfiche['modele'] || oldfiche['order_number'] != newfiche['order_number']
//    || oldfiche['prenom'] != newfiche['prenom'] || oldfiche['nom'] != newfiche['nom'] || oldfiche['prix'] != newfiche['prix']||  oldfiche['paid'] != newfiche['paid'])) {
//     return base('Firebase Achats').replace(newfiche['airtable_id'],{
//       "Item": newfiche['modele']+ ' - ' + newfiche['size'],
//       "Order Number": newfiche['order_number'],
//       "Date created": newfiche['date'].toISOString().substring(0,10),
//       "Acheteur": newfiche['prenom'] +' '+ newfiche['nom'],
//       "prix achat": parseInt(newfiche['prix']),
//       "Type achat" : newfiche['transaction'],
//       "Payé": newfiche['paid']
//     }).then(record => {
//       console.log(record)
//     }, error => {
//       console.error('error: ', error); return;
//
//     })
//
//
//
//
// } else {
//     return false;
//   }
});

exports.onItemCreated = functions.firestore.document('fiches/{ficheId}').onCreate((snap, context) => {

  // Get the note document
  const fiche = snap.data();
  console.log(snap.data());
  const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'coproom.donotreply@gmail.com',
          pass: '@HERVETokengea1792'
        }
      })
    if(!fiche.shipment) {
      let buff = new Buffer(snap.id).toString('base64');
      let qrcode = 'https://sell.cop-room.com/qrcode/'+buff
      const mailOptions = {
        from: '"DO NOT REPLY" <shipping@cop-room.com>', // sender address
        to: fiche['mail_paypal'], // list of receivers
        subject: 'Shipping instructions to coproom', // Subject line
        text: qrcode, // plain text body
        html: createMail('test', qrcode)
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log('error:')
          console.log(error);
        }
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
      });
    }

    }


);

export const addShopifyOrder = functions.https.onRequest((request, response) => {
  console.log(response.req.body.test)
  var order = JSON.parse(response.req.body.test);
  let invoice = {};
  invoice['objectID'] = order['id'];
  invoice['date'] = order['date'];
  invoice['total'] = order['total_price'];
  if (order['paid'] == 'paid') {
    invoice['paid']  = true
    invoice['paid2'] = true;
  }
  if (order['note']) {
    invoice['note'] = order['note']
  }
  invoice['number'] = 'S'+order['Number']
  invoice['client'] = {};


  invoice['client']['name'] = order['client']['firstname'] + ' ' + order['client']['lastname'];
  invoice['client']['mail'] = order['client']['mail'];
  invoice['client']['address1'] = order['client']['address_line1'];

  if(order['client']['address_line2']) {invoice['client']['address2'] = order['client']['address_line2']};
  if(order['client']['zip']) {invoice['client']['zip'] = order['client']['zip']};
  invoice['client']['city'] = order['client']['city'];
  invoice['client']['country'] = order['client']['country'];
  invoice['articles'] = []
  for (let article of order.articles) {
   let inv_art = {};
   inv_art['modele'] = article['title']
    inv_art['prix'] = article.price;
   inv_art['size'] = article['variantTitle']
    inv_art['quantity'] = article.quantity;
   invoice['articles'].push(inv_art);
  }
  console.log(invoice);
  admin.firestore().collection('invoices_v3').doc(invoice['objectID']).set(invoice).then().catch()
  response.status(200).send()
});
