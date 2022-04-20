<script>

    let shield;

    function handleMousePos(event)
    {

        shield.style.left = (event.pageX-Math.floor(shield.offsetWidth/2)).toString()+"px";
        shield.style.top =(event.pageY-Math.floor(shield.offsetHeight/2)).toString()+"px";
    }
    //bind:this={shield} on:mousemove={handleMousePos}
</script>

    <div bind:this={shield} on:click={(e)=>console.log(e.detail)}>
        <!--will forward messages-->
    </div>

<style>
    div{
        width: 100%;
        height: 100%;
        /*opacity: 0.0;*/
        position:absolute;
        

        border:1px solid;
        border-color: black;
    }
</style>