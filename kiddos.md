---
layout: kiddos
title: Musings on Levi & Cassidy
---

<h6>What's this about?</h6>

While working at Zapier, we used [Jekyll](https://jekyllrb.com) (a static site generator) on an internal branding project. It wasn't my first experience with code, but it was my first time working with Jekyll. I was struck by how refreshingly straightforward the setup was, and resolved to start using it daily to encourage myself to code, and write, more.

So this is a journal of sorts, dedicated to capturing the observations of my two kids, Levi and Cassidy, who at the time of writing are 5 and 2 respectively. I always have my folders of photos and movies, but this is more about documenting the little moments that are often the hardest to remember.

{% for item in site.kiddos %}
  <a href="{{ item.url }}">
    <h6>{{ item.title }}</h6>
  </a>
{% endfor %}
