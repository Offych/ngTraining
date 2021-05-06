import { ValidatorFn, AbstractControl } from '@angular/forms';

export class AgeValidator {
    static age(min: number, max: number): ValidatorFn {
        return (c: AbstractControl): { [key: string] : boolean } | null => {
            if( c.value < min || c.value > max ) {
                return { 'age' : true }
            }
            return null;
        };
    }
}