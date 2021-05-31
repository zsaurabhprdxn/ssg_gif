---
layout: "homepage/index.njk"
pageTitle: "Gifs"
pageStyle: "gif/gif"
pagination: 
    data: gifs.data
    size: 6
    alias: gifs
    href: 
        next: "…"
        previous: "…"
        first: "…"
        last: "…"
        pageNumber: 0
permalink: "/en-us/gifs/{{ pagination.pageNumber + 1 }}/index.html"  
templateEngineOverride: md,njk 
---

:::: gif-gallery
{% for item in gifs %}
[![{{item.title}}]({{item.images.original.url}} "{{item.title}}")]({{item.bitly_url}} "{{item.title}}")
{% endfor %}
:::: 

::: gif-pagination
{% if pagination.href.previous %} [Prev]({{ pagination.href.previous }} "Prev") {% endif %}
{% for i in range(1, 8) %}    
{% if pagination.pageNumber === i %}[{{i}}](/en-us/gifs/{{i}} "{{i}}") {.active} {% else %}[{{i}}](/en-us/gifs/{{i}} "{{i}}"){% endif %}  

{% endfor %}
{% if pagination.href.next %}[Next]({{ pagination.href.next }} "Next") {% endif %}

:::