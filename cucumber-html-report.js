const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: './cypress/result/',
	reportPath: './cypress/report/',
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'Todolist'}
        ]
    }
});