---
layout: thoughts
title: What's for dinner?
date: 2019-02-13
---

# What's for dinner?

About once a week we ask this question. We ask it mainly because we're bored with what we've been making and are hoping the other person has a fantastic response. And yet, I always feel like I'm reinventing the wheel when I get asked this question. I get introspective: "Yeah, what _does_ sound good?"

Because I'm a somewhat of a data nerd, I've tried to solve for this problem through digital means. At first it was a Wunderlist task that I would slowly add to, then it became the process of saving new recipes to Paprika (a recipe app), and then I went ultra-simple with a Google Sheets doc. Each one of these avenues felt like "the" answer, and yet, none of them felt natural:

<!-- white terminal window -->
<div class="terminal">
  <div class="terminal__chrome">
    <span class="terminal__dot"></span>
    <span class="terminal__dot"></span>
    <span class="terminal__dot"></span>
  </div>
  <b>Whatya wanna eat tonight?</b>
</div>

<div class="terminal">
  <div class="terminal__chrome">
    <span class="terminal__dot"></span>
    <span class="terminal__dot"></span>
    <span class="terminal__dot"></span>
  </div>
  Good question! Let me boot up my machine and open up my spreadsheet...
</div>

Then I remembered that there was this super-simple, cheesey website idea called [What the F is my social media strategy?](http://www.whatthefuckismysocialmediastrategy.com/) and I wondered: could I refresh a page on my site and it would tell me what I should make? A few after-work nights in Jekyll and through the help of an engineering pal with some seriously quick Javascript chops, [Recipes](https://www.jonschafer.com/recipes.html) was born:

![](/assets/images/thoughts/recipes.png)

The premise is pretty simple, for our purposes we have a button that when clicked will generate a new meal idea. Just below this is a list of meal prep duties at the end of each week. I then created a nested list of all recipes in those moments where I want to find a specific recipe without having to toggle 50 times.

One last thing: I extended this idea by creating another page called [Meals](https://www.jonschafer.com/meals.html). It's the same premise, but it will randomly generate 3 meals at once, which is great for meal planning versus just in-the-moment answers. 
