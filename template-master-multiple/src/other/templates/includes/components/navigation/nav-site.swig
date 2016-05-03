<nav role="navigation" class="m-nav c-nav--site" itemscope itemtype="http://schema.org/SiteNavigationElement">
	
	<h1 class="h-vh">Site navigation</h1>

	<ul>

		{% for links in nav.navSite %}

			<li><a href="{{ links.linkUrl }}">{{ links.linkName }}</a></li>

		{% endfor %}
				
	</ul>

</nav>