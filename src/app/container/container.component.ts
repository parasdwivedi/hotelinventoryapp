import { AfterContentInit, Component, ContentChild, OnInit, ViewChild } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'hinv-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit, AfterContentInit {
  @ContentChild(EmployeeComponent) employee!: EmployeeComponent;
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  ngAfterContentInit(): void {
    // throw new Error('Method not implemented.');
    console.log(this.employee);
    this.employee.empName = "John Rick"
  }

}
