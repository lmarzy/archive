{% extends '../../layout/default.swig' %}

{% block content %}
	
	<div class="l-grid">
		
		{% include "../../includes/components/pages/pp/yslow.swig" %}

	</div>

	<div class="l-grid">
		
		<div class="l-dod">

			{% include "../../includes/components/pages/pp/dod.swig" %}

			{% include "../../includes/components/pages/pp/bugs.swig" %}

			{% include "../../includes/components/pages/pp/accessibility.swig" %}
			
		</div> <!-- !END div.l-dod -->

		<div class="l-checklist">
				
				{% include "../../includes/components/pages/pp/checklist.swig" %}

		</div> <!-- !END div.l-checklist -->

	</div> <!-- !END div.l-grid -->

{% endblock %}