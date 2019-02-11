import { Component, OnInit } from '@angular/core';
import { style } from '@angular/animations';

@Component({
    selector: 'app-dashboard-crm',
    templateUrl: './dashboard-crm.component.html',
    styleUrls: ['./dashboard-crm.component.scss']
})

export class DashboardCrmComponent implements OnInit {

    public dashCard = [
        { colorDark: '#018DB7', colorLight: '#018DB7',  title: 'Overview', icon: 'dashboard'},
        { colorDark: '#A3A0FB', colorLight: '#A3A0FB', number: 567, title: 'Total Emplyees', icon: 'new_releases' },
        { colorDark: '#00A85B', colorLight: '#00A85B', number: 50000, title: 'Gross Profit', icon: 'assignments' },
        { colorDark: '#F88070', colorLight: '#F88070', number: 20, title: 'Ongoing Project', icon: 'account_balance' }
    ];

    tableData = [
        { country: 'India', sales: 5400, percentage: '40%' },
        { country: 'Us', sales: 3200, percentage: '30.33%' },
        { country: 'Australia', sales: 2233, percentage: '18.056%' },
        { country: 'Spaim', sales: 600, percentage: '6%' },
        { country: 'China', sales: 200, percentage: '4.50%' },
        { country: 'Brazil', sales: 100, percentage: '2.50%' },
    ];

    constructor() { }

    ngOnInit() {
    }

}
