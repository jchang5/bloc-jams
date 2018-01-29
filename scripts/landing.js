var animatePoints = function() {

          var points = document.getElementsByClassName('point');

          var revealFirstPoint = function() {
              points[0].style.opacity = 1;
              points[0].style.transform = "scaleX(1) translateY(0)";
              points[0].style.msTransform = "scaleX(1) translateY(0)";
              points[0].style.WebkitTransform = "scaleX(1) translateY(0)";
              points[0].style.WebkitTransition = "all 0.5s";
              points[0].style.transition = "all 0.5s";
          };

          var revealSecondPoint = function() {
              points[1].style.opacity = 1;
              points[1].style.transform = "scaleX(1) translateY(0)";
              points[1].style.msTransform = "scaleX(1) translateY(0)";
              points[1].style.WebkitTransform = "scaleX(1) translateY(0)";
              points[1].style.WebkitTransition = "all 1s";
              points[1].style.transition = "all 1s";
          };

          var revealThirdPoint = function() {
              points[2].style.opacity = 1;
              points[2].style.transform = "scaleX(1) translateY(0)";
              points[2].style.msTransform = "scaleX(1) translateY(0)";
              points[2].style.WebkitTransform = "scaleX(1) translateY(0)";
              points[2].style.WebkitTransition = "all 1.5s";
              points[2].style.transition = "all 1.5s";
          };

          revealFirstPoint();
          revealSecondPoint();
          revealThirdPoint();

      };
