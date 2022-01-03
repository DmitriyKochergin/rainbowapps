package com.example.app;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.os.Bundle;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.widget.ProgressBar;

public class MainActivity extends Activity {

    private WebView mWebView;
    private ProgressBar spinner;

    @Override
    @SuppressLint("SetJavaScriptEnabled")
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // REMOTE RESOURCE
//        String hostname = "https://vc.ru/marketing/161257-kak-zarabatyvat-do-35-000-rubley-v-den-na-prostom-webview-prilozhenii";
        String hostname = "https://dmitriykochergin.github.io/rainbowapps/";
        // LOCAL RESOURCE
//         String hostname = "file:///android_asset/index.html";

        setContentView(R.layout.activity_main);
        mWebView = findViewById(R.id.activity_main_webview);
        WebSettings webSettings = mWebView.getSettings();
        webSettings.setJavaScriptEnabled(true);
        webSettings.setRenderPriority(WebSettings.RenderPriority.HIGH);
        spinner = (ProgressBar) findViewById(R.id.progressBar1);
        mWebView.setWebViewClient(new MyWebViewClient(spinner, hostname));
        mWebView.getSettings().setCacheMode(WebSettings.LOAD_DEFAULT);
        mWebView.reload();

        mWebView.loadUrl(hostname);
    }

    @Override
    public void onBackPressed() {
        if(mWebView.canGoBack()) {
            mWebView.goBack();
        } else {
            super.onBackPressed();
        }
    }

    @Override
    protected void onRestart() {
        super.onRestart();

        // reload application on app restore (user switched to another activity and then navigated back)
        // TODO remove before production
        mWebView.getSettings().setCacheMode(WebSettings.LOAD_DEFAULT);
        mWebView.reload();
    }
}
