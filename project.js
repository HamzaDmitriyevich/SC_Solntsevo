window.addEventListener(
    'load',
    () => {

        var sidebar = document.getElementById('sidebar');
var menubar1 = document.getElementById('menubar1');
menubar1.addEventListener(
   
    'click',

    function(){
    sidebar.classList.toggle('active');
    if(sidebar.style.left=== '-200px'){
        sidebar.style.left = '0px';
    }else{
        sidebar.style.left = '-200px';
    }
    });
    }
);












