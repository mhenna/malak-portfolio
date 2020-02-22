import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'malak-portfolio';

  constructor(private router: Router) { }

  navigate(fragment) {
    fragment.scrollIntoView({ behavior: 'smooth' });
  }

  test() {
    window.open('../assets/Portfolio_Content_Malak/Malak_CV.pdf', '_blank');
  }

  // generatePDFLink() {
  //   var blobData = this.convertBase64ToBlobData(model)
  //   if (window.navigator && window.navigator.msSaveOrOpenBlob) { //IE
  //     window.navigator.msSaveOrOpenBlob(blobData, name);
  //   } else { // chrome
  //     const blob = new Blob([blobData], { type: 'application/pdf' });
  //     const url = window.URL.createObjectURL(blob);
  //     const link = document.createElement('a');
  //     link.href = url;
  //     var pdfLink = url;
  //     link.download = name;
  //     return pdfLink;
  //   }
  // }

  // convertBase64ToBlobData(base64Data: string, contentType: string = 'application/pdf', sliceSize = 512) {
  //   const byteCharacters = atob(base64Data);
  //   const byteArrays = [];

  //   for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
  //     const slice = byteCharacters.slice(offset, offset + sliceSize);

  //     const byteNumbers = new Array(slice.length);
  //     for (let i = 0; i < slice.length; i++) {
  //       byteNumbers[i] = slice.charCodeAt(i);
  //     }

  //     const byteArray = new Uint8Array(byteNumbers);

  //     byteArrays.push(byteArray);
  //   }

  //   const blob = new Blob(byteArrays, { type: contentType });
  //   return blob;
  // }
}
