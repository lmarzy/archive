<!doctype html>
<!--[if IE 9]><html class="no-js lt-ie10"> <![endif]-->
<html class="no-js" lang="en">
<head>

	{% include "head/meta.swig" %}
	
	{% include "head/css.swig" %}

	{% include "head/js.swig" %}	

</head>

<body itemscope itemtype="http://schema.org/WebPage">
	
	{% include "../includes/other/icons.swig" %}
	
	{% include "../includes/components/site-header.swig" %}
	
	<main class="c-main" itemscope itemprop="mainContentOfPage">

		{% block content %}{% endblock %}

	</main> <!-- !END main.l-main -->
	
	{% include "../includes/components/site-footer.swig" %}

	{% include "foot/js.swig" %}

</body>
</html>