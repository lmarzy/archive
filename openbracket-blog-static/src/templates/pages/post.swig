{% extends '../layout/default.swig' %}

{% block content %}
    
    <div class="o-grid">
        
        <div class="o-grid__item one-whole bp20-two-thirds">
            
            {% include "../includes/components/post-detail.swig" %}

        </div>

        <div class="o-grid__item one-whole bp20-one-third">
    
            {% include "../includes/components/around.swig" %}            

        </div>

    </div>

{% endblock %}