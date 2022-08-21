import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatchService } from 'app/services/match/match.service';

@Component({
    selector     : 'example',
    templateUrl  : './example.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls  : ['./example.component.scss']
})
export class ExampleComponent implements OnInit
{
    
    constructor()
    {
    }
    ngOnInit(): void{

    }
   
}
