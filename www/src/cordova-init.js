
var gcReady;
var admobid;
/**
 * Initialize Cordova plugins
 * For more Corova plugins, please go to [Cordova Plugin Registry](http://plugins.cordova.io/#/).
 * In Intel XDK, you can enable / disable / add Cordova Plugins on
 * Projects Tab
 *  -> Cordova 3.x Hybrid Mobile App Settings
 *     -> Plugins and Permissions
 */
/* jshint browser:true */
// Listen to deviceready event which is fired when Cordova plugins are ready
document.addEventListener('deviceready', function() {
    // Call splashscreen API to hide the splash.
    navigator.splashscreen.hide();
    StatusBar.hide();
    
    
    admobid = {
      banner: 'ca-app-pub-5984764034252420/4902569999', // or DFP format "/6253334/dfp_example_ad"
      interstitial: 'ca-app-pub-5984764034252420/6379303196'
    };
    
    if(AdMob) AdMob.createBanner({
        adId: admobid.banner,
        position: AdMob.AD_POSITION.BOTTOM_CENTER,
        overlap: true,
        autoShow: false
    });
    
    window.unityads.setUp('123321', "defaultZone", "rewardedVideoZone", false);
    window.unityads.onRewardedVideoAdCompleted = function() {
       // The rewarded ad was successfully completed, give the user their reward.
    
        var tempFlips = parseInt(window.localStorage.getItem('flipsAmount')) + 50;
        window.localStorage.setItem('flipsAmount', tempFlips);
        Shop.flipText.text = tempFlips+ ' Flips';
    };
    
    /*window.plugins.NativeAudio.preloadSimple( 'score', 'asset/horn.wav', function(msg){
    }, function(msg){
        console.log( 'error: ' + msg );
    });*/
    
   /* HeyzapAds.start("d2fe64235745fd50c490930441362642").then(function() {
 
        //HeyzapAds.VideoAd.addEventListener(HeyzapAds.VideoAd.Events.HIDE, Continue.startGame);
        
        HeyzapAds.VideoAd.fetch().then(function() {
            // Native call successful.
 
        }, function(error) {
            // Handle Error
 
        });
        
        
        HeyzapAds.IncentivizedAd.fetch().then(function() {
            // Native call successful.

        }, function(error) {
            // Handle Error

        });
        
        
        HeyzapAds.IncentivizedAd.addEventListener(HeyzapAds.IncentivizedAd.Events.COMPLETE,
        function() {
            // The rewarded ad was successfully completed, give the user their reward.
    
            var tempFlips = parseInt(window.localStorage.getItem('flipsAmount')) + 50;
            window.localStorage.setItem('flipsAmount', tempFlips);
            Shop.flipText.text = tempFlips+ ' Flips';
        });
        
        
        HeyzapAds.InterstitialAd.addEventListener(HeyzapAds.InterstitialAd.Events.HIDE,
        function(tag) {
            // The ad successfully finished showing and is now off the screen.
            adCounter = 0;
            game.state.start('Game');
        });
        
    //return HeyzapAds.showMediationTestSuite(); // returns a Promise
 
    }, function(error) {
    // Handle Error
 
    });*/
    
    var successCallback = function (user) {
        //alert(user.alias);
        gcReady = true;
        // user.alias, user.playerID, user.displayName
    };
    
    var failureCallback = function (user) {
        gcReady = false;
        //alert(user.alias);
        // user.alias, user.playerID, user.displayName
    };

    //ios leaderboards cordova-plugin-game-center
    //gamecenter.auth(successCallback, failureCallback);
    
    
    //android leaderboards cordova-plugin-play-games-services
    window.plugins.playGamesServices.auth();
    
    
   
    
   
});

document.addEventListener('onAdFailLoad',function(data){
    if(data.adType == 'interstitial') game.state.start('Game');
});

document.addEventListener('onAdDismiss',function(data){
    if(data.adType == 'interstitial') game.state.start('Game');
});