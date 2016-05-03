<section class="m-panel h-mb">
					
	<h1 class="heading-panel h-fl">Accessibility checklist</h1>

	<p class="h-fr h-colour-c h-no-mb"><span id="js-accessibilityPP"></span>/{{ accessibilityPP.length }} complete</p>
	
	<div class="table-wrap">

		<table class="table">
			
			<thead>
				<tr>
					<th>Page name</th>
					<th>Landmark banner</th>
					<th>Landmark navigation</th>
					<th>Landmark main</th>
					<th>Landmark article</th>
					<th>Landmark complementary</th>
					<th>Landmark contentinfo</th>
					<th>Landmark search</th>
					<th>Language attribute</th>
					<th>Document outline</th>
					<th>Links focus</th>
					<th>Links Recognisable</th>
					<th>Images alt</th>
					<th>JS unobtrusive</th>
					<th>JS Alternative</th>
					<th>Forms layout</th>
					<th>Forms labels</th>
					<th>Forms fieldset</th>
					<th>Forms legend</th>
					<th>Media transcript</th>
					<th>Media subtitles</th>
					<th>Colour contract</th>
					<th>Testing screen reader</th>
					<th>Testing keyboard navigation</th>
				</tr>
			</thead>

			<tbody>
				
				{% for checks in accessibilityPP %}

				<tr>

					<td title="Page name">{{ checks.pageName }}</td>

					{% if checks.landmarkBanner %}
						<td title="Landmark banner"><svg class="icon icon-checkmark"><use xlink:href="#icon-checkmark"></use></svg></td>
					{% else %}
						<td title="Landmark banner">-</td>
					{% endif %}

					{% if checks.landmarKNav %}
						<td title="Landmark navigation"><svg class="icon icon-checkmark"><use xlink:href="#icon-checkmark"></use></svg></td>
					{% else %}
						<td title="Landmark navigation">-</td>
					{% endif %}
					
					{% if checks.landmarkMain %}
						<td title="Landmark main"><svg class="icon icon-checkmark"><use xlink:href="#icon-checkmark"></use></svg></td>
					{% else %}
						<td title="Landmark main">-</td>
					{% endif %}

					{% if checks.landmarkArticle %}
						<td title="Landmark article"><svg class="icon icon-checkmark"><use xlink:href="#icon-checkmark"></use></svg></td>
					{% else %}
						<td title="Landmark article">-</td>
					{% endif %}

					{% if checks.landmarkComplementary %}
						<td title="Landmark complementary"><svg class="icon icon-checkmark"><use xlink:href="#icon-checkmark"></use></svg></td>
					{% else %}
						<td title="Landmark complementary">-</td>
					{% endif %}

					{% if checks.landmarkContentinfo %}
						<td title="Landmark contentinfo"><svg class="icon icon-checkmark"><use xlink:href="#icon-checkmark"></use></svg></td>
					{% else %}
						<td title="Landmark contentinfo">-</td>
					{% endif %}

					{% if checks.landmarkSearch %}
						<td title="Landmark search"><svg class="icon icon-checkmark"><use xlink:href="#icon-checkmark"></use></svg></td>
					{% else %}
						<td title="Landmark search">-</td>
					{% endif %}

					{% if checks.languageAttribute %}
						<td title="Language attribute"><svg class="icon icon-checkmark"><use xlink:href="#icon-checkmark"></use></svg></td>
					{% else %}
						<td title="Language attribute">-</td>
					{% endif %}

					{% if checks.documentOutline %}
						<td title="Document outline"><svg class="icon icon-checkmark"><use xlink:href="#icon-checkmark"></use></svg></td>
					{% else %}
						<td title="Document outline">-</td>
					{% endif %}

					{% if checks.linksFocus %}
						<td title="Links focus"><svg class="icon icon-checkmark"><use xlink:href="#icon-checkmark"></use></svg></td>
					{% else %}
						<td title="Links focus">-</td>
					{% endif %}

					{% if checks.linksRecognisable %}
						<td title="Links recognisable"><svg class="icon icon-checkmark"><use xlink:href="#icon-checkmark"></use></svg></td>
					{% else %}
						<td title="Links recognisable">-</td>
					{% endif %}

					{% if checks.imageAlt %}
						<td title="Images alt"><svg class="icon icon-checkmark"><use xlink:href="#icon-checkmark"></use></svg></td>
					{% else %}
						<td title="Images alt">-</td>
					{% endif %}

					{% if checks.jsUnobtrusive %}
						<td title="JS unobtrusive"><svg class="icon icon-checkmark"><use xlink:href="#icon-checkmark"></use></svg></td>
					{% else %}
						<td title="JS unobtrusive">-</td>
					{% endif %}

					{% if checks.jsNoJsAlternative %}
						<td title="JS alternative"><svg class="icon icon-checkmark"><use xlink:href="#icon-checkmark"></use></svg></td>
					{% else %}
						<td title="JS alternative">-</td>
					{% endif %}

					{% if checks.formsLayout %}
						<td title="Forms layout"><svg class="icon icon-checkmark"><use xlink:href="#icon-checkmark"></use></svg></td>
					{% else %}
						<td title="Forms layout">-</td>
					{% endif %}

					{% if checks.formsLabel %}
						<td title="Forms label"><svg class="icon icon-checkmark"><use xlink:href="#icon-checkmark"></use></svg></td>
					{% else %}
						<td title="Forms label">-</td>
					{% endif %}

					{% if checks.formsFieldset %}
						<td title="Forms fieldset"><svg class="icon icon-checkmark"><use xlink:href="#icon-checkmark"></use></svg></td>
					{% else %}
						<td title="Forms fieldset">-</td>
					{% endif %}

					{% if checks.formsLegend %}
						<td title="Forms legend"><svg class="icon icon-checkmark"><use xlink:href="#icon-checkmark"></use></svg></td>
					{% else %}
						<td title="Forms legend">-</td>
					{% endif %}

					{% if checks.mediaTextTranscripts %}
						<td title="Media transcript"><svg class="icon icon-checkmark"><use xlink:href="#icon-checkmark"></use></svg></td>
					{% else %}
						<td title="Media transcript">-</td>
					{% endif %}

					{% if checks.mediaSubtitles %}
						<td title="Media subtitles"><svg class="icon icon-checkmark"><use xlink:href="#icon-checkmark"></use></svg></td>
					{% else %}
						<td title="Media subtitles">-</td>
					{% endif %}

					{% if checks.colourContrast %}
						<td title="Colour contrast"><svg class="icon icon-checkmark"><use xlink:href="#icon-checkmark"></use></svg></td>
					{% else %}
						<td title="Colour contrast">-</td>
					{% endif %}

					{% if checks.testingScreenReader %}
						<td title="Testing screen reader"><svg class="icon icon-checkmark"><use xlink:href="#icon-checkmark"></use></svg></td>
					{% else %}
						<td title="Testing screen reader">-</td>
					{% endif %}

					{% if checks.testingKeyboardNavigation %}
						<td title="Testing keyboard navigation"><svg class="icon icon-checkmark"><use xlink:href="#icon-checkmark"></use></svg></td>
					{% else %}
						<td title="Testing keyboard navigation">-</td>
					{% endif %}

				</tr>

				{% endfor %}

			</tbody>

		</table> <!-- !END table.table -->

	</div>

</section> <!-- !END section.m-panel -->