pipeline {
  agent any

  environment {
    IMAGE_NAME   = "varma8k8k/subhadrafoods"
    GCP_PROJECT  = "cultivated-pen-464409-p5"
    CLUSTER_NAME = "subhadrafoods-cluster"
    REGION       = "asia-south2"
  }

  stages {
    stage('Clone Code') {
      steps {
        git branch: 'main', url: 'https://github.com/varma1316/Subhadrafoods.git'
      }
    }

    stage('Build Docker Image') {
      steps {
        sh 'docker build -t $IMAGE_NAME:latest .'
      }
    }

    stage('Push Docker Image to Docker Hub') {
      steps {
        withCredentials([usernamePassword(credentialsId: 'docker-login-username', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
          sh '''
            echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
            docker push $IMAGE_NAME:latest
          '''
        }
      }
    }

    stage('Provision Infra with Terraform') {
       when {
    changeset "**/terraform/**"
  }
      steps {
        dir('terraform') {
          withCredentials([file(credentialsId: 'gcp-key', variable: 'GOOGLE_CREDENTIALS')]) {
            sh '''
              export GOOGLE_APPLICATION_CREDENTIALS="$GOOGLE_CREDENTIALS"
              terraform init
              terraform apply -auto-approve
            '''
          }
        }
      }
    }

    stage('Configure kubectl') {
      steps {
        withCredentials([file(credentialsId: 'gcp-key', variable: 'GOOGLE_CREDENTIALS')]) {
          sh '''
            gcloud auth activate-service-account --key-file="$GOOGLE_CREDENTIALS"
            gcloud config set project "$GCP_PROJECT"
            gcloud container clusters get-credentials "$CLUSTER_NAME" --region "$REGION"
          '''
        }
      }
    }

    stage('Deploy to Kubernetes') {
      steps {
        sh '''
          kubectl apply -f k8s/deployment.yaml
          kubectl apply -f k8s/service.yaml
        '''
      }
    }
    stage('Install Monitoring Tools') {
        when {
    expression {
      return !fileExists('.monitoring_installed')
    }
  }
  steps {
    sh '''
      
      helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
      helm repo add grafana https://grafana.github.io/helm-charts
      helm repo update

     
      kubectl get ns monitoring || kubectl create ns monitoring

     
      helm upgrade --install prometheus prometheus-community/prometheus --namespace monitoring

      
      helm upgrade --install grafana grafana/grafana --namespace monitoring --set adminPassword=admin123
      touch .monitoring_installed
    '''
  }
}
  }
}
