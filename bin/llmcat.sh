#!/bin/bash

# This is the llmcat script.
# It accepts file paths as arguments and prints the filename followed by its contents.

for file in "$@"; do
    # Only process if the file exists
    if [[ -f "$file" ]]; then
        # Print the filename surrounded by dashes
        echo "------$file-------"
        # Print the content of the file
        cat "$file"
    fi
done