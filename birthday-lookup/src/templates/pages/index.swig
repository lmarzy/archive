{% extends '../layout/default.swig' %}

{% block content %}
	
	<section class="wrap content">
			
			<div class="content__search-results">

				{% include "../includes/components/search.swig" %}

				{% include "../includes/components/results.swig" %}

			</div> <!-- !END div.search-results -->

			<aside class="content__upcoming">

				{% include "../includes/components/upcoming.swig" %}

			</aside> <!-- !END aside.upcoming -->

	</section><!-- !END section.wrap -->

{% endblock %}
