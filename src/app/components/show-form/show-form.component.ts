import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Show } from '../../interfaces/show.interface';

@Component({
  selector: 'app-show-form',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './show-form.component.html',
  styleUrl: './show-form.component.css'
})
export class ShowFormComponent {

  @Input()
  public editing: boolean = false;

  @Input()
  public show: Show= {
    description: "",
    episodes: 0,
    genre: "",
    image: "",
    likes: [],
    name: "",
    year: 0,
  };

  @Output()
  public updateShow : EventEmitter<Show> = new EventEmitter();

  @Output()
  public createElement : EventEmitter<Show> = new EventEmitter();

  public onFormSubmit(form: NgForm): void {
    if(form.valid && !this.editing){
      const newShow: Show = {
          description: form.value.description,
          episodes: 0,
          genre: "",
          image: form.value.image,
          likes: [],
          name: form.value.name,
          year: 0
      }
      this.createElement.emit(newShow);
      form.resetForm();
  }else if(form.valid && this.editing){
      const newShow: Show = {
        description: form.value.description,
        episodes: 0,
        genre: "",
        image: form.value.image,
        likes: [],
        name: form.value.name,
        year: 0
    }
    this.updateShow.emit(newShow);
    form.resetForm();
  } else {
    console.log("Faltan datos");
  }
  }
}
