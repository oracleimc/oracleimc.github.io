jQuery(function ($) {
  $("#rss-corporate").rss("https://www.oracle.com/corporate/press/rss/rss-pr.xml", {
    limit: 8
  })
})

jQuery(function ($) {
  $("#rss-customers").rss("https://www.oracle.com/search/customers/feed", {
    limit: 8
  })
})

jQuery(function ($) {
  $("#rss-blogs").rss("http://feeds.feedburner.com/oracle/github", {
    limit: 8
  })
})
