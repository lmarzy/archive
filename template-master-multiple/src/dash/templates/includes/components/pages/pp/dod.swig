<section class="m-panel h-mb">
					
	<h1 class="heading-panel h-fl">Pages</h1>

	<p class="h-fr h-colour-c h-no-mb"><span id="js-dodPPComplete"></span>/{{ dodPP.length }} complete</p>

	<table class="table">
		
		<thead>
			<tr>
				<th>Page name</th>
				<th>W3C</th>
				<th>Accessibility</th>
				<th>Document outline</th>
				<th>Browser testing</th>
				<th>Device testing</th>
			</tr>
		</thead>

		<tbody>
			
			{% for pages in dodPP %}

			<tr>
				
				<td title="Page name"><a href="{{ pages.pagesUrl }}">{{ pages.pageName }}</a></td>
				
				{% if pages.w3c %}
					<td title="W3C"><svg class="icon icon--checkmark"><use xlink:href="#icon-checkmark"></use></svg></td>
				{% else %}
					<td title="W3C">-</td>
				{% endif %}

				{% if pages.accessibility %}
					<td title="Accessibility">Complete</td>
				{% else %}
					<td title="Accessibility">-</td>
				{% endif %}

				{% if pages.docOutline %}
					<td title="Document outline">Complete</td>
				{% else %}
					<td title="Document outline">-</td>
				{% endif %}

				{% if pages.browserTessting %}
					<td title="Browser testing">Complete</td>
				{% else %}
					<td title="Browser testing">-</td>
				{% endif %}

				{% if pages.deviceTesting %}
					<td title="Device testing">Complete</td>
				{% else %}
					<td title="Device testing">-</td>
				{% endif %}

			</tr>

			{% endfor %}

		</tbody>

	</table> <!-- !END table.table -->

</section> <!-- !END section.m-panel -->