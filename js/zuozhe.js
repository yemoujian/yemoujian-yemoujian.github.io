$(document).ready(function (){
    $('#advice').click(function(){
        alert("谢谢您的建议");
        window.location.href="关于作者.html";
    })

    var x = $("select");
    x.change(
    	function()
    	{
    		//获取id为select的下拉框选中的值
    	    var a = $("#test").val();
    	   
    	    var div = $("div");
    		if( a =="首页")
    		{
    		    div[6].innerHTML="首页：运用jQuery制作轮播图。第一段话运用了字体库，但是并不明显。";
    		}
    		else if( a =="人物介绍页")
    		{
    		    div[6].innerHTML="人物介绍页：仅有凌不疑的可点击查看详情。";
    		}
    		else if( a =="剧情简介页")
    		{
    		    div[6].innerHTML="剧情简介页：右上角可选择集数查看，只制作了第1集。进入第1集详情页后有表格增删改，可以在左上角进行增操作（点击重置是清空左上角中的内容），可在表格点击删除或修改进行删、改操作。下滑可以看到评论区可以进行增加评论，点击已有评论后的“x”可以删除该条评论。";
    		}
            else if( a =="高光时刻页")
    		{
    		    div[6].innerHTML="高光时刻页：电视中的高光视频，以及简单介绍。";
    		}
    	}
    );
});