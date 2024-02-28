// Jenkins Pipeline Script

// Define the pipeline to run on any available agent
pipeline {
    agent any

    // Define stages for the pipeline
    stages {
        // Stage: Checkout
        stage("Checkout") {
            steps {
                // Check out the source code from the configured source code management (SCM) system
                checkout scm
            }
        }

        // Stage: Test
        stage("Test") {
            steps {
                // Install npm dependencies using sudo (may require elevated privileges)
                sh "npm install"

                // Run npm test to execute the tests
                sh "npm test"
            }
        }

        // Stage: Build
        stage("Build") {
            steps {
                // Run npm build to build the project
                sh "npm run build"
            }
        }
    }
}
