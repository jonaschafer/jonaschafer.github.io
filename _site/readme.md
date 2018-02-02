## Background

This site is built on Jekyll. You'll need to make sure to have a few things installed before moving forward:

1. [Ruby 2.2.5+](https://www.ruby-lang.org/en/documentation/installation/)
1. [Bundler](http://bundler.io/)
1. [Jekyll 3.7.0+](https://jekyllrb.com/docs/installation/)

**Note:** We recommend using [Ruby Version Manager (rvm)](https://rvm.io/rvm/install) to manage various versions of Ruby.


## Steps

Once you've installed Ruby, Bundler and Jekyll you're ready to clone this repo.

```
git clone git@github.com:jonaschafer/kiddos.git
```

Now you'll want to install all of the dependencies to make this repo run.

```
bundle install
```

Or force jekyll to install inside this folder
```
jekyll new kiddos --force`
```

You should not have all of the packages installed and are ready to get up an running!

```
jekyll serve --livereload
```

Go to 127.0.0.1:4000 in your browser and you'll be viewing a local instance of the site! Now you can make updates to the site and see them change instantly in your browser! :rocket:
