---
layout: thoughts
title: Jekyll 101
date: 2018-08-08
---

<div style="background: #FACC15; color: black; padding: 12px; text-align: center; margin-bottom: 20px;">
  📍 Yo! This is from ye ol' archive. New stuff → <a href="https://jonschafer.com" style="color: #000000; text-decoration: underline;">jonschafer.com</a>
</div>

<!-- Inspired by: https://www.taniarascia.com/make-a-static-website-with-jekyll/
https://learn.cloudcannon.com/ -->

# Before we begin

**I'm not a developer.** I do have a strong foundation in development, however. I grew up futzing around with SCSI cables with my Dad, or taking classes in BASIC in high school. And I've built way too many static sites over the years. Heck, I even took a course in Front End Development at Treehouse a few years back with the fantasy of switching careers.

But each time I'd get into the development world, I'd get sidetracked with my main profession - design. And unfortunately when that happened, it's like the saying goes: "If you don't use it, you lose it."

My hope with this inaugural post is to use Jekyll has a foundation to not only write more (even if it's just code) but to also maintain that coding muscle. Jekyll is fast, and easy and is a great tool to explore code. So to start things off I thought I'd explain how I got started with Jekyll and how you could, too.

## What you'll learn
<ul class="indent">
  <li>Basic HTML, CSS and SASS</li>
  <li>Basic command line</li>
  <li>How to use Git and Github</li>
  <li>What Jekyll is and how to install it</li>
</ul>

## So, what is Jekyll?
Jekyll is what's known as a "static site generator" that runs on a programming language called Ruby. For the most part, working with Jekyll is working with Markdown, HTML, CSS and SASS files. You'll hardly touch Ruby (thankfully) except for getting the system set up. Jekyll is meant for blogging, and comes pre-installed with folders for "posts" and "drafts", but you can reallly use it for anything.

## You lost me at "static."
Ruh roh. So, websites fit into two camps: dynamic and static. A dynamic site has a back-end database attached to it, most often written in PHP. Dynamic sites, like Wordpress, act like a CMS (Content Management System) so maintaining the site is ultra-simple. Typically you'd visit a login screen, enter your credentials and get started posting. Static, on the other hand, is basically a collection of folders and files, entirely written in code. It's ideal as a portfolio or blogging platform because you are just duplicating files, not setting up databases.

## What else can Jekyll do?
It can also convert Markdown (.md) files to HTML, has a built-in process for converting CSS to SASS (so you can use color variables, for instance), and it relies on something called a <span class="code">partial</span> - basically, a <span class="code">partial</span> is a file that includes dense information (like the contents of the <span class="code">head</span>) and stores this file into a folder called an <span class="code">includes</span>. But those are just a few of the cool things that Jekyll can do.

## You mentioned Github. Where does that come in?
Github is an optional pairing with Jekyll, but it's recommended because setting up a repo on Github is free and easy, and allows you to use git as a version control system for your site. In fact, Github has a free hosting platform - Github pages - for creating your own site. Learn more about that last bit <a href="http://pages.github.com" target="_blank">here</a>.

## How do I get started?
There are a loads of sites dedicated to getting started, but I found <a href="https://www.taniarascia.com/make-a-static-website-with-jekyll/" target="_blank">Tania's</a> site to be the most approachable. She does a better job than I can about what you need to get started, whether that's installing <span class="code">Xcode Tools</span> or making sure you have <span class="code">bundle</span> or the right <span class="code">gems</span> installed. But, if you just want to learn the basic setup instructions, here's what you need to do (in Terminal):

<pre>
  <span style="color: #999;">// Create a repo or Github page</span>
  cd /Users/jon/Sites/

  <span style="color: #999;">// Clone repo to your machine</span>
  git clone git@github.com:jonaschafer/kiddos.git

  <span style="color: #999;">// Install Jekyll into that repo folder</span>
  jekyll new kiddos --force`

  <span style="color: #999;">// Launch Jekyll's server</span>
  jekyll serve --livereload
</pre>


## Getting organized
After installing Jekyll, you'll be gifted with a folder and sub-folders inside your repo. Depending on what you're after, say a blog or a portfolio, you can remove some of these default files. For my part, I wanted to use Jekyll for my portfolio and also to write a few articles every few months. So, here is how my site is broken down with a <span class="code">tree</span> view of my site structure:

<ul class="indent">
    <li class="indent-item">Remove the <span class="code">posts</span> and <span class="code">drafts</span> folders.</li>
    <li class="indent-item">Create a <span class="code">_collections</span> folder for separate parts of my site, like <span class="code">/blog</span></li>
    <li class="indent-item">Build assets sub folders for fonts, images, normalize.scss, and stylesheets</li>
    <li class="indent-item">Add html files for particular nav and footers</li>
    <li class="indent-item">Create new <span class="code">layouts</span></li>
    <li class="indent-item">Create a few <span class="code">includes</span></li>
</ul>


<pre>
  ├── 404.html
  ├── CNAME
  ├── Gemfile
  ├── Gemfile.lock
  ├── _config.yml
  ├── _includes
  │   ├── footer-kiddos.html
  │   ├── footer.html
  │   ├── head.html
  │   ├── navigation-kiddos.html
  │   ├── navigation-thoughts.html
  │   └── navigation.html
  ├── _layouts
  │   ├── default.html
  │   ├── kiddos.html
  │   └── thoughts.html
  ├── _site
  │   ├── 404.html
  │   ├── CNAME
  │   ├── archive
  │   │   ├── 2021
  │   │   │   └── index.html
  │   │   ├── akqa
  │   │   │   └── index.html
  │   │   ├── ben
  │   │   │   └── index.html
  │   │   ├── empirical
  │   │   │   └── index.html
  │   │   ├── fathom
  │   │   │   └── index.html
  │   │   ├── insidetrack
  │   │   │   └── index.html
  │   │   ├── lnl
  │   │   │   └── index.html
  │   │   ├── medigap
  │   │   │   └── index.html
  │   │   ├── metro
  │   │   │   └── index.html
  │   │   ├── poster
  │   │   │   └── index.html
  │   │   ├── pot
  │   │   │   └── index.html
  │   │   ├── rita
  │   │   │   └── index.html
  │   │   └── votesolar
  │   │       └── index.html
  │   ├── archive.html
  │   ├── assets
  │   │   ├── fonts
  │   │   │   ├── GTPressuraMono.otf
  │   │   │   ├── GTPressuraMono.ttf
  │   │   │   ├── GTPressuraMono.woff
  │   │   │   ├── GTPressuraMono.woff2
  │   │   │   ├── Graphik-Regular.otf
  │   │   │   ├── Graphik-Regular.ttf
  │   │   │   ├── Graphik-Regular.woff
  │   │   │   └── Graphik-Regular.woff2
  │   │   ├── images
  │   │   │   ├── 2021
  │   │   │   │   ├── 2021-1.jpg
  │   │   │   │   ├── 2021-2.jpg
  │   │   │   │   ├── 2021-3.jpg
  │   │   │   │   ├── 2021-4.jpg
  │   │   │   │   ├── 2021-5.jpg
  │   │   │   │   └── 2021-6.jpg
  │   │   │   ├── akqa
  │   │   │   │   ├── akqa-1.jpg
  │   │   │   │   ├── akqa-2.jpg
  │   │   │   │   ├── akqa-3.jpg
  │   │   │   │   ├── akqa-4.jpg
  │   │   │   │   ├── akqa-5.jpg
  │   │   │   │   └── akqa-6.jpg
  │   │   │   ├── arrow-up.ai
  │   │   │   ├── arrow-up.svg
  │   │   │   ├── ben
  │   │   │   │   ├── ben-1.jpg
  │   │   │   │   ├── ben-2.jpg
  │   │   │   │   ├── ben-3.jpg
  │   │   │   │   ├── ben-4.jpg
  │   │   │   │   ├── ben-5.jpg
  │   │   │   │   ├── ben-6.jpg
  │   │   │   │   └── ben-7.jpg
  │   │   │   ├── eco
  │   │   │   │   ├── eco-1.jpg
  │   │   │   │   ├── eco-2.gif
  │   │   │   │   ├── eco-3.png
  │   │   │   │   ├── eco-4.jpg
  │   │   │   │   ├── eco-5.png
  │   │   │   │   └── eco-6.gif
  │   │   │   ├── empirical
  │   │   │   │   ├── empirical-1.jpg
  │   │   │   │   └── empirical-2.jpg
  │   │   │   ├── fathom
  │   │   │   │   ├── fathom-1.jpg
  │   │   │   │   ├── fathom-2.jpg
  │   │   │   │   ├── fathom-3.jpg
  │   │   │   │   └── fathom-4.jpg
  │   │   │   ├── favicon.ico
  │   │   │   ├── font
  │   │   │   │   ├── font-1.png
  │   │   │   │   ├── font-2.png
  │   │   │   │   ├── font-3.png
  │   │   │   │   ├── font-4.png
  │   │   │   │   └── font-5.png
  │   │   │   ├── illus
  │   │   │   │   ├── illus-1.gif
  │   │   │   │   ├── illus-10.png
  │   │   │   │   ├── illus-2.png
  │   │   │   │   ├── illus-3.png
  │   │   │   │   ├── illus-4.png
  │   │   │   │   ├── illus-5.gif
  │   │   │   │   ├── illus-6.png
  │   │   │   │   ├── illus-7.png
  │   │   │   │   ├── illus-8.png
  │   │   │   │   └── illus-9.png
  │   │   │   ├── insidetrack
  │   │   │   │   ├── insidetrack-1.gif
  │   │   │   │   ├── insidetrack-2.gif
  │   │   │   │   ├── insidetrack-3.jpg
  │   │   │   │   ├── insidetrack-4.gif
  │   │   │   │   ├── insidetrack-5.jpg
  │   │   │   │   └── insidetrack-6.gif
  │   │   │   ├── lnl
  │   │   │   │   ├── lnl-1.png
  │   │   │   │   └── lnl-2.png
  │   │   │   ├── logos
  │   │   │   │   ├── logos-1.gif
  │   │   │   │   ├── logos-10.png
  │   │   │   │   ├── logos-11.png
  │   │   │   │   ├── logos-12.png
  │   │   │   │   ├── logos-13.png
  │   │   │   │   ├── logos-14.png
  │   │   │   │   ├── logos-15.png
  │   │   │   │   ├── logos-2.png
  │   │   │   │   ├── logos-3.png
  │   │   │   │   ├── logos-4.png
  │   │   │   │   ├── logos-5.png
  │   │   │   │   ├── logos-6.png
  │   │   │   │   ├── logos-7.png
  │   │   │   │   ├── logos-8.png
  │   │   │   │   └── logos-9.jpg
  │   │   │   ├── manifold
  │   │   │   │   ├── manifold-1.png
  │   │   │   │   ├── manifold-2.png
  │   │   │   │   ├── manifold-3.gif
  │   │   │   │   ├── manifold-4.png
  │   │   │   │   ├── manifold-5.png
  │   │   │   │   ├── manifold-6.png
  │   │   │   │   ├── manifold-7.png
  │   │   │   │   └── manifold-8.png
  │   │   │   ├── medigap
  │   │   │   │   ├── medigap-1.jpg
  │   │   │   │   ├── medigap-2.jpg
  │   │   │   │   ├── medigap-3.png
  │   │   │   │   └── medigap-4.png
  │   │   │   ├── metro
  │   │   │   │   ├── metro-1.gif
  │   │   │   │   ├── metro-10.jpg
  │   │   │   │   ├── metro-11.jpg
  │   │   │   │   ├── metro-12.jpg
  │   │   │   │   ├── metro-13.jpg
  │   │   │   │   ├── metro-14.jpg
  │   │   │   │   ├── metro-2.gif
  │   │   │   │   ├── metro-3.gif
  │   │   │   │   ├── metro-4.jpg
  │   │   │   │   ├── metro-5.gif
  │   │   │   │   ├── metro-6.jpg
  │   │   │   │   ├── metro-7.jpg
  │   │   │   │   ├── metro-8.jpg
  │   │   │   │   └── metro-9.jpg
  │   │   │   ├── nightbird
  │   │   │   │   ├── nightbird-1.jpg
  │   │   │   │   ├── nightbird-10.jpg
  │   │   │   │   ├── nightbird-11.jpg
  │   │   │   │   ├── nightbird-2.jpg
  │   │   │   │   ├── nightbird-3.jpg
  │   │   │   │   ├── nightbird-4.jpg
  │   │   │   │   ├── nightbird-5.jpg
  │   │   │   │   ├── nightbird-6.jpg
  │   │   │   │   ├── nightbird-7.jpg
  │   │   │   │   ├── nightbird-8.jpg
  │   │   │   │   └── nightbird-9.jpg
  │   │   │   ├── poster
  │   │   │   │   ├── poster-1.gif
  │   │   │   │   ├── poster-2.jpg
  │   │   │   │   ├── poster-3.jpg
  │   │   │   │   └── poster-4.jpg
  │   │   │   ├── pot
  │   │   │   │   ├── pot-1.png
  │   │   │   │   ├── pot-2.jpg
  │   │   │   │   ├── pot-3.jpg
  │   │   │   │   ├── pot-4.png
  │   │   │   │   └── pot-5.png
  │   │   │   ├── razorfish
  │   │   │   │   ├── razorfish-1.gif
  │   │   │   │   ├── razorfish-2.jpg
  │   │   │   │   ├── razorfish-3.jpg
  │   │   │   │   └── razorfish-4.jpg
  │   │   │   ├── rita
  │   │   │   │   ├── rita-1.png
  │   │   │   │   ├── rita-2.png
  │   │   │   │   ├── rita-3.png
  │   │   │   │   ├── rita-4.png
  │   │   │   │   ├── rita-5.png
  │   │   │   │   ├── rita-6.png
  │   │   │   │   ├── rita-7.png
  │   │   │   │   ├── rita-8.png
  │   │   │   │   └── rita-9.png
  │   │   │   ├── sloan
  │   │   │   │   ├── sloan-1.png
  │   │   │   │   ├── sloan-2.png
  │   │   │   │   ├── sloan-3.png
  │   │   │   │   ├── sloan-4.png
  │   │   │   │   ├── sloan-5.png
  │   │   │   │   ├── sloan-6.png
  │   │   │   │   └── sloan-7.png
  │   │   │   └── votesolar
  │   │   │       ├── votesolar-1.jpg
  │   │   │       ├── votesolar-2.gif
  │   │   │       ├── votesolar-3.jpg
  │   │   │       ├── votesolar-4.gif
  │   │   │       └── votesolar-5.jpg
  │   │   └── stylesheets
  │   │       ├── base.css
  │   │       └── fun
  │   │           ├── bkg-color.scss
  │   │           └── flexbox.scss
  │   ├── beliefs
  │   │   └── index.html
  │   ├── feed.xml
  │   ├── grid.html
  │   ├── index.html
  │   ├── kiddos
  │   │   ├── hi
  │   │   │   └── index.html
  │   │   └── socks
  │   │       └── index.html
  │   ├── kiddos.html
  │   ├── profile-macbook.md
  │   ├── readme.md
  │   ├── thoughts
  │   │   └── before
  │   │       └── index.html
  │   ├── travel.html
  │   ├── work
  │   │   ├── eco
  │   │   │   └── index.html
  │   │   ├── font
  │   │   │   └── index.html
  │   │   ├── illustrations
  │   │   │   └── index.html
  │   │   ├── logos
  │   │   │   └── index.html
  │   │   ├── manifold
  │   │   │   └── index.html
  │   │   ├── nightbird
  │   │   │   └── index.html
  │   │   ├── razorfish
  │   │   │   └── index.html
  │   │   └── sloan
  │   │       └── index.html
  │   └── work.html
  ├── archive.html
  ├── assets
  │   ├── fonts
  │   │   ├── GTPressuraMono.otf
  │   │   ├── GTPressuraMono.ttf
  │   │   ├── GTPressuraMono.woff
  │   │   ├── GTPressuraMono.woff2
  │   │   ├── Graphik-Regular.otf
  │   │   ├── Graphik-Regular.ttf
  │   │   ├── Graphik-Regular.woff
  │   │   └── Graphik-Regular.woff2
  │   ├── images
  │   │   ├── 2021
  │   │   │   ├── 2021-1.jpg
  │   │   │   ├── 2021-2.jpg
  │   │   │   ├── 2021-3.jpg
  │   │   │   ├── 2021-4.jpg
  │   │   │   ├── 2021-5.jpg
  │   │   │   └── 2021-6.jpg
  │   │   ├── akqa
  │   │   │   ├── akqa-1.jpg
  │   │   │   ├── akqa-2.jpg
  │   │   │   ├── akqa-3.jpg
  │   │   │   ├── akqa-4.jpg
  │   │   │   ├── akqa-5.jpg
  │   │   │   └── akqa-6.jpg
  │   │   ├── arrow-up.ai
  │   │   ├── arrow-up.svg
  │   │   ├── ben
  │   │   │   ├── ben-1.jpg
  │   │   │   ├── ben-2.jpg
  │   │   │   ├── ben-3.jpg
  │   │   │   ├── ben-4.jpg
  │   │   │   ├── ben-5.jpg
  │   │   │   ├── ben-6.jpg
  │   │   │   └── ben-7.jpg
  │   │   ├── eco
  │   │   │   ├── eco-1.jpg
  │   │   │   ├── eco-2.gif
  │   │   │   ├── eco-3.png
  │   │   │   ├── eco-4.jpg
  │   │   │   ├── eco-5.png
  │   │   │   └── eco-6.gif
  │   │   ├── empirical
  │   │   │   ├── empirical-1.jpg
  │   │   │   └── empirical-2.jpg
  │   │   ├── fathom
  │   │   │   ├── fathom-1.jpg
  │   │   │   ├── fathom-2.jpg
  │   │   │   ├── fathom-3.jpg
  │   │   │   └── fathom-4.jpg
  │   │   ├── favicon.ico
  │   │   ├── font
  │   │   │   ├── font-1.png
  │   │   │   ├── font-2.png
  │   │   │   ├── font-3.png
  │   │   │   ├── font-4.png
  │   │   │   └── font-5.png
  │   │   ├── illus
  │   │   │   ├── illus-1.gif
  │   │   │   ├── illus-10.png
  │   │   │   ├── illus-2.png
  │   │   │   ├── illus-3.png
  │   │   │   ├── illus-4.png
  │   │   │   ├── illus-5.gif
  │   │   │   ├── illus-6.png
  │   │   │   ├── illus-7.png
  │   │   │   ├── illus-8.png
  │   │   │   └── illus-9.png
  │   │   ├── insidetrack
  │   │   │   ├── insidetrack-1.gif
  │   │   │   ├── insidetrack-2.gif
  │   │   │   ├── insidetrack-3.jpg
  │   │   │   ├── insidetrack-4.gif
  │   │   │   ├── insidetrack-5.jpg
  │   │   │   └── insidetrack-6.gif
  │   │   ├── lnl
  │   │   │   ├── lnl-1.png
  │   │   │   └── lnl-2.png
  │   │   ├── logos
  │   │   │   ├── logos-1.gif
  │   │   │   ├── logos-10.png
  │   │   │   ├── logos-11.png
  │   │   │   ├── logos-12.png
  │   │   │   ├── logos-13.png
  │   │   │   ├── logos-14.png
  │   │   │   ├── logos-15.png
  │   │   │   ├── logos-2.png
  │   │   │   ├── logos-3.png
  │   │   │   ├── logos-4.png
  │   │   │   ├── logos-5.png
  │   │   │   ├── logos-6.png
  │   │   │   ├── logos-7.png
  │   │   │   ├── logos-8.png
  │   │   │   └── logos-9.jpg
  │   │   ├── manifold
  │   │   │   ├── manifold-1.png
  │   │   │   ├── manifold-2.png
  │   │   │   ├── manifold-3.gif
  │   │   │   ├── manifold-4.png
  │   │   │   ├── manifold-5.png
  │   │   │   ├── manifold-6.png
  │   │   │   ├── manifold-7.png
  │   │   │   └── manifold-8.png
  │   │   ├── medigap
  │   │   │   ├── medigap-1.jpg
  │   │   │   ├── medigap-2.jpg
  │   │   │   ├── medigap-3.png
  │   │   │   └── medigap-4.png
  │   │   ├── metro
  │   │   │   ├── metro-1.gif
  │   │   │   ├── metro-10.jpg
  │   │   │   ├── metro-11.jpg
  │   │   │   ├── metro-12.jpg
  │   │   │   ├── metro-13.jpg
  │   │   │   ├── metro-14.jpg
  │   │   │   ├── metro-2.gif
  │   │   │   ├── metro-3.gif
  │   │   │   ├── metro-4.jpg
  │   │   │   ├── metro-5.gif
  │   │   │   ├── metro-6.jpg
  │   │   │   ├── metro-7.jpg
  │   │   │   ├── metro-8.jpg
  │   │   │   └── metro-9.jpg
  │   │   ├── nightbird
  │   │   │   ├── nightbird-1.jpg
  │   │   │   ├── nightbird-10.jpg
  │   │   │   ├── nightbird-11.jpg
  │   │   │   ├── nightbird-2.jpg
  │   │   │   ├── nightbird-3.jpg
  │   │   │   ├── nightbird-4.jpg
  │   │   │   ├── nightbird-5.jpg
  │   │   │   ├── nightbird-6.jpg
  │   │   │   ├── nightbird-7.jpg
  │   │   │   ├── nightbird-8.jpg
  │   │   │   └── nightbird-9.jpg
  │   │   ├── poster
  │   │   │   ├── poster-1.gif
  │   │   │   ├── poster-2.jpg
  │   │   │   ├── poster-3.jpg
  │   │   │   └── poster-4.jpg
  │   │   ├── pot
  │   │   │   ├── pot-1.png
  │   │   │   ├── pot-2.jpg
  │   │   │   ├── pot-3.jpg
  │   │   │   ├── pot-4.png
  │   │   │   └── pot-5.png
  │   │   ├── razorfish
  │   │   │   ├── razorfish-1.gif
  │   │   │   ├── razorfish-2.jpg
  │   │   │   ├── razorfish-3.jpg
  │   │   │   └── razorfish-4.jpg
  │   │   ├── rita
  │   │   │   ├── rita-1.png
  │   │   │   ├── rita-2.png
  │   │   │   ├── rita-3.png
  │   │   │   ├── rita-4.png
  │   │   │   ├── rita-5.png
  │   │   │   ├── rita-6.png
  │   │   │   ├── rita-7.png
  │   │   │   ├── rita-8.png
  │   │   │   └── rita-9.png
  │   │   ├── sloan
  │   │   │   ├── sloan-1.png
  │   │   │   ├── sloan-2.png
  │   │   │   ├── sloan-3.png
  │   │   │   ├── sloan-4.png
  │   │   │   ├── sloan-5.png
  │   │   │   ├── sloan-6.png
  │   │   │   └── sloan-7.png
  │   │   └── votesolar
  │   │       ├── votesolar-1.jpg
  │   │       ├── votesolar-2.gif
  │   │       ├── votesolar-3.jpg
  │   │       ├── votesolar-4.gif
  │   │       └── votesolar-5.jpg
  │   ├── stylesheets
  │   │   ├── base.scss
  │   │   ├── core
  │   │   │   ├── _fonts.scss
  │   │   │   ├── _layout.scss
  │   │   │   └── _variables.scss
  │   │   ├── fun
  │   │   │   ├── bkg-color.scss
  │   │   │   └── flexbox.scss
  │   │   └── vendor
  │   │       └── _normalize.scss
  │   └── vendor
  │       └── _normalize.scss
  ├── beliefs.md
  ├── collections
  │   ├── _archive
  │   │   ├── 2021.html
  │   │   ├── akqa.html
  │   │   ├── ben.html
  │   │   ├── empirical.html
  │   │   ├── fathom.html
  │   │   ├── insidetrack.html
  │   │   ├── lnl.html
  │   │   ├── medigap.html
  │   │   ├── metro.html
  │   │   ├── poster.html
  │   │   ├── pot.html
  │   │   ├── rita.html
  │   │   └── votesolar.html
  │   ├── _kiddos
  │   │   ├── hi.md
  │   │   └── socks.md
  │   ├── _thoughts
  │   │   └── before.html
  │   └── _work
  │       ├── eco.html
  │       ├── font.html
  │       ├── illustrations.html
  │       ├── logos.html
  │       ├── manifold.html
  │       ├── nightbird.html
  │       ├── razorfish.html
  │       └── sloan.html
  ├── grid.html
  ├── index.html
  ├── kiddos.html
  ├── profile-macbook.md
  ├── readme.md
  ├── travel.md
  └── work.html
</pre>

## Process
Now, every time you want to work on your site, simply run the following command in Terminal to launch it locally, and get to it!

<!-- white terminal  -->
<!-- <div class="terminal">
  <div class="terminal__chrome">
    <span class="terminal__dot"></span>
    <span class="terminal__dot"></span>
    <span class="terminal__dot"></span>
  </div>
  bundle install
</div> -->

<!-- dark terminal -->
<div class="terminal terminal--dark">
  <div class="terminal__chrome">
    <span class="terminal__dot"></span>
    <span class="terminal__dot"></span>
    <span class="terminal__dot"></span>
  </div>
  bundle exec jekyll serve
</div>
