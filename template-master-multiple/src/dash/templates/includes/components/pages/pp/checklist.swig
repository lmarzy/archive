<section class="m-panel">
					
	<h1 class="heading-panel h-fl">Checklist</h1>
	
	<p class="h-fr h-colour-c h-no-mb"><span id="js-checklistPPComplete"></span>/{{ checklistPP.length }} complete</p>

	<table class="table">
		
		<thead>
			<tr>
				<th>Task</th>
				<th>Complete</th>
			</tr>
		</thead>

		<tbody>
			
			{% for pages in checklistPP %}

				<tr>

					<td title="Tasks">{{ pages.taskName }}</td>
					
					{% if pages.complete %}
						<td title="Complete"><svg class="icon icon--checkmark"><use xlink:href="#icon-checkmark"></use></svg></td>
					{% else %}
						<td title="Complete">-</td>
					{% endif %}

				</tr>

			{% endfor %}

		</tbody>

	</table> <!-- !END table.table -->

</section>