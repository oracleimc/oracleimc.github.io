
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';



@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


    title = 'cloud-assessment-tool';

    mailText = '';
    htmlContent = '';
    overview = '';

    typesoptions: Array<Object> = [
        {
            type: 'SOLUTION',
            display_value: 'Solution'
        },
        {
            type: 'SERVICE',
            display_value: 'Service'
        },
        {
            type: 'ISV SaaS',
            display_value: 'ISV SaaS'
        },
        {
            type: 'CSM Go-Live',
            display_value: 'CSM Go-Live'
        },
        {
            type: 'POC',
            display_value: 'POC'
        }
    ];


    targetpersonas: Array<Object> = [
        {
            persona: 'Business',
            display_value: 'Business'
        },
        {
            persona: 'IT',
            display_value: 'IT'
        }
    ];
    industries: Array<Object> = [
        {
            industry: 'Aerospace & Defense',
            id: 'aerospace_defense'
        },
        {
            industry: 'Automotive',
            id: 'automotive'
        },
        {
            industry: 'Chemicals',
            id: 'chemicals'
        },
        {
            industry: 'Communications',
            id: 'telco'
        },
        {
            industry: 'Consumer Goods',
            id: 'consumer_goods'
        },
        {
            industry: 'Cross Industry',
            id: 'x-ind'
        },
        {
            industry: 'Education & Research',
            id: 'education'
        },
        {
            industry: 'Engineering & Construction',
            id: 'engineering'
        },
        {
            industry: 'Financial Services',
            id: 'fs'
        },
        {
            industry: 'Gaming & Casinos',
            id: 'gambling'
        },
        {
            industry: 'Healthcare',
            id: 'healthcare'
        },
        {
            industry: 'High Technology',
            id: 'high_technology'
        },
        {
            industry: 'Hospitality',
            id: 'hospitality'
        },
        {
            industry: 'Industrial Manufacturing',
            id: 'manufacturing'
        },
        {
            industry: 'Insurance',
            id: 'insurance'
        },
        {
            industry: 'Life Sciences',
            id: 'life_sciences'
        },
        {
            industry: 'Media & Entertainment',
            id: 'media_entertainment'
        },
        {
            industry: 'Natural Resources',
            id: 'natural_resources'
        },
        {
            industry: 'Oil & Gas',
            id: 'oilgas'
        },
        {
            industry: 'Professional Services',
            id: 'professional_services'
        },
        {
            industry: 'Public Sector',
            id: 'public'
        },
        {
            industry: 'Retail',
            id: 'retail'
        },
        {
            industry: 'Travel & Transportation',
            id: 'transport'
        },
        {
            industry: 'Utilities',
            id: 'utilities'
        },
        {
            industry: 'Wholesale Distribution',
            id: 'wholesale_distribution'
        }
    ];


    products: Array<Object> = [
        {
            product_name: 'API Catalog Cloud Service',
            id: 'APICS'
        },
        {
            product_name: 'API Platform',
            id: 'APIPCS'
        },
        {
            product_name: 'Analytics Cloud',
            id: 'OAC'
        },
        {
            product_name: 'Application Container',
            id: 'ACCS'
        },
        {
            product_name: 'Application Performance Monitoring Cloud',
            id: 'APMCS'
        },
        {
            product_name: 'BareMetal Compute/Storage/Network',
            id: 'BMCOMPUTE'
        },
        {
            product_name: 'Big Data Cloud',
            id: 'BDCS-CE'
        },
        {
            product_name: 'Big Data Cloud Service',
            id: 'BDCS'
        },
        {
            product_name: 'Big Data SQL Cloud Service',
            id: 'BDSQLCS'
        },
        {
            product_name: 'Blockchain Platform',
            id: 'ABLCKCS'
        },
        {
            product_name: 'Cloud Access Security Broker',
            id: 'CASB'
        },
        {
            product_name: 'Configuration and Compliance Cloud Service',
            id: 'CCCS'
        },
        {
            product_name: 'Container',
            id: 'IAASCON'
        },
        {
            product_name: 'Container Pipelines',
            id: 'CPIPE'
        },
        {
            product_name: 'Content & Experience',
            id: 'CECS'
        },
        {
            product_name: 'DIVA Cloud',
            id: 'DIVA'
        },
        {
            product_name: 'Data Integration Cloud',
            id: 'DICS'
        },
        {
            product_name: 'Data Integration Platform',
            id: 'GGCS'
        },
        {
            product_name: 'Database',
            id: 'DBCS'
        },
        {
            product_name: 'Database Backup',
            id: 'DBBCKP'
        },
        {
            product_name: 'Developer Cloud',
            id: 'DEVCS'
        },
        {
            product_name: 'Digital Assistant (Chatbots)',
            id: 'DACS'
        },
        {
            product_name: 'Event Hub Cloud Service',
            id: 'EHCS'
        },
        {
            product_name: 'Exadata Cloud Service',
            id: 'EXADBCS'
        },
        {
            product_name: 'Exadata Cloud at Customer',
            id: 'EXACAC'
        },
        {
            product_name: 'IT Analytics',
            id: 'ITACS'
        },
        {
            product_name: 'Identity Cloud Service',
            id: 'IDMCS'
        },
        {
            product_name: 'Infrastructure Monitoring Cloud',
            id: 'IMCS'
        },
        {
            product_name: 'Integration Cloud',
            id: 'ICS'
        },
        {
            product_name: 'IoT',
            id: 'IOTCS'
        },
        {
            product_name: 'Java',
            id: 'JCS'
        },
        {
            product_name: 'Log Analytics',
            id: 'LACS'
        },
        {
            product_name: 'Messaging Cloud',
            id: 'MSGCS'
        },
        {
            product_name: 'Mobile Hub',
            id: 'MCCS'
        },
        {
            product_name: 'MySQL Cloud Service',
            id: 'MYSQLCS'
        },
        {
            product_name: 'NoSQL Cloud Service',
            id: 'ANOSQL'
        },
        {
            product_name: 'OCI - Machine Learning',
            id: 'OCI-ML'
        },
        {
            product_name: 'OCI - Oracle Cloud Infrastructure',
            id: 'OCI'
        },
        {
            product_name: 'Orchestration',
            id: 'ORCHCS'
        },
        {
            product_name: 'Process Automation',
            id: 'PACS'
        },
        {
            product_name: 'Ravello',
            id: 'IAASRAVELLO'
        },
        {
            product_name: 'SOA',
            id: 'SOACS'
        },
        {
            product_name: 'SaaS - all products',
            id: 'SaaS'
        },
        {
            product_name: 'Security Monitoring and Analytics',
            id: 'SMACS'
        },
        {
            product_name: 'Self-Service integration',
            id: 'SSICS'
        },
        {
            product_name: 'VM Compute/Network/Storage',
            id: 'IAASCOMPUTE'
        },
        {
            product_name: 'Visual Builder',
            id: 'AVBCS'
        },
        {
            product_name: 'WebCenter Portal',
            id: 'WCPCS'
        }

    ];
    tagoptions: Array<Object> = [
        {
            tag_name: 'Emerging Technology',
            id: 'Emerging Technology'
        },
        {
            tag_name: 'ISV',
            id: 'ISV'
        },
        {
            tag_name: 'Land, Use, Expand ',
            id: 'Land, Use, Expand'
        },
        {
            tag_name: 'Machine Learning',
            id: 'Machine Learning'
        }
    ];

    markets: Array<Object> = [

        {
            market_name: 'APAC - ANZ',
            market_id: 'ANZ'
        },
        {
            market_name: 'APAC - ASEAN',
            market_id: 'ASEAN'
        },
        {
            market_name: 'APAC - CN',
            market_id: 'CN'
        },
        {
            market_name: 'APAC - HKTW',
            market_id: 'HKTW'
        },
        {
            market_name: 'APAC - IN',
            market_id: 'IN'
        },
        {
            market_name: 'APAC - KR',
            market_id: 'KR'
        },
        {
            market_name: 'ECEMEA South - CIS',
            market_id: 'CIS'
        },
        {
            market_name: 'ECEMEA South - ECE',
            market_id: 'ECE'
        },
        {
            market_name: 'ECEMEA South - MEA',
            market_id: 'MEA'
        },
        {
            market_name: 'ECEMEA South - South',
            market_id: 'South'
        },
        {
            market_name: 'UKII North - ALPS',
            market_id: 'ALPS'
        },
        {
            market_name: 'UKII North - Benelux',
            market_id: 'Benelux'
        },
        {
            market_name: 'UKII North - Germany',
            market_id: 'Germany'
        },
        {
            market_name: 'UKII North - Nordics',
            market_id: 'Nordics'
        },
        {
            market_name: 'UKII North - UKII',
            market_id: 'UKII'
        }
    ];


    formGroup: FormGroup;
    isLinear = true;
    firstFormGroup: FormGroup;
    //secondFormGroup: FormGroup;



    /** Returns a FormArray with the name 'formArray'. */
    //get formArray(): AbstractControl | null { return this.formGroup.get('formArray'); }

    // tslint:disable-next-line:variable-name
    constructor(private _formBuilder: FormBuilder) { }

    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            companyName: ['', Validators.required],
            partnerID: ['', Validators.required],
            type: ['', Validators.required],
            targetPersona: ['', Validators.required],
            title: ['', Validators.required],
            overview: ['', Validators.required],
            elevatorPitch: ['', Validators.required],
            painpoints: ['', Validators.required],
            keymessages: ['', Validators.required],
            resources: ['', Validators.required],
            salesContact: ['', Validators.required],
            industries: ['', Validators.required],
            products: ['', Validators.required],
            tags: ['', Validators.required],
            markets: ['', Validators.required],
            references: ['', Validators.required],
            logourl: ['', Validators.required]

        });

    }
//     AngularEditor for simple native WYSIWYG editor for Angular 8+. Rich Text editor component for Angular.
    config: AngularEditorConfig = {
        editable: true,
        spellcheck: true,
        height: '15rem',
        minHeight: '5rem',
        placeholder: 'Enter text here...',
        translate: 'no',
        defaultFontName: 'Times New Roman',
        customClasses: [
            {
                name: "quote",
                class: "quote",
            },
            {
                name: 'redText',
                class: 'redText'
            },
            {
                name: "titleText",
                class: "titleText",
                tag: "h1",
            },
        ]
    };





    sendToJSON() {
        
        const resource = JSON.stringify(this.firstFormGroup.value);
        console.log('Submit Button clicked: ' + resource);
        this.mailMe(resource);


    }

    mailMe(res) {
        this.mailText = 'mailto:jernej.kase@oracle.com?subject=JSONfiles&body=' + res;
        window.location.href = this.mailText;
    }
}

