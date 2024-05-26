## Packages and shell

```zsh
# Install homebrew bundle
$ brew tap homebrew/bundle
$ brew bundle --file ./brewfile
$ source <(fzf --zsh)

# Install Oh My ZSH
$ sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

## Mac

```zsh
$ defaults write com.apple.finder AppleShowAllFiles true
```


## Changes to `.zshrc`

```
ZSH_THEME="essembeh"
plugins=(git zsh-autosuggestions)

export FZF_DEFAULT_OPTS="-m --bind ctrl-a:select-all,ctrl-d:deselect-all,ctrl-t:toggle-all"

source /opt/homebrew/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh


```

## fonts

- Pick a [nerd font](https://www.nerdfonts.com/font-downloads)
