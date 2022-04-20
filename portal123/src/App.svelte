<script>
	import Header from "./Header.svelte";
	import Cabinet from "./Cabinet.svelte"

	//grid couinter, rows auto hieght,
	// 

</script>

	<div class="container">
		
		<div class="div1">
			<Header/>
		</div>
		
		<div class="div2">
			<Cabinet/>
		</div>
	</div>



<style>
	/*use grid to specify actual grid specifications then use 
	grid area to select sections of the grid component to apply syting to*/
	.container {
		display: grid;
		grid-template-columns: 15% repeat(2, auto) 15%;
		grid-column-gap: 7%;
		grid-row-gap: 0px;
	}
.div1 { grid-area: 1 / 2 / 2 / 4; }
.div2 { grid-area: 2 / 2 / 3 / 4; }
</style>