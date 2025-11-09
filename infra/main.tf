provider "aws" {
  region = "us-east-1"
}

resource "aws_s3_bucket" "devops_bucket" {
  bucket = "devops-projeto-nathalia"
  tags = {
    Name        = "DevOpsProjeto"
    Environment = "Dev"
  }
}
