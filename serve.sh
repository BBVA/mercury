#!/bin/bash

# Copy assets (common folders) into each language subfolder
cp -r src/assets src/en/
cp -r src/assets src/es/

# Build each subsite
mkdocs build -f mkdocs.en.yml
mkdocs build -f mkdocs.es.yml

# Remove copied common folders
rm -r src/en/assets src/es/assets

# Start development server
python -m http.server 8000 --directory docs
