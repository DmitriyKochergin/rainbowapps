package com.example.app;

import android.content.Intent;
import android.graphics.Bitmap;
import android.net.Uri;
import android.view.View;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.ProgressBar;

class MyWebViewClient extends WebViewClient {

    private final String hostname;
    private ProgressBar spinner;

    public MyWebViewClient(ProgressBar spinner, String hostname) {
        this.hostname = hostname;
        this.spinner = spinner;
    }

    @Override
    public void onPageStarted(WebView webview, String url, Bitmap favicon) {
        webview.setVisibility(View.INVISIBLE);
    }

    @Override
    public boolean shouldOverrideUrlLoading(WebView view, String url) {
        // Log.i("MyWebViewClient", url + "---" + this.hostname);
        if (url.startsWith("file:") || url.contains(this.hostname)) {
            // Returning false means that you are going to load this url in the webView itself
            return false;
        }
        // Returning true means that you need to handle what to do with the url
        // e.g. open web page in a Browser
        Intent intent = new Intent(Intent.ACTION_VIEW, Uri.parse(url));
        view.getContext().startActivity(intent);
        return true;
    }

    @Override
    public void onPageFinished(WebView view, String url) {
        super.onPageFinished(view, url);
        spinner.setVisibility(View.GONE);

        view.setVisibility(View.VISIBLE);
        super.onPageFinished(view, url);
    }
}
