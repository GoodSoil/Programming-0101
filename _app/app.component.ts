import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
<div class='container'>
  <div class='row'>
    <div class='col-md-12'>
    <site-layout domainUrl="CPSC-1012.github.io" rootPath="" bugReportUrl="https://github.com/GoodSoil/Programming-0101/issues/new"></site-layout>
    </div>
  </div>
</div>
`
})
export class AppComponent {
}
//<site-layout domainUrl="GoodSoil.github.io" rootPath="/Programming-0101" bugReportUrl="https://github.com/GoodSoil/Programming-0101/issues/new"><site-layout>