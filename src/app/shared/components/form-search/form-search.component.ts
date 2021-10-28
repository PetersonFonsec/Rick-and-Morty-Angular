import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { debounceTime } from 'rxjs/operators';

import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.scss'],
})
export class FormSearchComponent implements OnInit {
  @Output() search = new EventEmitter<string>();
  formGroup!: FormGroup;
  faSearch = faSearch;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      search: [''],
    });

    this.handleSearch();
  }

  handleSearch() {
    const search = this.formGroup.get('search');
    search?.valueChanges.pipe(debounceTime(500)).subscribe((event) => {
      this.search.emit(event);
    });
  }
}
