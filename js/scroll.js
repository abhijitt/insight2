
    $(document).ready(function(){

        /**
         * This part handles the highlighting functionality.
         * We use the scroll functionality again, some array creation and
         * manipulation, class adding and class removing, and conditional testing
         */

        var aChildren = $("a").children(); // find the a children of the list items

        /*console.log(aChildren);
        var aArray = []; // create the empty aArray
        for (var i=0; i < aChildren.length; i++) {
            var aChild = aChildren[i];
            var ahref = $(aChild).attr('href');
            aArray.push(ahref);
        } // this for loop fills the aArray with attribute href values
        */
        var aArray = []; // = ['#Department-wise-classification','#Degree-of-Graduation', ];

        $("a").each(function() {

          if( String($(this).attr('href')) !== 'undefined' && (String($(this).attr('href'))).indexOf (".html") == -1){
              aArray.push(String($(this).attr('href')));
          }
            //console.log(String($(this).attr('href')));
            //Do your work
        })

        console.log(aArray);

        //aArray = ['#Department-wise-classification','#Degree-of-Graduation', ];
        //aArray =
        $(window).scroll(function(){
            //console.log(aArray);
            var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
            var windowHeight = $(window).height(); // get the height of the window
            var docHeight = $(document).height();

            for (var i=0; i < aArray.length; i++) {
                var theID = aArray[i];
                var divPos = $(theID).offset().top; // get the offset of the div from the top of page
                var divHeight = $(theID).height(); // get the height of the div in question
                if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
                    $("a[href='" + theID + "']").attr('id', 'scroll-active');
                    //$("a[href='" + theID + "']").addClass("scroll-active");
                } else {
                    $("a[href='" + theID + "']").removeAttr('id');
                    //$("a[href='" + theID + "']").removeClass("scroll-active");
                }
            }

            if(windowPos + windowHeight == docHeight) {
                if (!$("nav li:last-child a").hasClass("nav-active")) {
                    var navActiveCurrent = $(".nav-active").attr("href");
                    $("a[href='" + navActiveCurrent + "']").removeClass("nav-active");
                    $("nav li:last-child a").addClass("nav-active");
                }
            }
        });
    });
