#!/bin/bash

RED='\033[0;34m'
NC='\033[0m' # No Color

clear
echo -e "${RED}Running tests...${NC}"
ruby ./src/__tests__/Game.test.rb
echo -e "${RED}Done, watching for file changes...${NC}"
