import { Component,Input, forwardRef} from '@angular/core';
import { ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

type inputTypes ="text" | "email" | "password"

@Component({
  selector: 'app-primary-input',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(()=> PrimaryInputComponent),
      multi:true
    }
  ],
  templateUrl: './primary-input.component.html',
  styleUrl: './primary-input.component.scss'
})
export class PrimaryInputComponent implements ControlValueAccessor{
  @Input() type: inputTypes ="text";
  @Input() placeholder: string="";
  @Input() label: string="";
  @Input() inputName: string="";



  value: string = ''
  onChange: any=() =>{}
  onTouchend: any=() =>{}

  onInput(event: Event){
    const value = (event.target as HTMLInputElement).value
    this.onChange(value)
  }  

  writeValue(value: any): void {
    this.value= value      
  }

  registerOnChange(fn: any): void {
      this.onChange = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouchend = fn
  }

  setDisabledState(isDisabled: boolean): void {}

}
