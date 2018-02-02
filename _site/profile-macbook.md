#  =======================================================================
#  System
#  ========================================================================

# show all hidden files
alias show="defaults write com.apple.finder AppleShowAllFiles YES && killall Finder"

# hide all hidden files
alias hide="defaults write com.apple.finder AppleShowAllFiles NO && killall Finder"

# weird Google Hangouts audio thing
alias hang="sudo killall coreaudiod"


#  =======================================================================
#  Locations
#  ========================================================================

# shortcut for opening up zapier repo
alias zapier="Sites/zapier"

# shortcut for opening up Site repo
alias sites="Sites"

# shortcut for getting back to root
alias home="/Users/zapier-jon"

# shortuct to WHT github repo
alias kiddos="cd /Users/zapier-jon/Sites/kiddos"

# open this profile
alias profile="atom ~/.zshrc"


#  =======================================================================
#  Git
#  ========================================================================

# show history and visual of branches
alias log="git log --graph"

# add
alias a="git add -A"

# commit
alias c="git commit -m"

# add and commit
alias ac="git add -A && git commit -m"

# push
alias push="git push"


#  =======================================================================
#  Jekyll
#  ========================================================================

# start jekyll server
alias jekyll-serve="jekyll serve --livereload"


#  =======================================================================
#  Docker
#  ========================================================================

# send docker commands
alias dc="docker-compose"

# starts docker server
alias dcup="docker-compose up -d"

# stops docker server
alias dcdown="docker-compose down -d"

# jordan hack at in-person retreat
alias docker-clean="docker ps -a -q -f status=exited | xargs docker rm && docker images -q --filter "dangling=true" | xargs docker rmi"

# get latest of dev environment
alias docker-pull="./docker-pull.sh"

# run database migration
alias docker-migrate="docker-compose run web python manage.py migrate"


#  =======================================================================
#  Theme
#  ========================================================================

# Set name of the theme to load. Optionally, if you set this to "random"
# it'll load a random theme each time that oh-my-zsh is loaded.
# See https://github.com/robbyrussell/oh-my-zsh/wiki/Themes
ZSH_THEME="garyblessington"
