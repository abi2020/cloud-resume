.PHONY: build

build:
	sam build

rollback:
	aws cloudformation rollback-stack --stack-name cloud-resume-challenge

deploy-infra:
	sam build && aws-vault exec my-user --no-session -- sam deploy --no-confirm-changeset --no-fail-on-empty-changeset

deploy-site:
	aws-vault exec my-user --no-session -- aws s3 sync ./resume-site s3://cloud-resume-website-abishek-siva

invoke-put:
	sam build && aws-vault exec my-user --no-session -- sam local invoke PutFunction

invoke-get:
	sam build && aws-vault exec my-user --no-session -- sam local invoke GetFunction