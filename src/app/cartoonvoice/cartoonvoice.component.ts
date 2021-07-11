import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cartoonvoice',
  templateUrl: './cartoonvoice.component.html',
  styleUrls: ['./cartoonvoice.component.scss']
})
export class CartoonvoiceComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
    

  }
 myFunction() {
    console.log('hello');
    dtlarea:String;

 // dtlarea=document.getElementById("details");
//dtlarea.style.display="none";
dtltxt:String;

var mytimer = setInterval(function() {
  
    var voices = speechSynthesis.getVoices();
    //console.log(voices);
    if (voices.length !== 0) {

      var msg = new SpeechSynthesisUtterance();

      msg.rate = 1; // 0.1 to 10
      msg.pitch = 1; //0 to 2
      msg.volume = 1; // 0 to 1
       
      msg.text = 'hello'; 
      msg.lang =  'hi-IN';
       
      for(var i=0;i<voices.length;i++){

          this.dtltxt+=voices[i].lang+' '+voices[i].name+'\n';
         
          if(voices[i].lang==msg.lang) {
            msg.voice = voices[i]; // Note: some voices don't support altering params
           // msg.voiceURI = voices[i].voiceURI;
            // break;
          }
      }
       
      msg.onend = function(e) {
        console.log('Finished in ' + ' seconds.');
        //dtlarea.value=dtltxt; 
      };
       
      speechSynthesis.speak(msg);

      clearInterval(mytimer);
      
    }
}, 1000);

  }
}
