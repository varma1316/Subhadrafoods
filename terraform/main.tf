provider "google" {
  credentials = file(var.credentials_file)
  project     = var.project_id
  region      = var.region
}

resource "google_container_cluster" "primary" {
  name     = var.cluster_name
  location = var.region

  initial_node_count = 1

  node_config {
    machine_type = "e2-medium"
    disk_type     = "pd-standard"   
    disk_size_gb  = 20
  }
}
