# `pull-frontmatter`

```mermaid
graph TD;
     B($ pull-frontmatter ./posts/**/*.md)
    B --> D1[---\ntitle: Post 1\ndate: 2022-01-02\n---\n ...]
    B --> D2[---\ntitle: Post 2\ndate: 2022-02-02\n---\n ...]
    B --> D3[---\ntitle: Post 3\ndate: 2022-03-02\n---\n ...]
    B --> Dn[---\ntitle: Post 4\ndate: 2022-04-02\n---\n ...]

    D1 --> Parse[Parse]
    D2 --> Parse
    D3 --> Parse
    Dn --> Parse

    Parse --> G[Merge JSON Results]
   

    G --> H[" {'title': 'Post 1', date: '2022-01-02'}\n{'title': 'Post 2', date: '2022-02-02'}\n{'title': 'Post 3', date: '2022-03-02'}\n{'title': 'Post 3', date: '2022-04-02'} "]
    H --> I($stdout)
```

The `pull-frontmatter` command line tool extracts YAML front matter from Markdown files and outputs the collected data as JSON. This tool is designed to streamline workflows that involve processing and analyzing metadata from Markdown documents.

## Installation

To install `pull-frontmatter`, you'll need Node.js and npm installed on your computer. Once those prerequisites are met, you can install `pull-frontmatter` globally using the following command:

```zsh
# From this directory
npm install -g .
```

This command will install `pull-frontmatter` globally so that it can be run from any directory on your system.

## Usage

To use `pull-frontmatter`, navigate to the directory containing your Markdown files and run:

```zsh
$ pull-frontmatter ./blog/**/*.md > blog-metadata.json
```

This command will process all Markdown files in the current directory, extracting the YAML front matter and outputting it as JSON, then send it to a json file.

It also accepts piped input.

```zsh
$ find ./posts -name "*.md" | pull-frontmatter
```


## Limitations

- This script is not designed for extrmely large datasets. It does not stream output.
- That said you can pipe things into it, and it will fetch them concurrently
- I just decided I'd rather have the output be valid JSON then line deliminiated json, so that has some implications about the upper bound. All the frontmatter needs to fit in Node.js memory

