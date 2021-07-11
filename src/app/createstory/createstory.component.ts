import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-createstory',
  templateUrl: './createstory.component.html',
  styleUrls: ['./createstory.component.scss']
})
export class CreatestoryComponent implements OnInit {

  constructor(private as: AuthService, private router: Router, private db: AngularFirestore) { }


  commplace = "";
  addstr: boolean = false;
  addcomment: boolean = false;
  viewstr: boolean = false;
  randomstory: any;
  randcomments: any;

  mode = [false, false, false]

  story:any = "";
  comments: any;
  allstories: any;
  user: any;
  ngOnInit(): void {
    this.getstories();
    // this.getdefaultstory();
    this.as.getUserState().subscribe(user => {
      if(user == null) {this.user = null}
      else{
        this.user = user;
        // this.as.getprofile(user.uid).subscribe((res:any) => {
        //   this.user["name"] = res.payload.data().name;
        // })
        
      }
      
    })
  }

  storyform = new FormGroup({name: new FormControl(), context: new FormControl()})
  replyform = new FormGroup({replyin: new FormControl()})

  getstories(){
    this.db.collection("Stories").snapshotChanges().subscribe(res => {
      this.allstories = res;
    })
  }

  showstory(story:any){
    this.changemode(1);
    this.story = story; 
    this.getstory();
    
  }

  getstory(){
    this.db.collection("Stories").doc(this.story.payload.doc.id).collection("comments").snapshotChanges().subscribe(res => {
      if(res.length == 0 || res == []){this.commplace = "Add the first sentence"; this.comments = [];}
      else{
        this.comments = res[res.length - 1];
        this.commplace = "Add the next sentence";
      }
      
      console.log(res)
  })
}

  addstory(){
    if(this.user == null){
      this.router.navigate(['/login']);
    }
    else{
      this.db.collection("Stories").add({"uid": this.user.uid, "name": this.storyform.get("name").value, "context": this.storyform.get("context").value});
      this.storyform.get("name").setValue("");
      this.storyform.get("context").setValue("");
    }
  }

  reply(){
    if(this.user == null){
      this.router.navigate(['/login']);
    }
    else{
      this.db.collection("Stories").doc(this.story.payload.doc.id).collection("comments").doc(Date.now().toString()).set({"uid": this.user.uid, "comment": this.replyform.get("replyin").value});
      this.replyform.get("replyin").setValue("");
    }
  }

  changemode(mode){
    var ind = -1;
    for(let i of this.mode){ind += 1; this.mode[ind] = false;}
    this.mode[mode] = true;
  }

  random(){
    this.changemode(2);
    console.log(this.mode[2])
    this.randcomments = [];
    let rand = (Math.trunc(Math.random()*this.allstories.length));
    console.log(rand);
    this.randomstory = this.allstories[rand];
    this.getrandomcomments(this.randomstory.payload.doc.id);
    
    // console.log(this.randomstory.payload.doc.data().comments);
  }

  getrandomcomments(id){
    this.db.collection("Stories").doc(id).collection("comments").snapshotChanges().subscribe(res => {
      this.randcomments = res;
      console.log(this.randcomments)
  })
  }

}
