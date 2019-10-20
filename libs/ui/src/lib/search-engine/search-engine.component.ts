import { FlightModel } from '../../../../shared/src';
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'enterprise-app-search-engine',
  templateUrl: './search-engine.component.html',
  styleUrls: ['./search-engine.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchEngineComponent {
  @Input() flightModels: FlightModel[];
  constructor() {}

  ngOnInit() {}
}
