# if you want to pull out some frontmatter from your blog

`$ pull-frontmatter ./posts/**/*.md | jq '.data | map({title, date})'`