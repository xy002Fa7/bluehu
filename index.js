(function (window) {
    function setsizeConfig(max,unit) {
        var config={};
        for(var i=0;i<max;i++){
            config[i]=`${i}${unit}`;
        }
        return config;
    }
    window.tailwind.config = {
        darkMode:"selector",
        theme: {
          extend: {
            colors: {
              clifford: '#da373d',
              a:"#934BFF",
              b: "#5F3AFC",
            },
            width: setsizeConfig(3000,"px"),
            height: setsizeConfig(3000,"px"),
            fontSize:setsizeConfig(200,"px"),
            background:{as: "linear-gradient(90deg, #934BFF, #5F3AFC);"},
          },
          
        },
      }
})(window)