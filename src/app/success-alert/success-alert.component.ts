import { Component } from '@angular/core';

@Component({
    selector: 'app-success-alert',
    template: `
    <div class="alert-success">Hurey</div>
    `,
    styles: [`
    .alert-success {
        color: red;
    }
    `]
})

export class SuccessAlertComponent {

}