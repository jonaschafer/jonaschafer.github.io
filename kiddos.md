---
layout: kiddos
title: Kiddos
---

<h2>Kiddos<h2>

{% for item in site.kiddos %}
  <a href="{{ item.url }}">
    <h6>{{ item.title }}</h6>
  </a>
{% endfor %}
