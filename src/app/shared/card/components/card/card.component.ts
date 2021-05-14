import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef,ViewEncapsulation } from '@angular/core';
import { IHeroes } from 'src/app/components/heroes/heroes.interface';

@Component({
  selector: 'card-component',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CardComponent implements OnInit {
    @Input() heroData: IHeroes;
    @Output() onChangedGender = new EventEmitter<boolean>();


/*     @ViewChild('checkBox', {static: false}) checkBoxRef: ElementRef */

    heroIsActivated: boolean;

    constructor() { }

    ngOnInit(): void {
    }

    changeGender() {
        this.heroData.gender = true;
        this.onChangedGender.emit();
    }

    checkAge() {
        if(this.heroData.age < 18) {
            return true;
        }
        return false;
    }

/*     focusCheckboxes() {
        console.log(this.checkBoxRef.nativeElement.checked)
    } */

    activateThisHero(): void {
        if(this.heroData.age > 18) {
            this.heroIsActivated = !this.heroIsActivated;
        }
    }
}
