angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope,$stateParams) {
  $scope.yemekler = [
    { adi: 'Mantarlı Fırın Makarna ',kategory:'Makarna',tel:'4440444',logo:'https://i.nefisyemektarifleri.com/2017/03/30/besamel-soslu-mantarli-firin-makarna-2-500x333.jpg',malzemeler:'300 grammantar,2 yemek kaşığızeytinyağı,2 dişsarımsak,1/4 adetlimon,1 yemek kaşığıtereyağı,2 yemek kaşığıun,s2 su bardağısüt(400 ml)',yapilisi:'https://www.youtube.com/embed/QMhx7dI5sgI', id: 0 },
    { adi: 'Porsiyonluk Lahana Dolması',kategory:'PRATİK YEMEK',tel:'4440444',logo:'https://i.ytimg.com/vi/8_A0Kgqx0iA/maxresdefault.jpg',malzemeler:'300 grammantar,2 yemek kaşığızeytinyağı,2 dişsarımsak,1/4 adetlimon,1 yemek kaşığıtereyağı,2 yemek kaşığıun,s2 su bardağısüt(400 ml)',yapilisi:'https://www.youtube.com/embed/8_A0Kgqx0iA', id: 1 },
    { adi: 'Alinazik',kategory:'Et',tel:'4440444',logo:'https://www.dreamyfoody.com/wp-content/uploads/2020/05/alinazik.jpg',malzemeler:'300 grammantar,2 yemek kaşığızeytinyağı,2 dişsarımsak,1/4 adetlimon,1 yemek kaşığıtereyağı,2 yemek kaşığıun,s2 su bardağısüt(400 ml)',yapilisi:'https://www.youtube.com/embed/QMhx7dI5sgI', id: 2 },
    { adi: 'Mantarlı Patates Graten',kategory:'Sebze',tel:'4440444',logo:'https://s.hdnux.com/photos/32/06/45/6842707/3/rawImage.jpg',malzemeler:'300 grammantar,2 yemek kaşığızeytinyağı,2 dişsarımsak,1/4 adetlimon,1 yemek kaşığıtereyağı,2 yemek kaşığıun,s2 su bardağısüt(400 ml)',yapilisi:'https://www.youtube.com/embed/QMhx7dI5sgI', id: 3 },
    { adi: 'Kakaolu Islak Kek',kategory:'Tatli kek',tel:'4440444',logo:'https://imgrosetta.mynet.com.tr/file/12057603/12057603-728xauto.jpg',malzemeler:'300 grammantar,2 yemek kaşığızeytinyağı,2 dişsarımsak,1/4 adetlimon,1 yemek kaşığıtereyağı,2 yemek kaşığıun,s2 su bardağısüt(400 ml)',yapilisi:'https://www.youtube.com/embed/eDk-8IdGjUc', id: 4 },
    { adi: 'Revani',kategory:'ŞERBETLİ TATLI',tel:'4440444',logo:'https://cdn.yemek.com/mnresize/940/940/uploads/2014/06/revani-yemekcom.jpg',malzemeler:'300 grammantar,2 yemek kaşığızeytinyağı,2 dişsarımsak,1/4 adetlimon,1 yemek kaşığıtereyağı,2 yemek kaşığıun,s2 su bardağısüt(400 ml)',yapilisi:'https://www.youtube.com/embed/QMhx7dI5sgI', id: 5 },
    { adi: 'Yeşil Mercimekli Patates',kategory:'Sulu Yemek',tel:'4440444',logo:'https://cdn.yemek.com/mncrop/940/625/uploads/2019/01/yesil-mercimekli-patates-dizme-yemekcom.jpg',malzemeler:'300 grammantar,2 yemek kaşığızeytinyağı,2 dişsarımsak,1/4 adetlimon,1 yemek kaşığıtereyağı,2 yemek kaşığıun,s2 su bardağısüt(400 ml)',yapilisi:'https://www.youtube.com/embed/QMhx7dI5sgI', id: 6 },
     
  ];

  console.log("id" + $stateParams.yemekId);
  if($stateParams.yemekId){
    $scope.bilgi = $scope.yemekler[$stateParams.yemekId];
  }
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
