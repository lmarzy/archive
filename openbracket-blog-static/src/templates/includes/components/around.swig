<aside class="c-around">
    
    <h1 class="c-around__title">Around the Web</h1>

    <ul class="c-around-links">
        
        {% for links in navAround %}

            <li>
                <a href="{{ links.linkUrl }}" class="" title="{{ links.linkTitle }}">{{ links.linkName }}</a>
            </li>

        {% endfor %}

    </ul>

</aside>