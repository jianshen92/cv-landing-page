# Build Image with Cloud Build and save to Cloud Registry 
gcloud builds submit --tag gcr.io/my-personal-website-215617/portfolio

# Deploy Image to Cloud Run 
gcloud run deploy --image gcr.io/my-personal-website-215617/portfolio --platform managed