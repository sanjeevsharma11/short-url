#!/bin/bash

# hard deploy -> remove & install node_modules & soft deploy only install new

set -e

FORMATTED_INPUT="${1,,}"

if [[ $FORMATTED_INPUT == '--hard' ]];
then
	echo -e "Deploy Type: HARD\nRemoving node_modules"
	rm -rf node_modules/
else
	echo "Deploy Type: SOFT"
fi

yarn

yarn build

pm2 stop ecosystem.config.cjs

pm2 start ecosystem.config.cjs
