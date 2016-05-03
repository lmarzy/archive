<section class="section contract">

	<div class="wrap">
	
		<header>

			<h1 id="contract" class="section-heading">{{ contract.title }}</h1>

			<p>{{ contract.intro }}</p>

		</header>
		
		<ul class="grid-wrap l-clients">
			
			<li>

				<figure class="panel client">
					
					<img src="{{ contract.clients.one.img }}" alt="{{ contract.clients.one.imgalt }}">

					<figcaption>{{ contract.clients.one.caption }}</figcaption>

				</figure>

			</li>

			<li>
				
				<figure class="panel client">
					
					<img src="{{ contract.clients.two.img }}" alt="{{ contract.clients.two.imgalt }}">
					
					<figcaption>{{ contract.clients.two.caption }}</figcaption>

				</figure>

			</li>

			<li>
				
				<figure class="panel client">
					
					<img src="{{ contract.clients.three.img }}" alt="{{ contract.clients.three.imgalt }}">

					<figcaption>{{ contract.clients.three.caption }}</figcaption>

				</figure>

			</li>

			<li>

				<figure class="panel client">
					
					<img src="{{ contract.clients.four.img }}" alt="{{ contract.clients.four.imgalt }}">

					<figcaption>{{ contract.clients.four.caption }}</figcaption>

				</figure>

			</li>

		</div>
	
		{% include "../partials/sections/latest-work.swig" %}

</section>