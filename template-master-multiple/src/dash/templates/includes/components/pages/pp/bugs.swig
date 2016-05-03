<section class="m-panel h-mb">
					
	<h1 class="heading-panel h-fl">Bugs</h1>

	<p class="h-fr h-colour-c h-no-mb"><span id="js-bugsPP"></span>/{{ bugsPP.length }} complete</p>

	<table class="table">
		
		<thead>
			<tr>
				<th>Page name</th>
				<th>Bug type</th>
				<th>Date raised</th>
				<th>Complete</th>
				<th>Date resolved</th>
			</tr>
		</thead>

		<tbody>
			
			{% for bugs in bugsPP %}

			<tr>
				
				<td title="Page name">{{ bugs.pageName }}</td>
				
				<td title="Page name">{{ bugs.bugType }}</td>

				<td title="Page name">{{ bugs.dateRaised }}</td>
				
				{% if pages.bugs.resolved %}
					<td title="Page name"><svg class="icon icon-checkmark"><use xlink:href="#icon-checkmark"></use></svg></td>
				{% else %}
					<td title="Page name">-</td>
				{% endif %}

				<td title="Page name">{{ bugs.dateResolved }}</td>

			</tr>

			{% endfor %}

		</tbody>

	</table> <!-- !END table.table -->

</section> <!-- !END section.m-panel -->