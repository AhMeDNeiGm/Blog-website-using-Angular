import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentExtractConverter {

// Regex for can get element tag from content 
imgRegex = /<img[^>]+src="data:image\/(jpeg|png);base64,([^"]+)">/g;

  constructor() { }

    //Getting Base64 image from body then convert it to file using base64File
    exractImage(bodyBlog:string){
      const matches = bodyBlog.matchAll(this.imgRegex);
      let file: File[] = []; 
      for (const match of matches) {
        let base64Data = match[2];
        const filename = `image${Date.now()}.${match[1]}`; 
        file.push(this.base64ToFile(base64Data,filename,`image/${match[1]}`));
      }
      return file;
    }


      // Convert Base64 to file type to can upload it 
  base64ToFile(base64Data: string, filename: string, contentType: string): File {

    // Convert base64 data to Blob
    const byteCharacters = atob(base64Data);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: contentType });
  
    // Construct File object from Blob
    const file = new File([blob], filename, { type: contentType });
    return file;
  }

}
