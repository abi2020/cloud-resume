# AWS Cloud Resume Challenge

This is my repo for the AWS Cloud Resume Challenge, created by Forrest Brazeal. This project combines various AWS tools to create a static resume website, which also displays a live viewer count. You can check out my completed resume at https://abisheksiva.com/

Here’s a brief overview of the steps that are required to complete this challenge:
1. Earn the AWS Cloud Practitioner certification.
2. Setting up my AWS root account and creating a user with proper IAM permissions.
3. Create a resume written in HTML and styled in CSS.
4. Use AWS Serverless Application Model (SAM) to configure and deploy all infrastructure as code (Iac).
5. Deploy the HTML website online as an Amazon S3 static website.
6. Use Amazon Cloudfront to add HTTPS security to the website URL.
7. Point a custom DNS domain name to the Cloudfront distribution (I used Amazon Route 53).
8. Create an Amazon DynamoDB table to store the live viewer count.
9. Write Lambda functions in Python to fetch and update the viewer count from DynamoDB.
10. Invoke the Lambda functions using Amazon API Gateway endpoints.
11. Write Javascript code so the webpage can call those APIs to display the viewer count.
12. Set up Github actions to automatically deploy infrastructure changes or update the static website when new code is pushed.
13. Write and publish a blog post about the challenge.
