import { ViewportScroller } from '@angular/common';
import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  // Slider Images Here
  
  Aston_Slide = [
    {thumbImage: "../../../assets/icons/Aston_2.png"}, 
    {thumbImage: '../../../assets/images/teams/Aston2.jpg'},
    {thumbImage: '../../../assets/images/teams/Aston3.jpg'},
  ];

  Leicester_Slide = [
    {thumbImage: "../../../assets/icons/Leicester2.png"}, 
    {thumbImage: '../../../assets/images/teams/UOL2.jpg'},
    {thumbImage: '../../../assets/images/teams/UOL3.jpg'},
  ];

  Loughborough_Slide = [
    {thumbImage: "../../../assets/icons/Loughborough2.png"}, 
    {thumbImage: '../../../assets/images/teams/Loughborough2.jpg'},
    {thumbImage: '../../../assets/images/teams/Loughborough3.jpg'}
  ];

  Brunel_Slide = [
    {thumbImage: "../../../assets/icons/Brunel2.png"}, 
    {thumbImage: '../../../assets/images/teams/Brunel2.jpg'},
    {thumbImage: '../../../assets/images/teams/Brunel3.jpeg'},
  ];

  UCL_Slide = [
    {thumbImage: "../../../assets/icons/UCL2.png"}, 
    {thumbImage: '../../../assets/images/teams/UCL2.jpg'},
    {thumbImage: '../../../assets/images/teams/UCL3.jpg'},
  ];

  Nottingham_Slide = [
    {thumbImage: "../../../assets/icons/Nottingham2.png"}, 
    {thumbImage: '../../../assets/images/teams/Nottingham2.jpg'},
    {thumbImage: '../../../assets/images/teams/Nottingham3.jpeg'},
  ];

  Newcastle_Slide = [
    {thumbImage: "../../../assets/icons/Newcastle2.png"}, 
    {thumbImage: '../../../assets/images/teams/Newcastle2.jpg'},
    {thumbImage: '../../../assets/images/teams/Newcastle3.jpg'},
  ];

  Manchester_Slide = [
    {thumbImage: "../../../assets/icons/Manchester2.png"}, 
    {thumbImage: '../../../assets/images/teams/Manchester2.jpg'},
    {thumbImage: '../../../assets/images/teams/Manchester3.jpg'},
  ];

  Durham_Slide = [
    {thumbImage: "../../../assets/icons/Durham2.png"}, 
    {thumbImage: '../../../assets/images/teams/Durham2.jpg'},
    {thumbImage: '../../../assets/images/teams/Durham3.jpg'},
  ];

  Birmingham_Slide = [
    {thumbImage: "../../../assets/icons/UOB2.png"}, 
    {thumbImage: '../../../assets/images/teams/UOB2.jpg'},
    {thumbImage: '../../../assets/images/teams/UOB3.jpg'},
  ];

  constructor(private route:Router, private router: ActivatedRoute,
    private scroll: ViewportScroller) { }

    @ViewChild('h1')
    h1!: ElementRef;
    team!:string;

  ngOnInit(): void {

    this.team = this.router.snapshot.queryParamMap.get('team');
    console.log('tesm..........',this.team)
    if(this.team)
    {
      setTimeout(() => {
        document.getElementById(this.team)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest"
        });
      }, 500);
    
    }
 
    // this.get_id.nativeElement.scrollIntoView({behavior: 'smooth'});

    document.getElementById(this.router.snapshot.params.id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });

  }
  Loughborough:boolean=true;
  Aston:boolean=true;
  Leicester:boolean=true;
  Brunel:boolean=true;
  UCL:boolean=true;
  Nottingham:boolean=true;
  Newcastle:boolean=true;
  Manchester:boolean=true;
  Durham:boolean=true;
  Birmingham:boolean=true;

  isReadMore = true;
  num: any;
  seebtn: any;
  showText(data: any) {
    if(this.num==data)
    {
      this.num= 0;
    }
    else
     this.num= data;
   
  }



  onClick(): void {
    // document.getElementById('')?.scrollIntoView({behavior: 'smooth'});
    this.h1.nativeElement.scrollIntoView({behavior: 'smooth'});
    // this.route.navigate();
    this.route.navigateByUrl('/teams');
  }



}
