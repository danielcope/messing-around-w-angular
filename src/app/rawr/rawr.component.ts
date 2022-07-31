import { Component, OnInit, NgModule } from '@angular/core';
import { MathFunc } from '../../assets/enum'

@Component({
  selector: 'app-rawr',
  templateUrl: './rawr.component.html',
  styleUrls: ['./rawr.component.css']
})

export class RawrComponent implements OnInit {
  constructor() {
  }

  count: number = 0
  mathfunc = MathFunc

  ngOnInit(): void {
  }

  changeCount = (func: MathFunc.ADD | MathFunc.SUB) => {
    if (func === MathFunc.ADD) this.count++
    if (func === MathFunc.SUB) this.count--
  }
}
