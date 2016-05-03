<nav class="c-site-header__nav" itemscope itemtype="http://schema.org/SiteNavigationElement">
    
    <h1 class="is-vh">Site navigation</h1>

    <ul class="c-site-nav">

        {% for links in navSite %}

            <li class="c-site-nav__item">
                <a href="{{ links.linkUrl }}" class="c-site-nav__link c-site-nav__link--{{ links.linkicon }}" title="{{ links.linktitle }}">
                    <span class="is-vh">{{ links.linkName }}</span>
                    <svg class="c-site-nav__icon icon icon-{{ links.linkicon }}"><use xlink:href="#icon-{{ links.linkicon }}"></use></svg>
                </a>
            </li>

        {% endfor %}
                
    </ul>

</nav>