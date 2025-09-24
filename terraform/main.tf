provider "google" {
  credentials = file(var.credentials_file)
  project     = var.project_id
  region      = var.region
}


resource "google_compute_network" "vpc_network" {
  name                    = "${var.cluster_name}-vpc"
  auto_create_subnetworks = false
}


resource "google_compute_subnetwork" "subnet" {
  name          = "${var.cluster_name}-subnet"
  ip_cidr_range = "10.0.0.0/16"
  region        = var.region
  network       = google_compute_network.vpc_network.id
}


resource "google_container_cluster" "primary" {
  name     = var.cluster_name
  location = var.region

  network    = google_compute_network.vpc_network.id
  subnetwork = google_compute_subnetwork.subnet.id

  # Standard mode
  remove_default_node_pool = true
  initial_node_count       = 1
}


resource "google_container_node_pool" "primary_nodes" {
  name       = "${var.cluster_name}-node-pool"
  cluster    = google_container_cluster.primary.name
  location   = var.region

  node_count = 1

  autoscaling {
    min_node_count = 1
    max_node_count = 5
  }

  node_config {
    machine_type = "e2-medium"
    disk_type    = "pd-standard"
    disk_size_gb = 20

    # Enable spot (preemptible) VMs
    preemptible  = true

    oauth_scopes = [
      "https://www.googleapis.com/auth/cloud-platform",
    ]
  }
}



