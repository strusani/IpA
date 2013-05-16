//commented out by DAVIDHOARE Nov 28 to avoid server overload

// var pkBaseURL = (("https:" == document.location.protocol) ? "https://stats.infinitemonkeys.mobi/" : "http://stats.infinitemonkeys.mobi/");
// document.write(unescape("%3Cscript src='" + pkBaseURL + "piwik.js' type='text/javascript'%3E%3C/script%3E"));
// try {
// var piwikTracker = Piwik.getTracker(pkBaseURL + "piwik.php", 3);
// piwikTracker.trackPageView();
// piwikTracker.enableLinkTracking();
// } catch( err ) {}


// google analytics
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-23086799-5']);
  _gaq.push(['_setDomainName', 'fanapp.mobi']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
