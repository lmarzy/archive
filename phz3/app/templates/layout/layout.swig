<!doctype html>
<!--[if (IE 8)&!(IEMobile)]><html class="no-js lt-ie9" lang="en"><![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"><!--<![endif]-->
<head>
	<title>{% block title %}{% endblock %}</title>
	{% include "../partials/head/meta.swig" %}
	
	{% include "../partials/head/css.swig" %}

</head>

<body>
	
	{% include "../partials/structure/header.swig" %}

	{% include "../partials/structure/sidebar.swig" %}
	
	<main role="main">
  {% block content %}{% endblock %}
	</main>

	{% include "../partials/structure/footer.swig" %}

	{% include "../partials/foot/js.swig" %}

</body>
</html>