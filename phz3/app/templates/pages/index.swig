{% extends '../layout/layout.swig' %}

{% block title %}{{ titleIndex }}{% endblock %}

{% block content %}

	{% include "../partials/sections/contract.swig" %}

	{% include "../partials/sections/freelance.swig" %}

	{% include "../partials/sections/about.swig" %}

{% endblock %}