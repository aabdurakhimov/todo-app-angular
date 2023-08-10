import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FilterService } from '@progress/kendo-angular-grid';
import {
  CompositeFilterDescriptor,
  FilterDescriptor,
} from '@progress/kendo-data-query';

@Component({
  selector: 'dropdownlist-filter',
  templateUrl: './dropdownlist-filter.component.html',
  styleUrls: ['./dropdownlist-filter.component.scss'],
})
export class DropdownlistFilterComponent<T> {
  @Input() isPrimitive: boolean = true;
  @Input() public currentFilter!: CompositeFilterDescriptor;
  @Input() public data: Array<T> = [];
  @Input() public filterService!: FilterService;
  @Input() public textField!: string;
  @Input() public valueField!: string;
  @Input() public field: string = '';
  @Output() public valueChange = new EventEmitter<T[]>();

  public showFilter = true;
  public value!: T;

  public onValueChange(value: T): void {
    this.filterService.filter({
      filters: [{ field: this.field, operator: 'eq', value: value }],
      logic: 'and',
    });
  }

  public ngAfterViewInit(): void {
    const currentColumnFilter = this.currentFilter.filters.find(
      (filter) => (filter as FilterDescriptor).field === this.field
    );
    if (currentColumnFilter) {
      this.value = (currentColumnFilter as FilterDescriptor).value;
    }
  }
}
