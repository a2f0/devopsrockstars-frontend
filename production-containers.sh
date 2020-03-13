#!/usr/bin/env zsh
docker build . -t devopsrockstars-frontend
docker tag devopsrockstars-frontend us.gcr.io/tearleads/devopsrockstars-frontend
docker push us.gcr.io/tearleads/devopsrockstars-frontend
