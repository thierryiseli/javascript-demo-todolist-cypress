def gitversion = []

podTemplate(containers: [
        containerTemplate(name: 'docker', image: 'docker', command: 'cat', ttyEnabled: true),
        containerTemplate(name: 'gitversion', image: 'im5tu/netcore-gitversion:3-alpine', command: 'cat', ttyEnabled: true),
        containerTemplate(name: 'npm', image: 'node:current-alpine3.14', command: 'cat', ttyEnabled: true),
        containerTemplate(name: 'cypress', image: 'cypress/included:8.2.0', command: 'cat', ttyEnabled: true),
        containerTemplate(name: 'jdknode', image: 'timbru31/java-node:11-jdk', command: 'cat', ttyEnabled: true)],
        volumes: [
                hostPathVolume(mountPath: '/var/run/docker.sock', hostPath: '/var/run/docker.sock')
        ]) {
    node(POD_LABEL) {
        stage('Checkout') {
            checkout scm
        }

        container('gitversion') {
            stage('Set version') {
                def output = sh(returnStdout: true, script: 'dotnet-gitversion /output json')
                gitversion = readJSON text: output
                currentBuild.displayName = "${gitversion.MajorMinorPatch} (${currentBuild.displayName})"
                echo output
            }
        }

        container('npm') {
            stage('Build frontend') {
                withEnv([
                    'npm_config_cache=npm-cache',
                    'HOME=.',
                ]) {
                    sh 'npm install --production'
                    sh 'npm install snowpack@3.8.6 -g'
                    sh 'npm run build'
                }
            }
        }

        container('jdknode') {
            stage('SonarQube analysis') {
                def scannerHome = tool name: 'SonarQube'
                withSonarQubeEnv('SonarQube') {
                    sh "${scannerHome}/bin/sonar-scanner \
                    -Dsonar.projectKey=tyupch_javascript-demo-todolist \
                    -Dsonar.projectName=javascript-demo-todolist \
                    -Dsonar.organization=tyupch \
                    -Dsonar.sources=src \
                    -Dsonar.exclusions=src/serviceWorker.js \
                    -Dsonar.coverage.exclusions=src/**/*.*"
                }
            }

            stage('Quality Gate') {
                timeout(time: 1, unit: 'HOURS') {
                    def qg = waitForQualityGate()
                    if (qg.status != 'OK') {
                        error "Pipeline aborted due to quality gate failure: ${qg.status}"
                    }
                }
            }
        }

        stage('Push to GitHub Pages') {
            dir('gh-pages') {
                try {
                    withCredentials([usernamePassword(credentialsId: 'github',
                        usernameVariable: 'GIT_USERNAME',
                        passwordVariable: 'GIT_PASSWORD')]) {
                        sh 'git init .'
                        sh "git remote add -t gh-pages -f origin https://${GIT_USERNAME}:${GIT_PASSWORD}@github.com/tyupch/javascript-demo-todolist"
                        sh 'git config user.email thierry.iseli@tyup.ch'
                        sh 'git config user.name thierryiseli'
                        sh 'git checkout gh-pages'
                        sh 'cp -r ../build/* .'
                        sh 'cp -r ../config/github/* .'
                        sh "sed -i 's/--version--/${gitversion.MajorMinorPatch}/' ./serviceWorker.js"
                        sh "sed -i 's/--version--/${gitversion.MajorMinorPatch}/' ./config.json"
                        sh "sed -i 's/app.js/app.js?${gitversion.MajorMinorPatch}/' ./index.html"
                        sh "sed -i 's/app.css/app.css?${gitversion.MajorMinorPatch}/' ./index.html"
                        sh 'git add .'
                        sh "git commit -m 'Update github pages from build: ${currentBuild.displayName}'"
                        sh 'git push -u origin gh-pages'
                        }
                } catch (error) {
                    echo "Push failed, but if there are no changes, it's ok."
                }
            }
        }

        container('cypress') {
            stage('Run bdd tests') {
                sh 'npm install cypress-cucumber-preprocessor@4.2.0 multiple-cucumber-html-reporter@1.18.0'
                try {
                    sh 'npx cypress run --browser chrome --env HOST=https://tyupch.github.io/javascript-demo-todolist/'
                    sh 'node cucumber-html-report.mjs'
                } catch (e) {
                    throw e;
                } finally {
                    archiveArtifacts artifacts: 'cypress/report/**/*.*', fingerprint: true
                }
            }
        }
    }
}
