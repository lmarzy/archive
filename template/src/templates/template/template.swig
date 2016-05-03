<!doctype html>
<!--[if IE 9]><html class="no-js lt-ie10"> <![endif]-->
<html class="no-js" lang="en">
<head>

	{% include "../partials/template/head/meta.swig" %}
	
	{% include "../partials/template/head/css.swig" %}

	{% include "../partials/template/head/js.swig" %}	

</head>

<body>
	
	{% include "../partials/other/icons.swig" %}

	{% include "../partials/layout/header.swig" %}
	
	<main role="main">
  {% block content %}{% endblock %}
	</main>

	{% include "../partials/layout/footer.swig" %}

	{% include "../partials/template/foot/js.swig" %}

</body>
</html>