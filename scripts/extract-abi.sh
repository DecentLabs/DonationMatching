#!/bin/bash -e
mkdir shared/abis
for f in deployments/*.json
do
    FILENAME=`basename $f`
	node_modules/node-jq/bin/jq .abi deployments/$FILENAME > shared/abis/$FILENAME
done
