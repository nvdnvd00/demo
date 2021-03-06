package com.demo;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.inprogress.reactnativeyoutube.ReactNativeYouTube;
import com.brentvatne.react.ReactVideoPackage;
import com.BV.LinearGradient.LinearGradientPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.reactnativecomponent.splashscreen.RCTSplashScreenPackage;
import com.facebook.reactnative.androidsdk.FBSDKPackage;
import com.reactnativecomponent.splashscreen.RCTSplashScreenPackage;


import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

import com.facebook.CallbackManager;// neos add fbsdk
import com.facebook.FacebookSdk;// neos add fbsdk
import com.facebook.reactnative.androidsdk.FBSDKPackage;// neos add fbsdk
import com.facebook.appevents.AppEventsLogger;// neos add fbsdk



  

public class MainApplication extends Application implements ReactApplication {
  
  private static CallbackManager mCallbackManager = CallbackManager.Factory.create();

  protected static CallbackManager getCallbackManager() { 
    return mCallbackManager; 
  } 

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
      @Override
      public boolean getUseDeveloperSupport() {
        return BuildConfig.DEBUG;
      }

      @Override
      protected List<ReactPackage> getPackages() {
        return Arrays.<ReactPackage>asList(
            //new SplashScreenReactPackage(), //splashcreen neos add
            new MainReactPackage(),
            new ReactNativeYouTube(),
            new ReactVideoPackage(),
            new LinearGradientPackage(),
            new VectorIconsPackage(),
            new RCTSplashScreenPackage(),
         
            new FBSDKPackage(mCallbackManager)
        );
      }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    FacebookSdk.sdkInitialize(getApplicationContext());
    // If you want to use AppEventsLogger to log events.
    AppEventsLogger.activateApp(this);
}
}
