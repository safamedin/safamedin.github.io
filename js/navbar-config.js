$(document).ready(function(){var scrollTime=400;if($(window).width()>500&&$(window).height()>500){scrollTime=400}else{scrollTime=400;$("#navbar").css("position","absolute")}$("#content").css("margin-top",$("#navbar").height()*1.05);$("html, body").animate({scrollTop:0},scrollTime);$(window).resize(function(){$("#content").css("margin-top",$("#navbar").height()*1.05)})});