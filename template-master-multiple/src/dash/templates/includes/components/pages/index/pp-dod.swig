<section class="m-panel">
					
	<h1>Public pages</h1>
	
	<a href="#" class="header-icon">
		<span class="h-vh">Show yslow results for public pages</span>
		<svg class="icon icon-meter"><use xlink:href="#icon-meter"></use></svg>
	</a>

	<section class="m-panel c-yslow">
		
		<h1>PP Yslow</h1>
		
		<div class="m-panel__inner">

			<dl>
				<dt>Version:</dt>
				<dd id="perfVersion"></dd>
				<dt>Size:</dt>
				<dd id="perfSize"></dd>
				<dt>Score:</dt>
				<dd id="perfScore"></dd>
				<dt>URL:</dt>
				<dd id="perfUrl"></dd>
				<dt>Requests:</dt>
				<dd id="perfRequests"></dd>
				<dt>Page load time:</dt>
				<dd id="perfLoadTime"></dd>
			</dl>

		</div>

	</section>

	<table class="table-pages">

		<thead>

			<tr>
				<th>Page name</th>
				<th>W3C validation</th>
				<th>Accessibility</th>
				<th>Document Outline</th>
				<th>Browser testing</th>
				<th>Device testing</th>
			</tr>
			
		</thead>

		<tbody>

			{% for items in dodPublic %}

			<tr>

				<td title="Page name"><a href="{{ items.pageUrl }}" title="{{ items.pageName }} Page">{{ items.pageName }}</a></td>
				
				{% if items.w3c %}
					<td title="Validation" class="pageComplete"><svg class="icon icon-checkmark"><use xlink:href="#icon-checkmark"></use></svg></td>
				{% else %}
					<td title="Validation">-</td>
				{% endif %}

				{% if items.accessibility %}
					<td title="Accessibility" class="pageComplete"><svg class="icon icon-checkmark"><use xlink:href="#icon-checkmark"></use></svg></td>
				{% else %}
					<td title="Accessibility">-</td>
				{% endif %}

				{% if items.docOutline %}
					<td title="Doc Outline" class="pageComplete"><svg class="icon icon-checkmark"><use xlink:href="#icon-checkmark"></use></svg></td>
				{% else %}
					<td title="Doc Outline">-</td>
				{% endif %}

				{% if items.browserTesting %}
					<td title="Browser Testing" class="pageComplete"><svg class="icon icon-checkmark"><use xlink:href="#icon-checkmark"></use></svg></td>
				{% else %}
					<td title="Browser Testing">-</td>
				{% endif %}

				{% if items.deviceTesting %}
					<td title="Device Testing" class="pageComplete"><svg class="icon icon-checkmark"><use xlink:href="#icon-checkmark"></use></svg></td>
				{% else %}
					<td title="Device Testing">-</td>
				{% endif %}

			</tr>

			{% endfor %}

		</tbody>

	</table>

</section>