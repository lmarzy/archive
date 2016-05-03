<section class="latestWork">
	
	<h1 class="visuallyhidden">Latest work</h1>
	
	<div id="latestWork-wrap" class="wrap">

		<section class="latestWork--details latestWork--current">
			
			<h1 class="latestWork--type">Current:</h1>

				<article>

					<h1 class="latestWork--heading">{{ latestwork.current.title }}</h1>
					<p>{{ latestwork.current.details }}</p>
				
					<button id="view-last" class="latestWork--link last" data-icon="&#xe006;" title="Show Previous Role"><span class="visuallyhidden">View last contract role</span></button>

				</article>

		</section>
		
		<section class="latestWork--details latestWork--last">

			<h1 class="latestWork--type">Previous:</h1>

				<article>

					<h1 class="latestWork--heading">{{ latestwork.previous.title }}</h1>
					<p>{{ latestwork.previous.details }}</p>
				
					<button id="view-current" class="latestWork--link current" data-icon="&#xe007;" title="Show Current Role"><span class="visuallyhidden">View current contract role</span></button>

				</article>

		</section>

	</div>

</section>