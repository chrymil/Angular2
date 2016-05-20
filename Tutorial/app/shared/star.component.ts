/**
 * Created by chrysismylonas on 19/05/16.
 */
import  {Component, OnChanges, Input, EventEmitter, Output} from 'angular2/core';

@Component({
    selector: 'ai-star',
    templateUrl: 'app/shared/star.component.html',
    styleUrls: ['app/shared/star.component.css']
})

export class StarComponent implements OnChanges{
    starWidth: number;
    @Input() rating: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void{
        this.starWidth = this.rating * 86 / 4.5;
    }

    onClick(){
        this.ratingClicked.emit(`the rating ${this.rating} was clicked`);
    }
}