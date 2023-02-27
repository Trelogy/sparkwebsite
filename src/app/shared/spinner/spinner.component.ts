import { Component } from '@angular/core';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-spinner',
  template: `
  <div class="spinner-overlay" *ngIf="isLoading$ | async">
    <div class="aiblob">
    <lottie-player src="./assets/animation/aiblob.json" background="transparent" speed="1" loop autoplay>
    </lottie-player>
    </div>
  </div>`,
  styleUrls: ['./spinner.component.css'],
})
export class SpinnerComponent {
  isLoading$ = this.spinnerSvc.isloading$;

  constructor(private spinnerSvc: SpinnerService) { }

}
