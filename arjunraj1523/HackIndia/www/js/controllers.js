 
angular.module('starter.controllers', ['ionic'])

.controller('DashCtrl', function($scope, $rootScope, $ionicUser, $ionicPush) {
      
    identify();
$rootScope.$on('$cordovaPush:tokenReceived', function(event, data) {

});
    
    function identify() {

    var user = $ionicUser.get();
    if(!user.user_id) {
      // Set your user_id here, or generate a random one.
      user.user_id = $ionicUser.generateGUID();
    };

    // Add some metadata to your user object.
    angular.extend(user, {
      name: 'HackIndia',
      bio: 'HackIndia 2015 Attendee'
    });

    // Identify your user with the Ionic User Service
    $ionicUser.identify(user).then(function(){
      $scope.identified = true;
      
        pushRegister();
    });
  };
    
     function pushRegister() {


    // Register with the Ionic Push service.  All parameters are optional.
    $ionicPush.register({
        
      canShowAlert: true, //Can pushes show an alert on your screen?
      canSetBadge: true, //Can pushes update app icon badges?
      canPlaySound: true, //Can notifications play a sound?
      canRunActionsOnWake: true, //Can run actions outside the app,
      onNotification: function(notification) {
        // Handle new push notifications here
        return true;
      }
    });
  };
    
    function hideAll(){
     $("#week1").hide();
     $("#day1").hide();
     $("#hour1").hide();
     $("#minute1").hide();
     $("#second1").hide();
     $("#week2").hide();
     $("#day2").hide();
     $("#hour2").hide();
     $("#minute2").hide();
     $("#second2").hide();
       
    
    }
    
 $('#clock1').countdown('2015/07/18 09:00:00', function(event) {
     $("#week1").html(event.strftime('%-w <br>Week%!w '));
     $("#day1").html(event.strftime('%-d <br>Day%!d '));
     $("#hour1").html(event.strftime('%-H <br>Hour%!H '));
     $("#minute1").html(event.strftime('%-M <br>Minute%!M '));
     $("#second1").html(event.strftime('%-S <br>Second%!S'));
     hideAll();
     if(event.offset.weeks == 0 && event.offset.days != 0) {
     $("#day1").show();
     $("#hour1").show();
     $("#minute1").show();
     $("#second1").show();
     }
     else if(event.offset.days == 0 && event.offset.weeks ==0) {
     $("#hour1").show();
     $("#minute1").show();
     $("#second1").show();
    }
     else {
         $("#week1").show();
     }
     
    if(event.offset.weeks ==0 && event.offset.days == 0 && event.offset.hours == 0 && event.offset.minutes == 0 && event.offset.seconds == 0){
    $('#clock2').countdown('2015/07/19 12:00:00', function(event) {
         $(".intro__subtitle").html("Time Left");
         
         $("#week2").html(event.strftime('%-w <br>Week%!w '));
         $("#day2").html(event.strftime('%-d <br>Day%!d '));
         $("#hour2").html(event.strftime('%-H <br>Hour%!H '));
         $("#minute2").html(event.strftime('%-M <br>Minute%!M '));
         $("#second2").html(event.strftime('%-S <br>Second%!S'));
         hideAll();
         if(event.offset.weeks == 0 && event.offset.days != 0) {
            $("#day2").show();
             
            
         }
         else if(event.offset.days == 0 && event.offset.weeks ==0) {
         $("#hour2").show();
         $("#minute2").show();
         $("#second2").show();
        }
         else {
             $("#week2").show();
         }
         if(event.offset.weeks ==0 && event.offset.days == 0 && event.offset.hours == 0 && event.offset.minutes == 0 && event.offset.seconds == 0){
         $(".intro__subtitle").html("Time is up ");
         }
        
                          })
    }
     
 })

})


.controller('ScheduleCtrl', function($scope,$ionicPopup, $timeout) {
    
  var countSat=1;
  var countSun=1;
    $("#schedule1").hide();
    $("#schedule2").hide();
    $scope.showScheduleSat = function() {
        
        if(countSat%2==0){        
                       
            countSat++;
            $("#schedule1").hide();
            $("#card2").show();
        }
        else{
            
            countSat++;
            $("#schedule1").show();
            $("#card2").hide();
        }

        
 };
     $scope.showScheduleSun = function() {
        
        if(countSun%2==0){        
                      
            countSun++;
            $("#schedule2").hide();
            $("#card1").show();
        }
        else{
            
            countSun++;
            $("#schedule2").show();
            $("#card1").hide();
        }

        
 };
    
})

.controller('SponCtrl', function($scope) {

})
.controller('ContactCtrl', function($scope) {
  
})


.controller('FLayoutCtrl', function($scope) {
    
    $scope.hash="http://hackindia.io/img/floorplan.png";
      

});
