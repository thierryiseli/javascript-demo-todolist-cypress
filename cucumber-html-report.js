const report = require('multiple-cucumber-html-reporter');
const fs = require('fs');

const mapOs = (os) => {
    if(os.startsWith('win')) {
        return 'windows';
    } else if (os.startsWith('osx')) {
        return 'osx';
    } else if (os.startsWith('linux')) {
        return 'linux';
    } else if (os.startsWith('ubuntu')) {
        return 'ubuntu';
    } else if (os.startsWith('android')) {
        return 'android';
    } else if (os.startsWith('ios')) {
        return 'ios';
    }
};

fs.readFile('cypress/.run/results.json', function read(err, data) {
    if (err) {
        throw err;
    }
    var runInfos = JSON.parse(data);
    report.generate({
        jsonDir: './cypress/result/',
        reportPath: './cypress/report/',
        metadata:{
            browser: {
                name: runInfos.browserName,
                version: runInfos.browserVersion
            },
            device: 'Cypress',
            platform: {
                name: mapOs(runInfos.osName)
            }
        },
        customData: {
            title: 'Run info',
            data: [
                {label: 'Project', value: 'Todolist'},
                {label: 'Execution Start Time', value: new Date(runInfos.startedTestsAt).toLocaleString()},
                {label: 'Execution End Time', value: new Date(runInfos.endedTestsAt).toLocaleString()}
            ]
        }
    });
});