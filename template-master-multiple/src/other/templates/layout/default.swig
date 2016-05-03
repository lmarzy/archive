<!doctype html>
<!--[if IE 9]><html class="no-js lt-ie10"> <![endif]-->
<html class="no-js" lang="en">
<head>

	{% include "../../../_shared/templates/includes/head/meta.swig" %}
	
	{% include "../../../_shared/templates/includes/head/css.swig" %}

	{% include "../../../_shared/templates/includes/head/js.swig" %}	

</head>

<body itemscope itemtype="http://schema.org/WebPage">
	
	{% include "../includes/other/icons.swig" %}
	
	{% include "../includes/layout/header.swig" %}
	
	<main role="main" class="l-main" itemscope itemprop="mainContentOfPage">
  {% block content %}{% endblock %}
	</main>
	
	{% include "../includes/layout/footer.swig" %}

	{% include "../../../_shared/templates/includes/foot/js.swig" %}

</body>
</html>